import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-24 px-6 w-screen h-screen">
            <div>
                <h2 className="text-xl mb-2">Hi, I’m</h2>
                <h1 className="text-5xl font-bold text-[#ff6600] mb-4">
                    Vaibhav Hawale
                </h1>
                <p className="text-lg mb-6">Full Stack Web Developer</p>
                <div className="flex space-x-4">
                    <Link
                        to="/contact"
                        className="bg-[#ff6600] px-4 py-2 rounded-lg text-white"
                    >
                        Hire Me
                    </Link>
                    <a
                        href="/cv.pdf"
                        download
                        className="border border-[#ff6600] px-4 py-2 rounded-lg"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <img
                src="/src/assets/vaibhav_image.jpg"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover mt-8 md:mt-0 shadow-lg"
            />
        </section>
    );
};

export default Home;
