import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
    childSelector?: string;
}

const useScrollAnimation = (
    ref: React.RefObject<HTMLElement | null>,
    options: ScrollAnimationOptions = {}
) => {
    const {
        delay = 0,
        duration = 0.7,
        y = 50,
        stagger = 0,
        childSelector,
    } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets = childSelector
            ? el.querySelectorAll(childSelector)
            : [el];

        gsap.fromTo(
            targets,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                delay,
                stagger,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [ref, delay, duration, y, stagger, childSelector]);
};

export default useScrollAnimation;
