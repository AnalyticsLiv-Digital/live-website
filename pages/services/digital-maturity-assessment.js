'use client';

import { useState, useEffect, useRef } from 'react';
import { stages, categoryWeights, baseModel, modeAddons, quickIds, services } from '../../utils/data';
import Header from '../../components/digitalMaturityAssessment/header';
import Hero from '../../components/digitalMaturityAssessment/hero';
import AssessmentPanel from '../../components/digitalMaturityAssessment/Assessmentpanel';
import ResultsPanel from '../../components/digitalMaturityAssessment/ResultsPanel';
import RadarModal from '../../components/digitalMaturityAssessment/Radarmodal';
import Toast from '../../components/digitalMaturityAssessment/Toast';
import MetaSchemaOg from '../../components/MetaSchemaOg';
import PrintableContent from '../../components/digitalMaturityAssessment/Printablecontent';

const STORAGE_KEY = "al_maturity_v2";
const SNAP_KEY = "s";

export default function Home() {
    const [mode, setMode] = useState('general');
    const [depth, setDepth] = useState('quick');
    const [activeCat, setActiveCat] = useState(0);
    const [answers, setAnswers] = useState(new Map());
    const [model, setModel] = useState([]);
    const [toast, setToast] = useState({ show: false, message: '' });
    const [showRadarModal, setShowRadarModal] = useState(false);
    const [email, setEmail] = useState('');
    const [activeTab, setActiveTab] = useState('visuals');


    // Build model based on mode and depth
    const buildModel = (currentMode, currentDepth) => {
        let newModel = JSON.parse(JSON.stringify(baseModel));

        // Apply mode addons
        const addons = modeAddons[currentMode] || [];
        addons.forEach(addon => {
            const cat = newModel.find(c => c.id === addon.cat);
            if (cat) cat.questions.push({ ...addon.q });
        });

        // Filter for depth
        if (currentDepth === 'quick') {
            newModel = newModel.map(c => ({
                ...c,
                questions: c.questions.filter(q => quickIds.has(q.id))
            })).filter(c => c.questions.length > 0);
        }

        // Apply existing answers
        newModel.forEach(c => {
            c.questions.forEach(q => {
                if (answers.has(q.id)) {
                    q.value = answers.get(q.id);
                }
            });
        });

        return newModel;
    };

    // Calculate scores
    const calculateScores = () => {
        const categories = model.map(c => {
            const max = c.questions.length * 3;
            const sum = c.questions.reduce((a, q) => a + (q.value ?? 0), 0);
            const pct = max ? Math.round((sum / max) * 100) : 0;
            const answered = c.questions.filter(q => q.value !== null).length;
            return { id: c.id, name: c.name, pct, answered, total: c.questions.length };
        });

        let weighted = 0, weightSum = 0;
        categories.forEach(c => {
            const w = categoryWeights[c.id] ?? 0;
            weighted += w * c.pct;
            weightSum += w;
        });
        const overall = Math.round(weightSum ? (weighted / weightSum) : 0);

        const allQuestions = model.flatMap(c => c.questions);
        const answeredCount = allQuestions.filter(q => q.value !== null).length;
        const confidence = Math.round((answeredCount / Math.max(1, allQuestions.length)) * 100);

        return { overall, confidence, categories, answeredCount, totalCount: allQuestions.length };
    };

    // Show toast
    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 2400);
    };

    // Save state to localStorage
    const saveState = () => {
        const payload = {
            mode,
            depth,
            activeCat,
            answers: Array.from(answers.entries())
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    };

    // Load state from localStorage
    const loadState = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return false;
            const s = JSON.parse(raw);
            if (['general', 'ecommerce', 'leadgen', 'publisher'].includes(s.mode)) setMode(s.mode);
            if (['quick', 'deep'].includes(s.depth)) setDepth(s.depth);
            if (Array.isArray(s.answers)) {
                const newAnswers = new Map();
                s.answers.forEach(([id, v]) => {
                    v = Number(v);
                    if (typeof id === 'string' && [0, 1, 2, 3].includes(v)) {
                        newAnswers.set(id, v);
                    }
                });
                setAnswers(newAnswers);
            }
            setActiveCat(Number.isFinite(s.activeCat) ? Math.max(0, s.activeCat) : 0);
            return true;
        } catch (e) {
            return false;
        }
    };

    // Encode/decode snapshot for URL sharing
    const encodeSnapshot = () => {
        const payload = {
            v: 1,
            mode,
            depth,
            a: Array.from(answers.entries())
        };
        const json = JSON.stringify(payload);
        const b64 = btoa(unescape(encodeURIComponent(json)))
            .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        return b64;
    };

    const decodeSnapshot = (b64) => {
        try {
            b64 = String(b64 || '').replace(/-/g, '+').replace(/_/g, '/');
            while (b64.length % 4) b64 += '=';
            const json = decodeURIComponent(escape(atob(b64)));
            const s = JSON.parse(json);
            if (!s || typeof s !== 'object') return false;
            if (['general', 'ecommerce', 'leadgen', 'publisher'].includes(s.mode)) setMode(s.mode);
            if (['quick', 'deep'].includes(s.depth)) setDepth(s.depth);
            if (Array.isArray(s.a)) {
                const newAnswers = new Map();
                s.a.forEach(([id, v]) => {
                    v = Number(v);
                    if (typeof id === 'string' && [0, 1, 2, 3].includes(v)) {
                        newAnswers.set(id, v);
                    }
                });
                setAnswers(newAnswers);
            }
            setActiveCat(0);
            return true;
        } catch (e) {
            return false;
        }
    };

    // Initialize on mount
    useEffect(() => {
        const restored = loadState();

        // Check for snapshot in URL
        const params = new URLSearchParams(window.location.search);
        const snap = params.get(SNAP_KEY);
        if (snap) {
            const ok = decodeSnapshot(snap);
            if (ok) {
                showToast('Resumed from link ✅');
            } else {
                showToast('Resume link invalid or expired.');
            }
        } else if (restored) {
            showToast('Progress restored ✅');
        }
    }, []);

    // Update model when mode, depth, or answers change
    useEffect(() => {
        setModel(buildModel(mode, depth));
    }, [mode, depth, answers]);

    // Save state whenever it changes
    useEffect(() => {
        if (model.length > 0) {
            saveState();
        }
    }, [mode, depth, activeCat, answers, model]);

    const setAnswer = (catIdx, qIdx, score) => {
        const qq = model[catIdx].questions[qIdx];
        const newAnswers = new Map(answers);
        newAnswers.set(qq.id, score);
        setAnswers(newAnswers);

        const cat = model[catIdx];
        if (cat.questions.every(q => newAnswers.has(q.id) && newAnswers.get(q.id) !== null)) {
            showToast(`✅ "${cat.name}" completed.`);
        }
    };

    const handleModeChange = (newMode) => {
        setMode(newMode);
        showToast(`Mode set to ${modeLabel(newMode)}.`);
    };

    const handleDepthChange = (newDepth) => {
        setDepth(newDepth);
        setActiveCat(0);
        showToast(`${depthLabel(newDepth)} Scan enabled. Answers preserved.`);
    };

    const handleReset = () => {
        localStorage.removeItem(STORAGE_KEY);
        const params = new URLSearchParams(window.location.search);
        if (params.get(SNAP_KEY)) {
            params.delete(SNAP_KEY);
            const url = new URL(window.location.href);
            url.search = params.toString();
            window.history.replaceState({}, '', url.toString());
        }
        setAnswers(new Map());
        setActiveCat(0);
        showToast('Reset complete.');
    };

    const handleShareResume = async () => {
        const url = new URL(window.location.href);
        url.searchParams.set(SNAP_KEY, encodeSnapshot());
        url.searchParams.set('mode', mode);
        url.searchParams.set('scan', depth);
        try {
            await navigator.clipboard.writeText(url.toString());
            showToast('Resume link copied ✅');
        } catch (e) {
            showToast('Copy failed. You can manually copy the URL.');
        }
    };

    const handleShareLanding = async () => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.delete(SNAP_KEY);
        url.search = params.toString();
        url.searchParams.set('mode', mode);
        url.searchParams.set('scan', depth);
        try {
            await navigator.clipboard.writeText(url.toString());
            showToast('Landing link copied ✅');
        } catch (e) {
            showToast('Copy failed. You can manually copy the URL.');
        }
    };

    const scores = calculateScores();

    return (
        <div className="min-h-screen max-w-7xl mx-auto"
            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>

            <MetaSchemaOg
                url="https://analyticsliv.com/services/digital-maturity-assessment"
                title="Digital & Marketing Maturity Assessment | AnalyticsLiv"
                description="Get a maturity score + stage (Nascent → Multi-Moment) and a tailored roadmap."
                twitterTitle="Digital & Marketing Maturity Assessment | AnalyticsLiv"
                twitterDescription="Get a maturity score + stage (Nascent → Multi-Moment) and a tailored roadmap."
            // faqData={content}
            />
            <div className="max-w-[1560px] mx-auto px-[26px] py-6 pb-24">
                <div className="print:hidden sticky top-16 z-30 mt-2.5 ">
                    <Header
                        mode={mode}
                        depth={depth}
                        scores={scores}
                        onModeChange={handleModeChange}
                        onDepthChange={handleDepthChange}
                        onReset={handleReset}
                        onShowResults={() => document.getElementById('resultsPanel')?.scrollIntoView({ behavior: 'smooth' })}
                    />

                    <div className="hidden print:block">
                        <PrintableContent
                            mode={mode}
                            depth={depth}
                            scores={scores}
                            model={model}
                            activeCat={activeCat}
                            email={email}
                            activeTab={activeTab}
                            onStart={() => { }}
                            onShareResume={handleShareResume}
                            onShareLanding={handleShareLanding}
                            onSetActiveCat={setActiveCat}
                            onSetAnswer={setAnswer}
                            onNext={() => activeCat < model.length - 1 && setActiveCat(activeCat + 1)}
                            onPrev={() => activeCat > 0 && setActiveCat(activeCat - 1)}
                            onEmailChange={setEmail}
                            onTabChange={setActiveTab}
                            onOpenRadarModal={() => setShowRadarModal(true)}
                            showToast={showToast}
                        />
                    </div>
                </div>

                <Hero
                    mode={mode}
                    depth={depth}
                    scores={scores}
                    onStart={() => document.getElementById('assessmentPanel')?.scrollIntoView({ behavior: 'smooth' })}
                    onShareResume={handleShareResume}
                    onShareLanding={handleShareLanding}
                />

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 mt-5">
                    <AssessmentPanel
                        model={model}
                        activeCat={activeCat}
                        onSetActiveCat={setActiveCat}
                        onSetAnswer={setAnswer}
                        onNext={() => activeCat < model.length - 1 && setActiveCat(activeCat + 1)}
                        onPrev={() => activeCat > 0 && setActiveCat(activeCat - 1)}
                    />

                    <ResultsPanel
                        scores={scores}
                        mode={mode}
                        depth={depth}
                        model={model}
                        email={email}
                        onEmailChange={setEmail}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        onOpenRadarModal={() => setShowRadarModal(true)}
                        showToast={showToast}
                    />
                </div>
            </div>
            <div className="print:hidden">

                <RadarModal
                    show={showRadarModal}
                    onClose={() => setShowRadarModal(false)}
                    categories={scores.categories}
                    overall={scores.overall}
                />
            </div>
            <div className="print:hidden">

                <Toast show={toast.show} message={toast.message} />
            </div>
        </div>
    );
}

function modeLabel(m) {
    return m === 'ecommerce' ? 'eCommerce' : m === 'leadgen' ? 'Lead-gen' : m === 'publisher' ? 'Publisher' : 'General';
}

function depthLabel(d) {
    return d === 'deep' ? 'Deep' : 'Quick';
}
