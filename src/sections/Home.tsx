import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import type { MouseEvent } from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ParticleField from '../components/ParticleField';

const ROLES = [
    'Full Stack Developer',
    'Blockchain Engineer',
    'Web3 Builder',
    'React Specialist',
    'Open Source Contributor',
];

const useTypewriter = (roles: string[]) => {
    const [displayed, setDisplayed] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const current = roles[roleIndex];

        const timer = setTimeout(() => {
            if (!deleting) {
                if (charIndex < current.length) {
                    setDisplayed(current.slice(0, charIndex + 1));
                    setCharIndex(c => c + 1);
                } else {
                    setPaused(true);
                    setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayed(current.slice(0, charIndex - 1));
                    setCharIndex(c => c - 1);
                } else {
                    setDeleting(false);
                    setPaused(true);
                    setTimeout(() => {
                        setRoleIndex(r => (r + 1) % roles.length);
                        setPaused(false);
                    }, 400);
                }
            }
        }, deleting ? 40 : 80);

        return () => clearTimeout(timer);
    }, [charIndex, deleting, paused, roleIndex, roles]);

    return displayed;
};

const Home = () => {
    const typedText = useTypewriter(ROLES);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleHireClick = (_e?: MouseEvent) => {
        setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                el.setAttribute('tabindex', '-1');
                (el as HTMLElement).focus();
            }
        }, 50);
    };

    return (
        <div className="h-full w-full relative flex flex-col md:flex-row justify-between items-center gap-12">
            {/* 🌌 Particle field behind everything */}
            <ParticleField />

            {/* Content above particle field */}
            <div ref={contentRef} className="max-w-xl relative z-10">
                <h2 className="text-xl md:text-2xl mb-3 text-gray-300">Hi, I'm</h2>
                <h1 className="text-5xl md:text-6xl font-bold text-[#ff6600] mb-4">
                    Vaibhav Hawale
                </h1>

                {/* Typewriter subtitle */}
                <p className="text-xl md:text-2xl mb-8 text-gray-300 min-h-[2rem]">
                    I'm a{' '}
                    <span className="text-[#ff6600] font-semibold">{typedText}</span>
                    <span className="inline-block w-[2px] h-[1.2em] bg-[#ff6600] ml-[2px] align-middle animate-blink" />
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Link
                        to={{ pathname: '/', hash: '#contact' }}
                        onClick={handleHireClick}
                        data-magnetic
                        className="bg-[#ff6600] px-6 py-3 rounded-lg text-white hover:bg-[#e65c00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6600]/20 font-medium"
                    >
                        Hire Me
                    </Link>
                    <a
                        href="/Vaibhav-Hawale-U.pdf"
                        download
                        className="border-2 border-[#ff6600] px-6 py-3 rounded-lg text-[#ff6600] hover:bg-[#ff6600] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6600]/20 font-medium"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a href="https://x.com/vshawale90" target="_blank" rel="noopener noreferrer" aria-label="X"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                        <FaXTwitter size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-hawale-13a645257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="text-gray-400 hover:text-[#0077B5] transition-all duration-300 hover:scale-110 transform">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/vshawale907" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                        <FaGithub size={28} />
                    </a>
                    <a href="http://discordapp.com/users/1245308638361550889" target="_blank" rel="noopener noreferrer" aria-label="Discord"
                        className="text-gray-400 hover:text-[#5865F2] transition-all duration-300 hover:scale-110 transform">
                        <FaDiscord size={26} />
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="relative z-10">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <img
                        src="/vaibhav_image.jpg"
                        alt="Vaibhav Hawale"
                        className="rounded-full w-full h-full object-cover shadow-2xl ring-4 ring-[#ff6600]/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff6600]/10 to-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default Home;
