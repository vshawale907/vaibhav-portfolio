import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";

const Home = () => {
    return (
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-24 px-6 w-screen h-screen">
            <div>
                <h2 className="text-xl mb-2">Hi, I’m</h2>
                <h1 className="text-5xl font-bold text-[#ff6600] mb-4">
                    Vaibhav Hawale
                </h1>
                <p className="text-lg mb-6">Full Stack Web Developer & Blockchain Developer</p>

                {/* Buttons */}
                <div className="flex space-x-4 mb-4">
                    <Link
                        to="/contact"
                        className="bg-[#ff6600] px-4 py-2 rounded-lg text-white hover:bg-[#e65c00] transition-colors"
                    >
                        Hire Me
                    </Link>
                    <a
                        href="/cv.pdf"
                        download
                        className="border border-[#ff6600] px-4 py-2 rounded-lg hover:bg-[#ff6600] hover:text-white transition-colors"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6 mt-4">
                    <a
                        href="https://x.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="text-gray-400 hover:text-black transition-transform transform hover:scale-110"
                    >
                        <FaTwitter size={26} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-[#0077B5] transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin size={26} />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-gray-800 transition-transform transform hover:scale-110"
                    >
                        <FaGithub size={26} />
                    </a>
                    <a
                        href="https://discord.gg/yourDiscordID"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                        className="text-gray-400 hover:text-[#5865F2] transition-transform transform hover:scale-110"
                    >
                        <FaDiscord size={26} />
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <img
                src="/src/assets/vaibhav_image.jpg"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover mt-8 md:mt-0 shadow-lg"
            />
        </section>
    );
};

export default Home;
