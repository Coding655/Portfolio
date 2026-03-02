import { useState } from "react";
import { projects } from "./projects";
import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaDemocrat, FaGithub, FaGithubAlt } from "react-icons/fa";

const categories = ["All", "Web App", "Mobile App", "API", "Tool"];

function Categories() {
    const [activeTab, setActiveTab] = useState("All")

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projects;
        return projects.filter(p => p.category === activeTab);
    }, [activeTab]);

    return (
        <section id="categories">
            <div data-aos="fade-up" className="flex flex-col items-center text-center mb-12">
                <h1 className="text-5xl font-medium mb-4">Featured <span className="text-sky-400">Projects</span></h1>
                <p className="text-gray-600 text-xl max-w-3xl">A showcase of my recent work across various domains, from web applications to mobile apps and developer tools.</p>
            </div>

            <div className="flex justify-center gap-2 mb-16">
                {categories.map(cat => (
                    <button type="button" key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-2 rounded-full border transition-colors duration-300 
                    ${activeTab === cat
                            ? "bg-sky-300 text-white border-sky-300"
                            : "text-sky-500 border border-sky-200 hover:bg-sky-300 hover:text-white"}`
                    }>{cat}</button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {filteredProjects.map(project => (
                        <div
                            data-aos="fade-down"
                            key={project.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 
                                        opacity-0 group-hover:opacity-100 
                                        transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 
                                        flex flex-col items-center justify-center 
                                        text-center px-6">

                                    <p className="text-white text-sm mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-4">

                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-white text-blue-600 
                                        rounded-lg text-sm font-medium hover:bg-gray-100 
                                        transition flex items-center gap-2 btn cursor-pointer ">
                                            <FaDemocrat></FaDemocrat>
                                            <span> Live Demo</span>
                                        </a>

                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://github.com/coding655"
                                            className="px-4 py-2 bg-white text-blue-600 
                                        rounded-lg text-sm font-medium
                                         hover:bg-gray-100 transition 
                                        flex items-center gap-2 btn cursor-pointer">
                                            <FaGithubAlt></FaGithubAlt> <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content Below Image */}
                            <div className="p-5 flex flex-col">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-500 mt-2">{project.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-white border border-sky-100 text-sky-500 px-3 py-1 rounded-full
                                            transform hover:scale-103 transition-all duration-300 ease-in-out hover:bg-sky-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
            <div data-aos="fade-up" className="flex justify-center mt-16">
                <a href="https://github.com/Coding655?tab=repositories" className="btn px-6 py-6 border border-sky-300 flex gap-4 items-center text-sky-400 rounded-xl hover:text-white hover:bg-sky-300 transition-colors duration-300">
                    <FaGithub />
                    <span>View All Projects On GitHub</span>
                </a>
            </div>
        </section>
    )
}

export default Categories
