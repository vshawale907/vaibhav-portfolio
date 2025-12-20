import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Portfolio = () => {
    // 🧱 Projects Data
    const projects = [
        {
            title: "Spend Smart",
            description:
                "Spend Smart is a MERN-based finance app that lets users securely track expenses, manage income, set budgets, and get clear insights to improve their financial decisions.",
            features: [
                "Built a personal finance management web application to help users track expenses and analyze spending patterns.",
                "Developed a responsive frontend using React.js and Tailwind CSS, integrated with a Node.js + Express.js backend.",
                "Utilized MongoDB to store and manage user profiles, transactions, and categorized expenses.",
                "Implemented secure user authentication and interactive spending insights using Chart.js visualizations.",
                "Focused on clean UI/UX design, modular architecture, and optimized overall application performance."
            ],
            techStack: ["React.js ", "Tailwind CSS ", " Node.js ", "Express.js", "MongoDB ", "JWT Authentication"],
            links: {
                github: " ",
                liveDemo: " ",
            },
            // image: solImg,
        },
        {
            title: "Crowdsourced Civic Issue Reporting and Resolution System",
            description:
                "AI-powered civic issue reporting system that lets citizens capture and upload issues instantly, auto-detects the problem, routes it to the right department, and provides real-time tracking with an analytics dashboard for faster resolution.",
            features: [
                "Built a fast and responsive frontend using Vite + React, including dashboards, maps, and charts",
                "Connected the app to backend REST APIs, handled file uploads, and used Redux Toolkit for clean state management",
                "Added authentication, Axios interceptors, loaders, toasts, and error handling to improve the user experience.",
                "Created a matching React Native (Expo) mobile app with the same features and shared API logic",
            ],
            techStack: ["Solidity", "React", "Node.js", "Express", "MongoDB"],
            links: {
                github: " ",
                liveDemo: " ",
            },
            // image: greenImg,
        },
        // {
        //     title: "Flask Bookstore App",
        //     description:
        //         "An online bookstore where users can browse, add to cart, and buy books securely.",
        //     features: [
        //         "User authentication and session management",
        //         "Admin panel for book management",
        //         "Cart and checkout functionality",
        //     ],
        //     techStack: ["Flask", "Python", "SQLite", "HTML", "CSS"],
        //     links: {
        //         github: "https://github.com/yourusername/flask-bookstore",
        //         liveDemo: "https://flask-bookstore.onrender.com/",
        //     },
        //     // image: flaskImg,
        // },


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
                            className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-[#ff6600]/40 transition-all duration-300 flex flex-col"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 text-[#ff6600]">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Features */}
                            <ul className="text-sm text-gray-400 mb-4 list-disc list-inside space-y-1">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="mt-auto">
                                <p className="text-sm text-gray-400">
                                    <strong className="text-gray-300">Tech Stack:</strong>{" "}
                                    {project.techStack.map((tech, i) => (
                                        <span key={i}>
                                            {tech}
                                            {i !== project.techStack.length - 1 && <span className="mx-1">•</span>}
                                        </span>
                                    ))}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-auto pt-4">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6600] transition-colors"
                                    >
                                        <FaGithub size={20} />
                                        <span>GitHub</span>
                                    </a>
                                )}
                                {project.links.liveDemo && (
                                    <a
                                        href={project.links.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6600] transition-colors"
                                    >
                                        <BiLinkExternal size={20} />
                                        <span>Live Demo</span>
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
