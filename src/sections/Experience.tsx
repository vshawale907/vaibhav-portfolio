import React from 'react'

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
                <h2 className="text-4xl font-bold mb-8 text-white text-center">Experience</h2>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                    <p className="text-sm text-gray-400">{exp.company}</p>
                                </div>
                                <span className="text-sm text-gray-500">{exp.duration}</span>
                            </div>

                            <ul className="mt-4 list-disc list-inside text-gray-300">
                                {exp.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
