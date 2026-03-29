import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
];

const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/vshawale907', icon: <FaGithub size={18} />, hoverColor: 'hover:text-white' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaibhav-hawale-13a645257/', icon: <FaLinkedin size={18} />, hoverColor: 'hover:text-[#0077B5]' },
    { label: 'X / Twitter', href: 'https://x.com/vshawale90', icon: <FaXTwitter size={18} />, hoverColor: 'hover:text-white' },
    { label: 'Discord', href: 'http://discordapp.com/users/1245308638361550889', icon: <FaDiscord size={18} />, hoverColor: 'hover:text-[#5865F2]' },
];

const Footer = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#0a0a0a] text-gray-400 border-t border-gray-800 overflow-hidden">
            {/* Orange gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6600] to-transparent" />

            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ff6600 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                    {/* Column 1 — Brand */}
                    <div>
                        <span className="text-2xl font-bold text-[#ff6600] tracking-widest">VH</span>
                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                            Full Stack & Blockchain Developer based in Pune, India.
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-green-400 font-medium">Open to opportunities</span>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(({ label, id }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        className="text-sm text-gray-400 hover:text-[#ff6600] transition-colors duration-200"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Connect */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
                        <ul className="space-y-3">
                            {SOCIALS.map(({ label, href, icon, hoverColor }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-sm text-gray-400 ${hoverColor} hover:scale-105 transition-all duration-200`}
                                    >
                                        {icon} {label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="mailto:vaibhavhawale123@gmail.com"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff6600] transition-colors duration-200"
                                >
                                    <Mail size={18} /> vaibhavhawale123@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
                    <span>© {new Date().getFullYear()} Vaibhav Hawale. Built with React + Tailwind + ☕</span>
                    <span>Designed & Developed by Vaibhav Hawale</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;