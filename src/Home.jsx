import { motion } from "framer-motion";
import myGradImg from './assets/MyGradImg.jpg'
import RotatingText from './RotatingText'

const Home = ({
    name = "Adedotun Anthony",
    title = "Fullstack Website Developer",
    description = "I create beautiful, responsive, and user-friendly web applications with modern technologies. Passionate about crafting exceptional digital experiences.",
    imageUrl = myGradImg,
    yearsExperience = "1 Year",
    projectsCompleted = "Multiple Projects",
    darkMode = true,
    onContactClick,
    onDownloadCvClick
}) => {
    return (
        <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 w-full"
        >
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Section */}
                    <div>
                        {/* Rotating text */}
                        <div className="flex items-center mb-10">
                            <h1 className="text-4xl font-bold me-3">Creative</h1>
                            <RotatingText
                                texts={['Thinking', 'Coding', 'Innovations', 'Designs']}
                                mainClassName="font-bold text-3xl px-2 sm:px-2 md:px-3 bg-indigo-400 hover:bg-indigo-500 text-white overflow-hidden py-3 sm:py-3 md:py-3 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </div>
                        <div className="topClass">
                            <motion.h1
                                className="text-4xl md:text-5xl font-bold mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Hi, I'm <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{name}</span>
                            </motion.h1>
                            <motion.h2
                                className={`${darkMode ? 'text-gray-100' : 'text-black'} text-2xl md:text-3xl font-semibold mb-6`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {title}
                            </motion.h2>
                            <motion.p
                                className={`text-lg ${darkMode ? 'text-gray-100' : 'text-black'} mb-8`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                {description}
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <motion.button
                                    onClick={onContactClick}
                                    className={`px-6 py-3 ${darkMode ? 'bg-indigo-400 hover:bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-lg font-medium transition-colors`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Me
                                </motion.button>
                                <motion.button
                                    onClick={onDownloadCvClick}
                                    className={`px-6 py-3 border ${darkMode ? 'border-indigo-400 text-indigo-400 hover:bg-gray-800' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'} rounded-lg font-medium transition-colors`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download CV
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >

                        <div className={`w-full h-96 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100'} rounded-2xl overflow-hidden relative`}>
                            <motion.img
                                src={imageUrl}
                                alt="Profile"
                                className="w-full h-full object-cover object-top"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            />
                        </div>

                        {/* Badge 1 */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center">
                                <div className={`p-3 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'} rounded-lg mr-3`}>
                                    <i className={`fas fa-medal ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                                </div>
                                <div>
                                    <p className={`font-bold text-gray-100`}>{yearsExperience}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Badge 2 */}
                        <motion.div
                            className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center">
                                <div className={`p-3 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'} rounded-lg mr-3`}>
                                    <i className={`fas fa-project-diagram ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                                </div>
                                <div>
                                    <p className={`font-bold text-gray-100`}>{projectsCompleted}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section >
    );
};

export default Home;
