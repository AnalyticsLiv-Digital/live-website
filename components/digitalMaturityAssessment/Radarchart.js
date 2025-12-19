import { useEffect, useRef, useState } from 'react';

export default function RadarChart({ categories, centerText, onClick }) {
    const canvasRef = useRef(null);
    const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, title: '', value: '' });
    const pointsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);

        drawRadar(ctx, rect.width, rect.height);
    }, [categories, centerText]);

    const drawRadar = (ctx, W, H) => {
        ctx.clearRect(0, 0, W, H);

        const cx = W / 2;
        const cy = H / 2 + 6;
        const r = Math.min(W, H) * 0.34;

        const labels = categories.map(c => c.name.replace('&', '&').split(' ').slice(0, 2).join(' '));
        const values = categories.map(c => c.pct / 100);

        // Background circle
        ctx.save();
        ctx.fillStyle = 'rgba(91,94,247,0.06)';
        ctx.beginPath();
        ctx.arc(cx, cy, r + 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Concentric circles
        for (let i = 1; i <= 4; i++) {
            const rr = r * (i / 4);
            ctx.beginPath();
            ctx.arc(cx, cy, rr, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(15,23,42,0.08)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        const n = values.length;
        const pts = [];

        // Draw axes and labels
        for (let i = 0; i < n; i++) {
            const a = (Math.PI * 2 * i / n) - Math.PI / 2;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;

            // Axis lines
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(15,23,42,0.08)';
            ctx.stroke();

            // Labels
            ctx.fillStyle = 'rgba(85,98,119,1)';
            ctx.font = '850 13px Plus Jakarta Sans, Inter, system-ui';
            const lx = cx + Math.cos(a) * (r + 22);
            const ly = cy + Math.sin(a) * (r + 22);
            const txt = labels[i];

            const align = Math.cos(a);
            ctx.textAlign = align > 0.2 ? 'left' : align < -0.2 ? 'right' : 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(txt, lx, ly);

            // Calculate points
            const rr = r * values[i];
            const px = cx + Math.cos(a) * rr;
            const py = cy + Math.sin(a) * rr;
            pts.push({ x: px, y: py, idx: i, label: categories[i].name, pct: categories[i].pct });
        }

        pointsRef.current = pts;

        // Draw filled polygon
        ctx.beginPath();
        pts.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.fillStyle = 'rgba(91,94,247,0.16)';
        ctx.strokeStyle = 'rgba(14,165,233,0.65)';
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

        // Draw points
        pts.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(14,165,233,1)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,1)';
            ctx.lineWidth = 3;
            ctx.stroke();
        });

        // Center text
        if (centerText) {
            ctx.save();
            ctx.fillStyle = 'rgba(11,18,32,1)';
            ctx.font = '950 22px Inter, system-ui';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(centerText, cx, cy);
            ctx.restore();
        }
    };

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        const hit = pointsRef.current.find(p => {
            const dx = mx - p.x;
            const dy = my - p.y;
            return Math.sqrt(dx * dx + dy * dy) < 10;
        });

        if (hit) {
            setTooltip({
                show: true,
                x: e.clientX,
                y: e.clientY,
                title: hit.label,
                value: `${hit.pct}%`
            });
            canvas.style.cursor = 'pointer';
        } else {
            setTooltip({ ...tooltip, show: false });
            canvas.style.cursor = '';
        }
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, show: false });
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                className="block w-full h-[340px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            />
            {tooltip.show && (
                <div
                    className="fixed z-[200] pointer-events-none bg-white/95 border border-gray-900/10 shadow-[0_14px_40px_rgba(15,23,42,0.12)] px-2.5 py-2.5 rounded-2xl min-w-[190px]"
                    style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
                >
                    <b className="block text-[12.8px]">{tooltip.title}</b>
                    <small className="block text-gray-500 mt-1 font-[850]">{tooltip.value}</small>
                </div>
            )}
        </>
    );
}