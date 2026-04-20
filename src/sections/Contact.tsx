import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        // Debug: log env vars (remove after fixing)
        console.log('EmailJS config:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY: PUBLIC_KEY ? '✓ set' : '✗ missing' });

        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name:  formData.name,
                    from_email: formData.email,
                    phone:      formData.phone,
                    subject:    formData.subject,
                    message:    formData.message,
                    reply_to:   formData.email,
                },
                PUBLIC_KEY
            );

            console.log('EmailJS success:', result);
            setStatusType('success');
            setStatusMessage('✓ Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error: unknown) {
            const err = error as { status?: number; text?: string; message?: string };
            const detail = err?.text || err?.message || JSON.stringify(error);
            console.error('EmailJS error:', error);
            setStatusType('error');
            setStatusMessage(`✗ Failed to send: ${detail}`);
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        'bg-[#1A1A1A] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600] transition duration-200 text-white placeholder-gray-500';

    return (
        <div className="h-full w-full bg-[#0D0D0D] text-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-full flex flex-col items-center justify-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-2">Contact</h2>
                <p className="text-center text-gray-400 mb-10">Let's Build Something Great Together</p>

                {/* Status Message */}
                {statusMessage && (
                    <div className={`w-full max-w-4xl mb-6 p-4 rounded-md text-center ${statusType === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                        {statusMessage}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                    />

                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option value="" className="bg-[#1A1A1A]">Select Inquiry Type</option>
                        <option value="job" className="bg-[#1A1A1A]">Job Opportunity</option>
                        <option value="freelance" className="bg-[#1A1A1A]">Freelance / Project Collaboration</option>
                        <option value="blockchain" className="bg-[#1A1A1A]">Blockchain Development / Audit</option>
                        <option value="other" className="bg-[#1A1A1A]">Other</option>
                    </select>

                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`md:col-span-2 ${inputClass} resize-none`}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="md:col-span-2 bg-[#ff6600] text-white font-semibold py-3 rounded-md hover:bg-[#e65c00] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#ff6600]/20"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
