import React from 'react'

const About = () => {
    const skills = [
        // 🧠 Programming Languages
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },

        // ⚛️ Frontend
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

        // ⚙️ Backend
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

        // 🗄️ Databases
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

        // ☁️ Cloud & Tools
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

        // 🪙 Blockchain & Web3
        // 🪙 Blockchain & Web3 (Fixed)
        // 🪙 Blockchain & Web3 (Working Versions)
        { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: "Ethereum", logo: "https://cdn.worldvectorlogo.com/logos/ethereum-1.svg" },

    ];


    return (
        <div className="h-full w-full bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex flex-col justify-center">
                {/* About Text */}
                <div className="w-full max-w-5xl mx-auto text-left md:text-left leading-relaxed text-lg">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff6600]">About Me</h1>
                    <p className="mb-5 text-gray-300">
                        Hi, I’m <span className="font-semibold text-white">Vaibhav Hawale</span>, a final-year IT Engineering student and an aspiring <span className="font-semibold text-[#ff6600]">Full Stack Web Developer</span>. I specialize in building clean, scalable, and user-centric web applications using React, Node.js, Express.js, MongoDB, and SQL.
                    </p>

                    <p className="mb-5 text-gray-300">
                        I am currently working as a <span className="font-semibold text-white">Full Stack Web Developer Intern at Climkare Sustainability Pvt. Ltd.</span>, where I contribute to developing sustainability-focused digital solutions and improving real-world application performance.
                    </p>

                    <p className="mb-5 text-gray-300">
                        One of my most impactful projects is a <span className="font-semibold text-white">Blockchain-based Carbon Credit Tokenization and Green Labeling Platform</span>, designed to bring transparency, trust, and traceability to carbon credit management.
                    </p>

                    <p className="mb-5 text-gray-300">
                        I’m constantly improving my skill set, and right now I’m learning <span className="font-semibold text-white">Next.js</span> to strengthen my full-stack development expertise.
                    </p>

                    <p className="mb-5 text-gray-300">
                        In the past, I’ve taken on meaningful leadership and technical roles, including serving as the <span className="font-semibold text-white">Publicity & Sponsorship Head at ACM MMCOE</span> and as a <span className="font-semibold text-white">Web Developer in the IT Tech Club</span>. During these roles, I helped organize tech events, manage outreach, and support campus-wide technical initiatives.
                    </p>

                    <p className="mb-8 text-gray-300">
                        I’m currently open to <span className="font-semibold text-[#ff6600]">Software Developer opportunities</span> and actively looking for <span className="font-semibold text-white">freelancing clients</span>, where I can apply my skills, work on impactful projects, and continue growing as a developer.
                    </p>


                    <div className="mb-10">
                        <button className="bg-[#ff6600] text-white px-6 py-2 rounded-md hover:bg-[#ff6600]/90 transition font-medium shadow-lg">
                            Download Resume
                        </button>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="w-full mt-8">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center">Tech Stack</h2>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-[#ff6600]/50 hover:-translate-y-1 transition-all duration-300 w-28"
                                >
                                    <img
                                        src={skill.logo}
                                        // alt={skill.name}
                                        className="w-12 h-12 mb-3"
                                    />
                                    <p className="text-sm font-medium text-gray-300 text-center">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;
