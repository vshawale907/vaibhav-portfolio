import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

const useSmoothScroll = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
        });

        lenisInstance = lenis;
        lenisRef.current = lenis;

        // Wire Lenis to GSAP ticker for perfect sync
        const ticker = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(ticker);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);

    return lenisRef;
};

export default useSmoothScroll;
