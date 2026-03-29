import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Code2, Layers, ShieldCheck } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    tech: string[];
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        title: 'Full Stack Web Development',
        description: 'I build dynamic, responsive, and scalable web applications using modern technologies across both frontend and backend.',
        tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        icon: <Code2 size={40} className="text-[#ff6600]" />,
    },
    {
        title: 'Web3 & Blockchain Development',
        description: 'I develop decentralized applications (DApps) and implement smart contracts on Ethereum and other blockchain platforms.',
        tech: ['Solidity', 'Ethereum', 'Ethers.js', 'Hardhat', 'Metamask'],
        icon: <Layers size={40} className="text-[#ff6600]" />,
    },
    {
        title: 'Smart Contract Security',
        description: 'I analyze and test smart contracts to identify vulnerabilities and ensure the security of blockchain systems.',
        tech: ['Remix IDE', 'EVM', 'Solidity', 'Hardhat'],
        icon: <ShieldCheck size={40} className="text-[#ff6600]" />,
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' as const },
    }),
};

interface TiltCardProps {
    service: Service;
    index: number;
}

const TiltCard = ({ service, index }: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const topLineRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
        card.style.transition = 'transform 0.1s ease';
        if (innerRef.current) innerRef.current.style.transform = 'translateZ(20px)';
        if (topLineRef.current) topLineRef.current.style.width = '100%';
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
        if (innerRef.current) innerRef.current.style.transform = 'translateZ(0px)';
        if (topLineRef.current) topLineRef.current.style.width = '0%';
    };

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 102, 0, 0.15)',
                    transformStyle: 'preserve-3d',
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(255,102,0,0.1)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,102,0,0.5)';
                }}
                onMouseLeave={e => {
                    handleMouseLeave();
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,102,0,0.15)';
                }}
            >
                {/* Animated top border */}
                <div
                    ref={topLineRef}
                    className="absolute top-0 left-0 h-[2px] bg-[#ff6600] transition-all duration-300"
                    style={{ width: '0%' }}
                />

                <div ref={innerRef} className="p-7 flex flex-col gap-4" style={{ transition: 'transform 0.1s ease' }}>
                    {/* Icon */}
                    <div>{service.icon}</div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                        {service.tech.map((t, i) => (
                            <span key={i} className="text-xs bg-[#ff6600]/10 text-[#ff6600] border border-[#ff6600]/20 px-2 py-0.5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-2 self-start text-sm text-[#ff6600] hover:text-white transition-colors duration-200 font-medium group"
                    >
                        Let's Talk <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">My Services</h2>
                <div className="w-16 h-1 bg-[#ff6600] rounded mx-auto mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <TiltCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
