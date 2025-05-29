import { motion } from "framer-motion";
import MusicImage from './assets/musicImg.jpg'

const Projects = ({
    projects = [
        {
            id: 1,
            title: "Music Website",
            description: "A full-stack e-commerce solution with payment integration and inventory management.",
            tags: ["React", "Node.js", "MongoDB"],
            image: MusicImage
        },
        {
            id: 2,
            title: "Health Tracker App",
            description: "Mobile application for tracking fitness activities, nutrition, and health metrics.",
            tags: ["React Native", "Firebase", "Redux"],
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website with animations and contact form.",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
    ],
    darkMode = true,
    onViewProject,
    onViewGithub
}) => {
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
                animate={{
                    backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
                    color: darkMode ? "#D1D5DB" : "#1F2937"
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="container mx-auto px-4 py-4 rounded-2xl shadow-lg"
            >
                <motion.h2
                    className="text-3xl font-bold mb-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    My <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>Projects</span>
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Here are some of my recent projects that showcase my skills and expertise.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                                delay: index * 0.1
                            }}
                            whileHover={{ y: -5 }}
                            className="rounded-xl overflow-hidden"
                            style={{
                                backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
                                color: darkMode ? "#D1D5DB" : "#1F2937",
                                boxShadow: darkMode
                                    ? "0 8px 24px rgba(0, 0, 0, 0.2)"
                                    : "0 8px 24px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            <div className="h-48 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className={` ${darkMode ? "text-gray-100" : "text-black"} mb-4`}>{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} rounded-full text-sm`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <motion.button
                                        onClick={() => onViewProject(project.id)}
                                        className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium`}
                                        whileHover={{ x: 5 }}
                                    >
                                        View Project
                                    </motion.button>
                                    <motion.button
                                        onClick={() => onViewGithub(project.id)}
                                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <i className="fab fa-github text-xl"></i>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
