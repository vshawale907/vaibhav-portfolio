import { useRef } from 'react';
import StatsBar from '../components/StatsBar';
import SkillsOrbit from '../components/SkillsOrbit';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    const bioRef = useRef<HTMLDivElement>(null);

    // GSAP stagger entrance for bio paragraphs
    useScrollAnimation(bioRef as React.RefObject<HTMLElement>, {
        childSelector: 'p, h1, a',
        stagger: 0.1,
        y: 30,
        duration: 0.6,
    });

    return (
        <div className="h-full w-full bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex flex-col justify-center">

                {/* About Text */}
                <div ref={bioRef} className="w-full text-left leading-relaxed text-lg">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff6600]">About Me</h1>
                    <p className="mb-5 text-gray-300">
                        Hi, I'm <span className="font-semibold text-white">Vaibhav Hawale</span>, a final-year IT Engineering student and an aspiring{' '}
                        <span className="font-semibold text-[#ff6600]">Full Stack Web Developer</span>. I specialize in building clean, scalable, and user-centric web applications using React, Node.js, Express.js, MongoDB, and SQL.
                    </p>

                    <p className="mb-5 text-gray-300">
                        I am currently working as a{' '}
                        <span className="font-semibold text-white">Full Stack Web Developer Intern at Climkare Sustainability Pvt. Ltd.</span>, where I contribute to developing sustainability-focused digital solutions and improving real-world application performance.
                    </p>

                    <p className="mb-5 text-gray-300">
                        One of my most impactful projects is a{' '}
                        <span className="font-semibold text-white">Blockchain-based Carbon Credit Tokenization and Green Labeling Platform</span>, designed to bring transparency, trust, and traceability to carbon credit management.
                    </p>

                    <p className="mb-5 text-gray-300">
                        I'm constantly improving my skill set, and right now I'm learning{' '}
                        <span className="font-semibold text-white">Next.js</span> to strengthen my full-stack development expertise.
                    </p>

                    <p className="mb-8 text-gray-300">
                        I'm currently open to{' '}
                        <span className="font-semibold text-[#ff6600]">Software Developer opportunities</span> and actively looking for{' '}
                        <span className="font-semibold text-white">freelancing clients</span>, where I can apply my skills, work on impactful projects, and continue growing as a developer.
                    </p>

                    <div className="mb-10">
                        <a
                            href="/Vaibhav_Hawale.pdf"
                            download
                            className="bg-[#ff6600] text-white px-6 py-2 rounded-md hover:bg-[#e65c00] transition font-medium shadow-lg"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* 3D Skills Orbit */}
                <div className="w-full mt-4">
                    <h2 className="text-3xl font-bold mb-2 text-white text-center">Tech Stack</h2>
                    <p className="text-center text-gray-500 text-sm mb-4">Drag to rotate · Hover to highlight</p>
                    <SkillsOrbit />
                </div>

                {/* Animated stats count-up */}
                <StatsBar />
            </div>
        </div>
    );
};

export default About;
