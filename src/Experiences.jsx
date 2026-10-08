import { motion } from "framer-motion";

const Experience = ({
    experiences = [],
    darkMode = true
}) => {
    return (
        <motion.section
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
        >
            <motion.h2
                className="text-3xl font-bold mb-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Work <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>Experience</span>
            </motion.h2>
            <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                My professional journey and the companies I've worked with.
            </motion.p>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline bar */}
                <div className="absolute left-4 md:left-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/30 -translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Timeline dot */}
                        <div className={`absolute top-4 rounded-full w-4 h-4 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'} ${index % 2 === 0 ? 'md:right-0 md:mr-2' : 'md:left-0 md:ml-2'}`}></div>

                        <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{exp.company}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className={`rounded-2xl p-8 shadow-lg mt-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                <i className={`fas fa-graduation-cap ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                            </div>
                            <div>
                                <h4 className="font-bold">Higher National Diploma</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2024</p>
                            </div>
                        </div>
                        <p className="font-semibold">Statistics</p>
                        <p className="text-gray-600 dark:text-gray-300">FCAH&PT</p>
                    </motion.div>

                    <motion.div
                        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                <i className={`fas fa-university ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                            </div>
                            <div>
                                <h4 className="font-bold">Software Engineering</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2024 - Present</p>
                            </div>
                        </div>
                        <p className="font-semibold">Fullstack website development / Cybersecurity</p>
                        <p className="text-gray-600 dark:text-gray-300">SQI</p>
                    </motion.div>

                    <motion.div
                        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                <i className={`fas fa-university ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                            </div>
                            <div>
                                <h4 className="font-bold">Cybersecurity</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Ongoing</p>
                            </div>
                        </div>
                        <p className="font-semibold">Cybersecurity Analyst</p>
                        <p className="text-gray-600 dark:text-gray-300">Tilcareer London Institute</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Experience;