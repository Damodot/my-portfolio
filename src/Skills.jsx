import { motion } from "framer-motion";
import { FaReact, FaGithubSquare } from "react-icons/fa";
import { FaNode, FaBootstrap } from "react-icons/fa6";
import { SiExpress, SiReactquery, SiVite } from "react-icons/si";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { CgFramer } from "react-icons/cg";
import { TbBrandRedux } from "react-icons/tb";


const Skills = ({ darkMode = true }) => {
    const skills = [
        {
            name: "React Js",
            borderColor: "border-blue-500",
            icon: <FaReact size={30} className="text-indigo-400" />,
            bgGradient: "from-blue-50 to-blue-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Node Js",
            borderColor: "border-green-500",
            icon: <FaNode size={30} className="text-green-500" />,
            bgGradient: "from-green-50 to-green-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Express Js",
            borderColor: "border-gray-500",
            icon: <SiExpress size={30} className="text-gray-500" />,
            bgGradient: "from-gray-50 to-gray-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Tailwind",
            borderColor: "border-cyan-500",
            icon: <RiTailwindCssFill size={30} className="text-cyan-500" />,
            bgGradient: "from-cyan-50 to-cyan-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Bootstrap",
            borderColor: "border-purple-500",
            icon: <FaBootstrap size={30} className="text-purple-500" />,
            bgGradient: "from-purple-50 to-purple-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Framer Motion",
            borderColor: "border-pink-500",
            icon: <CgFramer size={30} className="text-pink-500" />,
            bgGradient: "from-pink-50 to-pink-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "JavaScript",
            borderColor: "border-yellow-500",
            icon: <RiJavascriptFill size={30} className="text-yellow-500" />,
            bgGradient: "from-yellow-50 to-yellow-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Redux",
            borderColor: "border-indigo-500",
            icon: <TbBrandRedux size={30} className="text-indigo-500" />,
            bgGradient: "from-indigo-50 to-indigo-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Git",
            borderColor: "border-gray-500",
            icon: <FaGithubSquare size={30} className="text-gray-500" />,
            bgGradient: "from-gray-50 to-gray-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Firebase",
            borderColor: "border-amber-500",
            icon: "🔥",
            bgGradient: "from-amber-50 to-amber-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "React Bits",
            borderColor: "border-teal-500",
            icon: <SiReactquery size={30} className="text-teal-500" />,
            bgGradient: "from-teal-50 to-teal-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Aceternity",
            borderColor: "border-emerald-500",
            icon: "✨",
            bgGradient: "from-emerald-50 to-emerald-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Animata",
            borderColor: "border-fuchsia-500",
            icon: "🎪",
            bgGradient: "from-fuchsia-50 to-fuchsia-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Spline",
            borderColor: "border-violet-500",
            icon: "🎯",
            bgGradient: "from-violet-50 to-violet-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        },
        {
            name: "Vite",
            borderColor: "border-rose-500",
            icon: <SiVite size={30} className="text-rose-500" />,
            bgGradient: "from-rose-50 to-rose-100",
            darkBgGradient: "from-gray-800 to-gray-700"
        }
    ];

    // Color variants for animation
    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        }),
        hover: {
            scale: 1.08,
            rotateY: 5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.section
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <motion.h2
                className="text-3xl font-bold mb-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                My <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>Skills</span>
            </motion.h2>
            <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Technologies and tools I work with
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        variants={boxVariants}
                        className={`
                            ${darkMode
                                ? `bg-gradient-to-br ${skill.darkBgGradient} text-white`
                                : `bg-gradient-to-br ${skill.bgGradient} text-black`
                            } 
                            ${skill.borderColor} 
                            p-6 rounded-xl shadow-lg hover:shadow-2xl 
                            flex flex-col items-center justify-center text-center 
                            min-h-[120px] border-4 cursor-pointer
                            transform-gpu perspective-1000
                            transition-all duration-300 ease-out
                            backdrop-blur-sm
                        `}
                        style={{
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <motion.div
                            className="text-3xl mb-2"
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        >
                            {skill.icon}
                        </motion.div>
                        <span className="font-black text-xs sm:text-sm tracking-wide">
                            {skill.name}
                        </span>
                        <motion.div
                            className={`absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition-opacity duration-300 ${skill.borderColor.replace('border-', 'bg-')}`}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-16 rounded-2xl p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(238, 242, 255, 1)' }}
            >
                <h3 className="text-2xl font-bold mb-4 text-center">Beyond Technical Skills</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    While I specialize in frontend development, I also bring strong collaboration and problem-solving skills to every project.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default Skills;