import { useState } from "react";
import { projects } from "./projects";
import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const categories = ["All", "Web App", "Mobile App", "API", "Tool"];

function Categories() {
    const [activeTab, setActiveTab] = useState("All")

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projects;
        return projects.filter(p => p.category === activeTab);
    }, [activeTab]);

    return (
        <section>
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
                            key={project.id}
                            className="relative bg-white rounded-xl shadow-md overflow-hidden group"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-center h-64 px-6 mb-40 text-center 
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-300">

                                <p className="text-black text-sm font-medium mb-6 leading-relaxed px-4 py-2 bg-sky-400/20 rounded-full">
                                    {project.description}
                                </p>

                                <div className="flex justify-center gap-4">
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 
                                        rounded-lg text-sm font-medium hover:bg-gray-100 transition cursor-pointer btn"
                                    >
                                        🔗 Live Demo
                                    </a>

                                    <a
                                        href={"https://github.com/coding655"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 
                                        rounded-lg text-sm font-medium hover:bg-gray-100 transition btn"
                                    >
                                        💻 Code
                                    </a>
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
                                            className="text-xs bg-white border border-blue-100 text-blue-500 px-3 py-1 rounded-full
                                            transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100"
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
            <div className="flex justify-center mt-16">
                <a href="https://github.com/Coding655?tab=repositories" className="btn px-6 py-6 border border-sky-300 flex gap-4 items-center text-sky-400 rounded-xl hover:text-white hover:bg-sky-300 transition-colors duration-300">
                    <FaGithub />
                    <span>View All Projects On GitHub</span>
                </a>
            </div>
        </section>
    )
}

export default Categories
