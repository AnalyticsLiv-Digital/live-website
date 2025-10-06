"use client";
import { useEffect, useRef, useState } from "react";

export default function TestimonialCarousel() {
    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // refs to avoid stale closures
    const indexRef = useRef(0);
    const timeoutRef = useRef(null);
    const animRef = useRef({ rafId: null, cancelled: false });
    const isAnimatingRef = useRef(false);

    const FORWARD_DELAY = 4000; // 4s between forward steps
    const FORWARD_SCROLL_MS = 600; // normal forward scroll duration
    const REVERSE_SCROLL_MS = 400; // reverse from last -> first

    const testimonials = [
        {
            text: "Working at AnalyticsLiv means challenging projects and supportive mentors. I've grown so much in my career here.",
            author: "— Ansuya Kachroo",
        },
        {
            text: "The culture is innovation-driven. We experiment, learn, and celebrate wins together.",
            author: "— Atul Verma",
        },
        {
            text: "Collaboration is at the heart of what we do. I feel valued and heard every day.",
            author: "— Anshul Dhurandhar",
        },
    ];

    // Keep indexRef in sync with state
    const setIndexAndRef = (i) => {
        indexRef.current = i;
        setIndex(i);
    };

    // Cancel any ongoing rAF animation
    function cancelScrollAnimation() {
        if (animRef.current.rafId) {
            cancelAnimationFrame(animRef.current.rafId);
        }
        animRef.current.cancelled = true;
        animRef.current.rafId = null;
        isAnimatingRef.current = false;
    }

    // Smooth scroll to computed left position in a controlled duration
    function scrollToIndex(i, duration = 600) {
        return new Promise((resolve) => {
            const carousel = carouselRef.current;
            if (!carousel || !isMounted) {
                resolve();
                return;
            }
            const items = carousel.children;
            const target = items[i];
            if (!target) {
                resolve();
                return;
            }

            // compute robust left position
            const carouselRect = carousel.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const start = carousel.scrollLeft;
            const left = targetRect.left - carouselRect.left + carousel.scrollLeft;
            const change = left - start;

            if (Math.abs(change) < 2 || duration <= 0) {
                carousel.scrollLeft = left;
                resolve();
                return;
            }

            animRef.current.cancelled = false;
            const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();

            // easeInOutCubic
            const ease = (t) =>
                t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;

            function step(now) {
                if (animRef.current.cancelled || !isMounted) {
                    resolve();
                    return;
                }
                const elapsed = now - startTime;
                const t = Math.min(1, elapsed / duration);
                const eased = ease(t);

                if (carousel && carouselRef.current) {
                    carousel.scrollLeft = start + change * eased;
                }

                if (t < 1) {
                    animRef.current.rafId = requestAnimationFrame(step);
                } else {
                    animRef.current.rafId = null;
                    resolve();
                }
            }

            if (typeof requestAnimationFrame !== 'undefined') {
                animRef.current.rafId = requestAnimationFrame(step);
            } else {
                // Fallback for SSR
                setTimeout(() => {
                    if (carousel && carouselRef.current) {
                        carousel.scrollLeft = start + change;
                    }
                    resolve();
                }, duration);
            }
        });
    }

    // The tick: either go to next or perform reverse-to-first when on last
    async function tick() {
        if (isAnimatingRef.current || !isMounted) return;
        const current = indexRef.current;
        const lastIndex = testimonials.length - 1;

        if (current < lastIndex) {
            // forward step
            isAnimatingRef.current = true;
            await scrollToIndex(current + 1, FORWARD_SCROLL_MS);
            if (isMounted) {
                setIndexAndRef(current + 1);
                isAnimatingRef.current = false;
                scheduleNext(FORWARD_DELAY);
            }
        } else {
            // at last -> reverse quickly to 0
            isAnimatingRef.current = true;
            await scrollToIndex(0, REVERSE_SCROLL_MS);
            if (isMounted) {
                setIndexAndRef(0);
                isAnimatingRef.current = false;
                scheduleNext(FORWARD_DELAY);
            }
        }
    }

    function scheduleNext(delay = FORWARD_DELAY) {
        if (!isMounted) return;
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            if (isMounted) {
                tick();
            }
        }, delay);
    }

    // Pause/resume controls
    function pauseAutoplay() {
        clearTimeout(timeoutRef.current);
        cancelScrollAnimation();
    }

    function resumeAutoplay() {
        if (isMounted) {
            // schedule next; keep short safety delay so layout stabilizes
            scheduleNext(400);
        }
    }

    // Mount effect
    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    // Start autoplay on mount
    useEffect(() => {
        if (isMounted) {
            scheduleNext(FORWARD_DELAY);
        }
        return () => {
            clearTimeout(timeoutRef.current);
            cancelScrollAnimation();
        };
    }, [isMounted]);

    // Optional: keep carousel aligned if window resized
    useEffect(() => {
        if (!isMounted) return;

        const onResize = () => {
            if (isMounted && carouselRef.current) {
                // Add a small delay to ensure layout has stabilized
                setTimeout(() => {
                    if (isMounted) {
                        scrollToIndex(indexRef.current, 200);
                    }
                }, 100);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("resize", onResize);
            return () => {
                if (typeof window !== 'undefined') {
                    window.removeEventListener("resize", onResize);
                }
            };
        }
    }, [isMounted]);

    // Don't render anything until mounted (prevents SSR issues)
    if (!isMounted) {
        return (
            <div className="w-full mt-12">
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-full rounded-2xl bg-white shadow p-8">
                        <p className="mt-4 italic text-slate-700">"{testimonials[0].text}"</p>
                        <p className="mt-2 font-semibold text-slate-900">{testimonials[0].author}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full mt-12">
            <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
                onFocus={pauseAutoplay}
                onBlur={resumeAutoplay}
            >
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-full snap-center rounded-2xl bg-white shadow p-8"
                        aria-hidden={index !== i}
                    >
                        <p className="mt-4 italic text-slate-700">"{t.text}"</p>
                        <p className="mt-2 font-semibold text-slate-900">{t.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}