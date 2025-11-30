const Experience = () => {
    const experiences = [
        {
            role: 'Full Stack Web  Developer',
            company: 'Climkare Sustainability Pvt. Ltd',
            duration: 'Aug 2025 - Present',
            details: ['Worked in a 5-member team to develop a blockchain-based carbon credit tokenization and carbon offset platform.', ' Built a responsive and user - friendly UI, ensuring a smooth experience across all device sizes ', 'Designed and implemented RESTful APIs for authentication, project management, and transaction handling', 'Integrated the frontend with backend APIs, enabling seamless and efficient data flow across the system', ' Used Ethers.js to interact with smart contracts for token minting, retiring, and verification on the blockchain']
        },
        // {
        //     role: 'Blockchain Intern',
        //     company: 'BlockWorks Labs',
        //     duration: 'Jun 2022 - Dec 2022',
        //     details: ['Implemented smart contracts in Solidity', 'Wrote integration tests and deployed to testnets']
        // },
        // {
        //     role: 'Full Stack Intern',
        //     company: 'Startup XYZ',
        //     duration: 'May 2021 - Aug 2021',
        //     details: ['Built REST APIs with Node/Express', 'Developed frontend dashboards in React']
        // }
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold mb-6 text-white text-center">Experience</h2>

                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">Professional roles and projects where I built scalable web applications, integrated blockchain solutions, and shipped production-ready features.</p>

                <div className="max-w-4xl mx-auto">
                    <ol className="relative border-l border-gray-800">
                        {experiences.map((exp, idx) => (
                            <li key={idx} className="mb-10 ml-6">
                                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-[#ff6600] ring-8 ring-[#0D0D0D]">
                                    {/* briefcase icon */}
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657 0-3 0-3s0-1.343 0-3h6v8H6v-2h6z"></path>
                                    </svg>
                                </span>

                                <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                            <p className="text-sm text-gray-400">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-gray-500">{exp.duration}</span>
                                    </div>

                                    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                                        {exp.details.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Experience
