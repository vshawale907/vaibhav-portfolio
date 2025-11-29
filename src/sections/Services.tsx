import React from 'react'

const Services = () => {
    const services = [
        {
            title: "Full Stack Web Development",
            description:
                "I build dynamic and responsive web applications using modern technologies across both frontend and backend.",
            tech: "React.js, Node.js, Express, MongoDB, Tailwind CSS",
        },
        {
            title: "Web3 & Blockchain Development",
            description:
                "I develop decentralized applications (DApps) and implement smart contracts on Ethereum and other blockchain platforms.",
            tech: "Solidity, Ethereum, Web3.js, Hardhat, Metamask",
        },
        {
            title: "Smart Contract Security",
            description:
                "I analyze and test smart contracts to identify vulnerabilities and ensure the security of blockchain systems.",
            tech: "Remix IDE, EVM, Solidity",
        },
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">My Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#0F0F0F] p-6 rounded-2xl border border-gray-800 hover:border-[#ff6600]/40 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-[#ff6600]">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                            <p className="mt-3 text-sm text-gray-400">
                                <strong className="text-gray-200">Tech:</strong> {service.tech}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
