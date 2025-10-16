import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f]/95 backdrop-blur text-white p-4 shadow-md z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link to="/" className="text-[#ff6600] font-bold text-xl">
                    LOGO
                </Link>

                <div className="space-x-8 hidden md:flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-[#ff6600]" : "hover:text-[#ff6600]"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-[#ff6600]" : "hover:text-[#ff6600]"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? "text-[#ff6600]" : "hover:text-[#ff6600]"
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive ? "text-[#ff6600]" : "hover:text-[#ff6600]"
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-[#ff6600]" : "hover:text-[#ff6600]"
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <button className="bg-[#ff6600] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                    Hire Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
