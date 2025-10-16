import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center py-16 px-6">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center mb-2">Contact</h2>
            <p className="text-center text-gray-400 mb-10">Let's Build Something Great Together</p>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {/* Inputs */}
                <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#1A1A1A] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#1A1A1A] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />
                <input
                    type="number"
                    placeholder="Phone Number"
                    className="bg-[#1A1A1A] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />

                <select
                    name="subject"
                    className="bg-[#1A1A1A] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                >
                    <option value="">Select Inquiry Type</option>
                    <option value="job">Job Opportunity</option>
                    <option value="freelance">Freelance / Project Collaboration</option>
                    <option value="blockchain">Blockchain Development / Audit</option>
                    <option value="other">Other</option>
                </select>

                {/* Textarea spans both columns */}
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="md:col-span-2 bg-[#1A1A1A] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                ></textarea>

                {/* Submit button */}
                <button
                    type="submit"
                    className="md:col-span-2 bg-green-500 text-black font-semibold py-3 rounded-md hover:bg-green-400 transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
