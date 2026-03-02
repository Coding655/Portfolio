import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-scroll";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full left-0 top-0 z-50 px-6 py-3 transition-all duration-300 
            ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="flex justify-around items-center">

                {/* Logo */}
                <h1  className="text-[28px] font-serif font-extrabold text-gray-500 cursor-pointer">
                    <Link to="home">Imran <span className="text-sky-400">Sirajee</span></Link>
                </h1>

                {/* Menu */}
                <ul className="flex gap-12 text-[20px] font-semibold">

                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-sky-400 -top-1"
                            className="cursor-pointer relative group text-gray-500 hover:text-sky-400 "
                        >
                            Home
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-sky-400 -top-1"
                            className="cursor-pointer relative group text-gray-500 hover:text-sky-400"
                        >
                            About
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-sky-400 -top-1"
                            className="cursor-pointer relative group text-gray-500 hover:text-sky-400"
                        >
                            Skills
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="categories"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-sky-400 -top-1"
                            className="cursor-pointer relative group text-gray-500 hover:text-sky-400"
                        >
                            Projects
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-sky-400 -top-1"
                            className="cursor-pointer relative group text-gray-500 hover:text-sky-400"
                        >
                            Contact
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>

                </ul>

                {/* Resume Button */}
                <button className="flex items-center gap-3 text-sky-400 border border-sky-400 hover:bg-sky-400 hover:text-white px-6 py-2 rounded-xl transition-all duration-300">
                    <IoMdDownload />
                    <span className="font-serif">Resume</span>
                </button>

            </div>
        </nav>
    );
}