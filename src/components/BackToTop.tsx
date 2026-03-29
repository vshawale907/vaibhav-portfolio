import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const CIRCUMFERENCE = 2 * Math.PI * 22; // r=22

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const progressRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const total = document.body.scrollHeight - window.innerHeight;
            const progress = total > 0 ? scrollY / total : 0;

            setVisible(scrollY >= 300);

            if (progressRef.current) {
                progressRef.current.style.strokeDashoffset = String(
                    CIRCUMFERENCE * (1 - progress)
                );
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#ff6600]/15 border border-[#ff6600]/40 hover:bg-[#ff6600]/25 transition-colors duration-200 shadow-lg"
                >
                    {/* SVG Progress ring */}
                    <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 52 52"
                    >
                        {/* Track */}
                        <circle
                            cx="26" cy="26" r="22"
                            fill="none"
                            stroke="rgba(255,102,0,0.15)"
                            strokeWidth="2"
                        />
                        {/* Progress */}
                        <circle
                            ref={progressRef}
                            cx="26" cy="26" r="22"
                            fill="none"
                            stroke="#ff6600"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={CIRCUMFERENCE}
                            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                        />
                    </svg>

                    <ArrowUp size={20} className="text-white relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
