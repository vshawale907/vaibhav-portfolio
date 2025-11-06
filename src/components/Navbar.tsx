const Navbar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f]/95 backdrop-blur text-white p-4 shadow-md z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-[#ff6600] font-bold text-xl"
                >
                    VH
                </button>

                <div className="space-x-8 hidden md:flex">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="hover:text-[#ff6600]"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="hover:text-[#ff6600]"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('services')}
                        className="hover:text-[#ff6600]"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className="hover:text-[#ff6600]"
                    >
                        Portfolio
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-[#ff6600]"
                    >
                        Contact
                    </button>
                </div>

                <button className="bg-[#ff6600] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                    Hire Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
