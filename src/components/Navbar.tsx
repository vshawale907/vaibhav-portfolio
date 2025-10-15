import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="screen-full fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md">
                <div className="flex justify-center space-x-8">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <div className="absolute right-10">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition">Hire me</button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar