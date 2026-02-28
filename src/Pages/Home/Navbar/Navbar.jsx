import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <nav className={`fixed w-full left-0 top-0 z-10 px-6 py-3 transition-all duration-300 delay-1 ${scrolled ? "bg-white shadow" : "bg-transparent"} `}>
            <div className="flex justify-around items-center">
                <h1 className="text-[28px] font-serif font-extrabold text-gray-500">Imran <span className="text-sky-400">Sirajee</span></h1>
                <ul className="flex gap-12 text-[20px] font-semibold">
                    <li>
                        <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Home
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">About
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Skills
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Projects
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Contact
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>

                </ul>

                <button className="flex items-center gap-3 text-sky-400 border border-sky-400 hover:bg-white px-6 py-2 rounded-xl transition-all duration-300 delay-1">
                    <IoMdDownload />
                    <span className="font-serif ">Resume</span>
                </button>
            </div>
        </nav>
    )
}
