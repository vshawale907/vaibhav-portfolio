import { useEffect, useRef } from 'react';

interface Stat {
    value: number;
    suffix: string;
    label: string;
}

const stats: Stat[] = [
    { value: 3, suffix: '+', label: 'Years Coding' },
    { value: 10, suffix: '+', label: 'Projects Built' },
    { value: 16, suffix: '+', label: 'Technologies' },
    { value: 2, suffix: '', label: 'Internships' },
    { value: 5, suffix: '+', label: 'Open Source Contributions' },
];

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const StatsBar = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const suffixRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const animated = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !animated.current) {
                animated.current = true;
                stats.forEach((stat, i) => {
                    const el = numberRefs.current[i];
                    const suffixEl = suffixRefs.current[i];
                    if (!el) return;

                    const duration = 2000;
                    const delay = i * 150;
                    let startTime: number | null = null;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp + delay;
                        const elapsed = Math.max(0, timestamp - startTime);
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = easeOutExpo(progress);
                        const current = Math.floor(eased * stat.value);
                        el.textContent = String(current);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            el.textContent = String(stat.value);
                            if (suffixEl) suffixEl.style.opacity = '1';
                        }
                    };

                    if (suffixEl) suffixEl.style.opacity = '0';
                    requestAnimationFrame(animate);
                });
            }
        }, { threshold: 0.5 });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-gray-800">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center px-8 py-4 group rounded-xl sm:rounded-none hover:bg-[#ff6600]/5 transition-all duration-300 w-1/2 sm:w-auto"
                        style={{ boxShadow: 'none' }}
                        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(255,102,0,0.08)')}
                        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}
                    >
                        <div className="flex items-baseline border-b-2 border-[#ff6600] pb-1 mb-2">
                            <span
                                ref={el => { numberRefs.current[i] = el; }}
                                className="text-4xl sm:text-5xl font-bold text-[#ff6600] tabular-nums"
                            >
                                0
                            </span>
                            <span
                                ref={el => { suffixRefs.current[i] = el; }}
                                className="text-3xl font-bold text-[#ff6600] ml-0.5 transition-opacity duration-300"
                                style={{ opacity: 0 }}
                            >
                                {stat.suffix}
                            </span>
                        </div>
                        <span className="text-xs text-gray-400 text-center uppercase tracking-wider">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsBar;
