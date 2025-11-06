import React from "react";

// ✅ Import your project images from src/assets
import solImg from "../assets/sol.png";
// import greenImg from "../assets/green-labeling.png";
// import flaskImg from "../assets/flask-bookstore.png";
// import zombiesImg from "../assets/cryptozombies.png";
// import portfolioImg from "../assets/portfolio.png";

const Portfolio = () => {
    // 🧱 Projects Data
    const projects = [
        {
            title: "Ethereum-Based Electronic Voting System",
            description:
                "A secure and transparent voting system built using Ethereum blockchain to ensure tamper-proof elections.",
            features: [
                "Smart contracts for secure vote storage",
                "Admin dashboard for candidate management",
                "Real-time vote count with transparency",
                "MetaMask integration for decentralized login",
            ],
            techStack: ["Solidity", "Web3.js", "React", "Ganache", "MetaMask"],
            links: {
                github: "https://github.com/yourusername/Electronic-Voting-System",
                liveDemo: "https://yourvotingdapp.vercel.app/",
            },
            image: solImg,
        },
        {
            title: "Blockchain-Based Green Labeling & Carbon Credit Platform",
            description:
                "A platform enabling businesses to trace, retire, and validate carbon credits using UCR smart contracts.",
            features: [
                "Smart contract-based credit retirement",
                "UCR integration for carbon validation",
                "Traceability dashboard for transparency",
                "NFT-style green labeling for verified companies",
            ],
            techStack: ["Solidity", "React", "Node.js", "Express", "MongoDB"],
            links: {
                github: "https://github.com/yourusername/Green-Labeling-Platform",
                liveDemo: "https://greenlabeling.vercel.app/",
            },
            // image: greenImg,
        },
        {
            title: "Flask Bookstore App",
            description:
                "An online bookstore where users can browse, add to cart, and buy books securely.",
            features: [
                "User authentication and session management",
                "Admin panel for book management",
                "Cart and checkout functionality",
            ],
            techStack: ["Flask", "Python", "SQLite", "HTML", "CSS"],
            links: {
                github: "https://github.com/yourusername/flask-bookstore",
                liveDemo: "https://flask-bookstore.onrender.com/",
            },
            // image: flaskImg,
        },
        {
            title: "CryptoZombies DApp (Learning Project)",
            description:
                "A fun blockchain game where users create and battle zombies using Solidity smart contracts.",
            features: [
                "ERC721 token-based zombie characters",
                "Smart contract-based game logic",
                "Frontend built using Web3.js",
            ],
            techStack: ["Solidity", "Web3.js", "JavaScript", "HTML/CSS"],
            links: {
                github: "https://github.com/yourusername/cryptozombies",
            },
            // image: zombiesImg,
        },
        {
            title: "Portfolio Website",
            description:
                "My personal portfolio website showcasing my projects, skills, and experiences.",
            features: [
                "Responsive design using Tailwind CSS",
                "Smooth animations and transitions",
                "Dynamic project rendering",
            ],
            techStack: ["React", "TailwindCSS", "Framer Motion"],
            links: {
                github: "https://github.com/yourusername/portfolio",
                liveDemo: "https://yourportfolio.vercel.app/",
            },
            // image: portfolioImg,
        },
    ];

    // 🧩 Component UI
    return (
        <div className="bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] p-5 rounded-2xl border border-gray-800 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl mb-4 w-full h-auto object-cover"
                                style={{ maxHeight: "200px" }}
                            />

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 text-white">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-3">{project.description}</p>

                            {/* Features */}
                            <ul className="text-sm text-gray-500 mb-3 list-disc list-inside">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <p className="text-sm text-gray-700 mb-3">
                                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                            </p>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.links.liveDemo && (
                                    <a
                                        href={project.links.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
