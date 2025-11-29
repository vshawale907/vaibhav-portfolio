import { Link } from "react-router-dom";
import type { MouseEvent } from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
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
        <div className="h-full w-full flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
                <h2 className="text-xl md:text-2xl mb-3 text-gray-300">Hi, I'm</h2>
                <h1 className="text-5xl md:text-6xl font-bold text-[#ff6600] mb-4">
                    Vaibhav Hawale
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">Full Stack Web Developer & Blockchain Developer</p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Link
                        to={{ pathname: '/', hash: '#contact' }}
                        onClick={handleHireClick}
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
                    <a
                        href="https://x.com/https://x.com/vshawale90"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    >
                        <FaXTwitter size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vaibhav-hawale-13a645257/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-[#0077B5] transition-all duration-300 hover:scale-110 transform"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://github.com/vshawale907"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="http://discordapp.com/users/1245308638361550889"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                        className="text-gray-400 hover:text-[#5865F2] transition-all duration-300 hover:scale-110 transform"
                    >
                        <FaDiscord size={26} />
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <img
                        src="/src/assets/vaibhav_image.jpg"
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover shadow-2xl ring-4 ring-[#ff6600]/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff6600]/10 to-transparent"></div>
                </div>
                {/* removed large absolute glow to avoid vertical misalignment; kept subtle ring */}
            </div>
        </div>
    );
};

export default Home;
