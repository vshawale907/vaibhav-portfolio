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
        <div className="px-3 md:px-8 lg:px-12 py-12 text-gray-800 bg-gradient-to-b from-white to-gray-50">
            {/* About Text */}
            <div className="max-w-4xl mx-auto text-center leading-relaxed text-lg">
                <h1 className="text-3xl font-bold mb-6 text-orange-500">About Me</h1>
                <p className="mb-4">
                    Hi, I’m <span className="font-semibold">Vaibhav Hawale</span>, an IT engineering student passionate about <span className="font-semibold text-orange-500">Web3, blockchain, and full-stack development</span>.
                </p>
                <p className="mb-4">
                    I enjoy building projects that combine innovation with real-world impact — from developing a blockchain-based electronic voting system to exploring green labeling and carbon-neutrality platforms.
                </p>
                <p className="mb-4">
                    As the <span className="font-semibold">Publicity & Sponsorship Head at ACM</span>, I’ve organized multiple hackathons and tech events, enhancing my teamwork, leadership, and communication skills.
                </p>
                <p>
                    Currently, I’m diving deeper into <span className="font-semibold">Web3 security research</span> and modern web technologies to create scalable, secure, and impactful digital solutions.
                </p>

                <div className="mt-8">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition font-medium shadow-md">
                        Download Resume
                    </button>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Tech Stack</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-28"
                        >
                            <img
                                src={skill.logo}
                                // alt={skill.name}
                                className="w-12 h-12 mb-3"
                            />
                            <p className="text-sm font-medium text-gray-700 text-center">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
