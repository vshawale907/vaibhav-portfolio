import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    features: string[];
    techStack: string[];
    links: { github: string; liveDemo: string };
    gradient: string;
    videoUrl?: string; // Empty string until user adds real .mp4 paths
}

const projects: Project[] = [
    {
        title: "Spend Smart",
        description:
            "MERN-based finance app that lets users securely track expenses, manage income, set budgets, and get clear insights to improve their financial decisions.",
        features: [
            "Personal finance management with expense tracking and analytics.",
            "Responsive React.js + Tailwind CSS frontend with Node.js + Express.js backend.",
            "MongoDB for user profiles, transactions, and categorized expenses.",
            "Secure JWT authentication + Chart.js interactive spending visualizations.",
        ],
        techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
        links: { github: "#", liveDemo: "#" },
        gradient: "from-emerald-900/60 via-teal-900/40 to-[#0D0D0D]",
        videoUrl: "", // Add your project video path here (e.g. "/videos/spendsmart.mp4")
    },
    {
        title: "Crowdsourced Civic Issue Reporting",
        description:
            "AI-powered civic issue reporting system — citizens capture and upload issues, auto-detects the problem, routes to the right department, with real-time tracking.",
        features: [
            "Vite + React dashboard with maps, charts, and Redux Toolkit state management.",
            "REST APIs with file uploads, Axios interceptors, and error handling.",
            "React Native (Expo) mobile companion app with shared API logic.",
            "Loaders, toasts, and smooth UX with authentication flows.",
        ],
        techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "React Native"],
        links: { github: "#", liveDemo: "#" },
        gradient: "from-blue-900/60 via-indigo-900/40 to-[#0D0D0D]",
        videoUrl: "", // Add your project video path here
    },
    {
        title: "Blockchain Carbon Credit Platform",
        description:
            "Blockchain-based carbon credit tokenization and green labeling platform for transparency, trust, and traceability in carbon credit management.",
        features: [
            "5-member team project at Climkare Sustainability Pvt. Ltd.",
            "RESTful APIs for authentication, project management, and transactions.",
            "Ethers.js smart contract integration — token minting, retiring, verification.",
            "Responsive UI with seamless frontend-backend data flow.",
        ],
        techStack: ["Solidity", "Ethers.js", "React", "Node.js", "Express", "MongoDB"],
        links: { github: "#", liveDemo: "#" },
        gradient: "from-orange-900/60 via-amber-900/40 to-[#0D0D0D]",
        videoUrl: "", // Add your project video path here
    },
];

const Portfolio = () => {
    return (
        <div className="bg-[#0D0D0D] w-full">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true, margin: '-50px' }}
                            className="bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-[#ff6600]/40 transition-all duration-300 flex flex-col overflow-hidden group"
                            whileHover={{ boxShadow: '0 0 24px rgba(255,102,0,0.18)' }}
                        >
                            {/* Video / Gradient Thumbnail */}
                            <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                {project.videoUrl ? (
                                    <video 
                                        src={project.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-300"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                                        <span className="text-xl font-bold text-white/90 text-center px-4 drop-shadow-md mb-3">{project.title}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#ff6600] font-mono border border-[#ff6600]/30 rounded bg-[#ff6600]/10 px-2 py-1">Video Placeholder</span>
                                    </div>
                                )}
                                
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white bg-[#ff6600]/80 hover:bg-[#ff6600] px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                                        <FaGithub size={15} /> GitHub
                                    </a>
                                    <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-white/20">
                                        <BiLinkExternal size={15} /> Live
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-[#ff6600]">{project.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <ul className="text-xs text-gray-400 mb-4 list-disc list-inside space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                {/* Tech Stack pills */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-xs bg-[#ff6600]/10 text-[#ff6600] border border-[#ff6600]/20 px-2 py-0.5 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom links */}
                                <div className="flex gap-4 mt-4 pt-4 border-t border-gray-800">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6600] transition-colors text-sm">
                                        <FaGithub size={16} /> GitHub
                                    </a>
                                    <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6600] transition-colors text-sm">
                                        <BiLinkExternal size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
