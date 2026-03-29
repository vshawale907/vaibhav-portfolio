import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getLenis } from '../hooks/useSmoothScroll';

const NAV_LINKS = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const drawerRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionId: string) => {
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(`#${sectionId}`, { duration: 1.2 });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    // Scroll spy via IntersectionObserver
    useEffect(() => {
        const sectionIds = NAV_LINKS.map(l => l.id);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Close drawer on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body scroll while drawer open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen]);

    const linkClass = (id: string) =>
        `relative text-sm font-medium transition-colors duration-200 group ${
            activeSection === id ? 'text-[#ff6600]' : 'text-gray-400 hover:text-white'
        }`;

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f]/95 backdrop-blur text-white p-4 shadow-md z-50">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-[#ff6600] font-bold text-xl tracking-widest"
                        data-magnetic
                    >
                        VH
                    </button>

                    {/* Desktop nav */}
                    <div className="space-x-8 hidden md:flex">
                        {NAV_LINKS.map(({ label, id }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={linkClass(id)}
                            >
                                {label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#ff6600] transition-all duration-300 ${
                                        activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Hire Me CTA */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            data-magnetic
                            className="bg-[#ff6600] text-white px-4 py-2 rounded-lg hover:bg-[#e65c00] transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-[#ff6600]/20"
                        >
                            Hire Me
                        </button>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block w-6 h-[2px] bg-white rounded origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className="block w-6 h-[2px] bg-white rounded"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block w-6 h-[2px] bg-white rounded origin-center"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            ref={drawerRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-72 bg-[#0f0f0f] border-l border-gray-800 z-50 flex flex-col pt-20 pb-8 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {NAV_LINKS.map(({ label, id }, idx) => (
                                    <motion.button
                                        key={id}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.06 }}
                                        onClick={() => scrollToSection(id)}
                                        className={`text-left py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                                            activeSection === id
                                                ? 'text-[#ff6600] bg-[#ff6600]/10'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {label}
                                    </motion.button>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full bg-[#ff6600] text-white py-3 rounded-lg font-semibold hover:bg-[#e65c00] transition-all duration-200"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
