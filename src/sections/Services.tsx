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
            tech: "Remix IDE, Slither, MythX",
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center px-3 sm:px-4 lg:px-6">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">My Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                            <p className="mt-3 text-sm text-gray-500">
                                <strong><span className='text-black'>Tech:</span></strong> {service.tech}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
