import { motion } from "framer-motion";
import { FaCodeBranch, FaDatabase } from "react-icons/fa6";

const ProjectCard = ({ project, index, darkMode }) => {
    const accent = darkMode ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-indigo-700";
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25, delay: index * 0.06 }}
            whileHover={{ y: -5 }}
            className="rounded-xl overflow-hidden flex flex-col"
            style={{
                backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
                color: darkMode ? "#D1D5DB" : "#1F2937",
                boxShadow: darkMode ? "0 8px 24px rgba(0, 0, 0, 0.2)" : "0 8px 24px rgba(0, 0, 0, 0.1)",
            }}
        >
            {project.image && (
                <div className="h-48 overflow-hidden">
                    <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }} />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`${darkMode ? "text-gray-100" : "text-black"} mb-4 flex-grow`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag}
                            className={`px-3 py-1 ${darkMode ? "bg-indigo-900/30 text-indigo-400" : "bg-indigo-100 text-indigo-600"} rounded-full text-sm`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${accent} font-medium`}>
                        {project.linkLabel || "View Project"} &rarr;
                    </a>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" aria-label="GitHub">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Group = ({ title, intro, icon, projects, darkMode }) => (
    <div className="mb-14">
        <div className="flex items-center justify-center mb-2">
            <span className={`mr-2 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>{icon}</span>
            <h3 className="text-2xl font-bold text-center">{title}</h3>
        </div>
        {intro && <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">{intro}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} />
            ))}
        </div>
    </div>
);

const Projects = ({ openSource = [], webProjects = [], darkMode = true }) => {
    return (
        <motion.section
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 overflow-hidden"
        >
            <motion.div
                animate={{ backgroundColor: darkMode ? "#111827" : "#F9FAFB", color: darkMode ? "#D1D5DB" : "#1F2937" }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="container mx-auto px-4 py-4 rounded-2xl"
            >
                <motion.h2 className="text-3xl font-bold mb-2 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    My <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>Projects</span>
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Open-source codebases I have worked in, and web applications I have built.
                </motion.p>

                <Group
                    title="Programming languages & compilers"
                    intro="Feature design, reference implementations and test suites inside real language toolchains."
                    icon={<FaCodeBranch size={20} />}
                    projects={openSource.filter((p) => p.group === "languages")}
                    darkMode={darkMode}
                />
                <Group
                    title="Databases & query engines"
                    intro="Parsers, planners and query semantics in SQL, graph and data query engines."
                    icon={<FaDatabase size={20} />}
                    projects={openSource.filter((p) => p.group === "queries")}
                    darkMode={darkMode}
                />
                {webProjects.length > 0 && (
                    <Group title="Web applications" icon={<i className="fas fa-globe"></i>}
                        projects={webProjects} darkMode={darkMode} />
                )}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
