import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationEntry {
    degree: string;
    institution: string;
    year: string;
    score: string;
    highlights?: string[];
}

const educationData: EducationEntry[] = [
    {
        degree: 'B.E. Information Technology',
        institution: 'MMCOE (Marathwada Mitra Mandal\'s College of Engineering), Pune',
        year: '2021 – 2025',
        score: '7.5 CGPA / 10',
        highlights: [
            'ACM MMCOE Chapter — Publicity & Sponsorship Head',
            'IT Tech Club — Web Developer & Event Organizer',
        ],
    },
    {
        degree: 'HSC (Class XII)',
        institution: 'Maharashtra State Board',
        year: '2020 – 2021',
        score: '78.6%',
    },
    {
        degree: 'SSC (Class X)',
        institution: 'Maharashtra State Board',
        year: '2018 – 2019',
        score: '89.2%',
    },
];

const Education = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold mb-2 text-white text-center">Education</h2>
                <div className="w-16 h-1 bg-[#ff6600] rounded mx-auto mb-10" />

                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
                    Academic journey that shaped my engineering foundation and technical mindset.
                </p>

                <div className="max-w-4xl mx-auto">
                    <ol className="relative border-l border-gray-800">
                        {educationData.map((entry, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15, duration: 0.5 }}
                                viewport={{ once: true, margin: '-40px' }}
                                className="mb-10 ml-6"
                            >
                                {/* Orange dot marker */}
                                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-[#ff6600] ring-8 ring-[#0D0D0D]">
                                    <GraduationCap size={12} color="white" />
                                </span>

                                <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-[#ff6600]/30 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{entry.degree}</h3>
                                            <p className="text-sm text-gray-400 mt-1">{entry.institution}</p>
                                        </div>
                                        <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                                            <span className="text-sm text-gray-500">{entry.year}</span>
                                            <span className="text-xs font-semibold text-[#ff6600] border border-[#ff6600]/40 bg-[#ff6600]/10 px-3 py-0.5 rounded-full">
                                                {entry.score}
                                            </span>
                                        </div>
                                    </div>

                                    {entry.highlights && (
                                        <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1 text-sm">
                                            {entry.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                        </ul>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Education;
