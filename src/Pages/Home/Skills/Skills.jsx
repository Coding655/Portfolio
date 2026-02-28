import SkillCard from "./SkillCard";

const Skills = () => {
    const frontendSkills = [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
    ];

    const backendSkills = [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 78 },
    ];

    const toolsSkills = [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 80 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 },
    ];

    return (
        <section id="skills" className="py-20 px-6 md:px-16 bg-base-200">
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-14">
                <h2 className="text-5xl font-bold mb-6">
                    Skills & <span className="text-info">Expertise</span>
                </h2>
                <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills and proficiency levels
                    across various technologies and tools.
                </p>
            </div>

            {/* Grid Layout */}
            <div data-aos="fade-down" data-aos-delay="200" className="grid md:grid-cols-3 gap-8">
                <SkillCard title="Frontend" skills={frontendSkills} />
                <SkillCard title="Backend" skills={backendSkills} />
                <SkillCard title="Tools" skills={toolsSkills} />
            </div>

            {/* additional technologies */}
            <div className="mt-16">
                <h1 data-aos="fade-up" className="text-xl font-medium text-center">Additional Technologies</h1>
                <div data-aos="fade-down" className="flex justify-center gap-6 mt-6">
                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">REST APIs</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">WebSocket</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">jest</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">Cypress</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">Redis</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">REST APIs</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">Nginx</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">Linux</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">Agile</button>

                    <button className="px-3 py-2 rounded-full bg-sky-100 text-sky-400 shadow hover:bg-sky-200 transition-all duration-200 delay-75">CL/CD</button>
                </div>
            </div>
        </section>
    );
};

export default Skills;