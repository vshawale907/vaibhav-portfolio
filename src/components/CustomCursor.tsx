import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

interface CursorState {
    hovering: boolean;
    clicking: boolean;
}

const TRAIL_LENGTH = 8;

const CustomCursor = () => {
    const dotX = useSpring(0, { stiffness: 2000, damping: 60 });
    const dotY = useSpring(0, { stiffness: 2000, damping: 60 });
    const ringX = useSpring(0, { stiffness: 150, damping: 20 });
    const ringY = useSpring(0, { stiffness: 150, damping: 20 });
    const ringScale = useSpring(1, { stiffness: 200, damping: 18 });
    const ringOpacity = useSpring(1, { stiffness: 200, damping: 18 });

    const [state, setState] = useState<CursorState>({ hovering: false, clicking: false });
    const [trail, setTrail] = useState<{ x: number; y: number }[]>(
        Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
    );
    const [visible, setVisible] = useState(false);

    const posRef = useRef({ x: -100, y: -100 });
    const trailRef = useRef<{ x: number; y: number }[]>(
        Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
    );
    const rafRef = useRef<number>(0);

    useEffect(() => {
        // Animate trail via rAF
        const animateTrail = () => {
            trailRef.current = [
                posRef.current,
                ...trailRef.current.slice(0, TRAIL_LENGTH - 1),
            ];
            setTrail([...trailRef.current]);
            rafRef.current = requestAnimationFrame(animateTrail);
        };
        rafRef.current = requestAnimationFrame(animateTrail);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            dotX.set(e.clientX);
            dotY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
            setVisible(true);

            // Magnetic pull
            const magnets = document.querySelectorAll('[data-magnetic]');
            magnets.forEach(el => {
                const rect = el.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 80) {
                    const pull = (80 - dist) / 80;
                    ringX.set(e.clientX - dx * pull * 0.4);
                    ringY.set(e.clientY - dy * pull * 0.4);
                }
            });
        };

        const handleDown = () => {
            setState(s => ({ ...s, clicking: true }));
            ringScale.set(0.8);
        };
        const handleUp = () => {
            setState(s => ({ ...s, clicking: false }));
            ringScale.set(state.hovering ? 1.5 : 1);
        };

        // Hover detection
        const handleEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [data-cursor]')) {
                setState(s => ({ ...s, hovering: true }));
                ringScale.set(1.5);
                ringOpacity.set(1);
            }
        };
        const handleLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [data-cursor]')) {
                setState(s => ({ ...s, hovering: false }));
                ringScale.set(1);
            }
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mousedown', handleDown);
        document.addEventListener('mouseup', handleUp);
        document.addEventListener('mouseover', handleEnter);
        document.addEventListener('mouseout', handleLeave);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mousedown', handleDown);
            document.removeEventListener('mouseup', handleUp);
            document.removeEventListener('mouseover', handleEnter);
            document.removeEventListener('mouseout', handleLeave);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [dotX, dotY, ringX, ringY, ringScale, ringOpacity, state.hovering]);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

    return (
        <AnimatePresence>
            {visible && (
                <>
                    {/* Trail dots */}
                    {trail.map((pos, i) => (
                        <div
                            key={i}
                            className="fixed rounded-full pointer-events-none z-[9998]"
                            style={{
                                left: pos.x,
                                top: pos.y,
                                width: Math.max(1, 4 - i * 0.4),
                                height: Math.max(1, 4 - i * 0.4),
                                opacity: Math.max(0, 0.5 - i * 0.065),
                                backgroundColor: '#ff6600',
                                transform: 'translate(-50%, -50%)',
                                transition: 'none',
                            }}
                        />
                    ))}

                    {/* Outer ring */}
                    <motion.div
                        className="fixed rounded-full pointer-events-none z-[9999]"
                        style={{
                            x: ringX,
                            y: ringY,
                            scale: ringScale,
                            opacity: ringOpacity,
                            width: 36,
                            height: 36,
                            border: '1.5px solid #ff6600',
                            backgroundColor: state.hovering ? 'rgba(255,102,0,0.12)' : 'transparent',
                            translateX: '-50%',
                            translateY: '-50%',
                            transition: 'background-color 0.2s',
                        }}
                    />

                    {/* Inner dot */}
                    <motion.div
                        className="fixed rounded-full pointer-events-none z-[9999] bg-[#ff6600]"
                        style={{
                            x: dotX,
                            y: dotY,
                            width: state.hovering ? 4 : 8,
                            height: state.hovering ? 4 : 8,
                            translateX: '-50%',
                            translateY: '-50%',
                            transition: 'width 0.2s, height 0.2s',
                        }}
                    />
                </>
            )}
        </AnimatePresence>
    );
};

export default CustomCursor;
