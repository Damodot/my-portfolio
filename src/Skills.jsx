import { motion } from "framer-motion";
import { FaRust, FaReact } from "react-icons/fa";
import { FaGolang, FaNode, FaRobot, FaMicrochip, FaFlask, FaToolbox } from "react-icons/fa6";
import { SiCplusplus, SiPython, SiTypescript, SiJavascript, SiDocker, SiLinux, SiGit } from "react-icons/si";

const Skills = ({ darkMode = true }) => {
    const languages = [
        { name: "Rust", icon: <FaRust size={30} className="text-orange-500" />, borderColor: "border-orange-500" },
        { name: "Go", icon: <FaGolang size={30} className="text-cyan-500" />, borderColor: "border-cyan-500" },
        { name: "C++", icon: <SiCplusplus size={30} className="text-blue-500" />, borderColor: "border-blue-500" },
        { name: "Python", icon: <SiPython size={30} className="text-yellow-500" />, borderColor: "border-yellow-500" },
        { name: "TypeScript", icon: <SiTypescript size={30} className="text-sky-500" />, borderColor: "border-sky-500" },
        { name: "JavaScript", icon: <SiJavascript size={30} className="text-amber-400" />, borderColor: "border-amber-400" },
        { name: "React", icon: <FaReact size={30} className="text-indigo-400" />, borderColor: "border-indigo-500" },
        { name: "Node.js", icon: <FaNode size={30} className="text-green-500" />, borderColor: "border-green-500" },
        { name: "Docker", icon: <SiDocker size={30} className="text-blue-400" />, borderColor: "border-blue-400" },
        { name: "Git", icon: <SiGit size={30} className="text-red-500" />, borderColor: "border-red-500" },
        { name: "Linux", icon: <SiLinux size={30} className="text-gray-400" />, borderColor: "border-gray-500" },
    ];

    const areas = [
        {
            title: "AI training & evaluation",
            icon: <FaRobot size={22} />,
            items: ["Code-task design", "Model-response evaluation", "Preference ranking (RLHF)",
                "Rubric writing", "Reference solutions", "Test-based verification"],
        },
        {
            title: "Systems",
            icon: <FaMicrochip size={22} />,
            items: ["Compilers & language tooling", "Interpreters", "Query engines (SQL, graph)",
                "WebAssembly", "Command-line tooling"],
        },
        {
            title: "Testing",
            icon: <FaFlask size={22} />,
            items: ["Unit & integration tests", "Regression suites", "Fail-before / pass-after verification",
                "Flaky-test detection"],
        },
        {
            title: "Tooling",
            icon: <FaToolbox size={22} />,
            items: ["Git", "Docker", "Linux", "CI pipelines", "cargo", "npm", "pytest", "Playwright"],
        },
    ];

    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } }),
        hover: { scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 12 } },
    };

    const accent = darkMode ? "text-indigo-400" : "text-indigo-600";
    const chip = darkMode ? "bg-indigo-900/30 text-indigo-300" : "bg-indigo-100 text-indigo-700";

    return (
        <motion.section
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <motion.h2 className="text-3xl font-bold mb-2 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                My <span className={accent}>Skills</span>
            </motion.h2>
            <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Languages and tools I use to build, test and evaluate software
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {languages.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={boxVariants}
                        className={`${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-700 text-white" : "bg-white text-black"}
                            ${skill.borderColor} p-5 rounded-xl shadow-lg flex flex-col items-center justify-center
                            text-center min-h-[110px] border-4`}
                    >
                        <div className="mb-2">{skill.icon}</div>
                        <span className="font-black text-xs sm:text-sm tracking-wide">{skill.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                {areas.map((area, index) => (
                    <motion.div
                        key={area.title}
                        className={`rounded-2xl p-6 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-lg mr-3 ${darkMode ? "bg-indigo-900/30" : "bg-indigo-100"} ${accent}`}>
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-bold">{area.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {area.items.map((item) => (
                                <span key={item} className={`px-3 py-1 rounded-full text-sm ${chip}`}>{item}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 rounded-2xl p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                style={{ backgroundColor: darkMode ? "rgba(17, 24, 39, 0.8)" : "rgba(238, 242, 255, 1)" }}
            >
                <h3 className="text-2xl font-bold mb-4 text-center">Strengths</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Precise technical writing", "Reading large unfamiliar codebases",
                        "Rigorous, reproducible evaluation", "Clear reviewer feedback"].map((s) => (
                        <span key={s} className={`px-4 py-2 rounded-full ${chip}`}>{s}</span>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Skills;
