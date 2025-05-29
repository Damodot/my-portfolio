import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Contact from "./Contact";
import MusicImage from './assets/musicImg.jpg'
import TravelPicture from './assets/TravelPicture.jpg'
import PortfolioImage from './assets/portfolio.jpg'

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [darkMode, setDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const applyTheme = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        // Check user's preferred color scheme
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        applyTheme(prefersDark);
    }, []);

    const toggleDarkMode = (event) => {
        const isDark = !darkMode;
        setDarkMode(isDark);

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        const toggleElement = event?.target.closest('.toggle');
        if (toggleElement) {
            const rect = toggleElement.getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
        }

        if (!document.startViewTransition) {
            console.warn("View Transition API not supported. Falling back.");
            applyTheme(isDark);
            return;
        }

        const transition = document.startViewTransition(() => {
            applyTheme(isDark);
        });

        transition.ready.then(() => {
            document.documentElement.style.setProperty('--x', `${x}px`);
            document.documentElement.style.setProperty('--y', `${y}px`);
        }).catch(error => {
            console.error("Error during View Transition setup:", error);
        });
    };

    // Handlers for Projects
    const handleViewProject = (projectId) => {
        projectId === 1
            ? window.location.href = 'https://hitvverse.web.app'
            : projectId === 2
                ? window.location.href = 'https://tourounder.web.app'
                : projectId === 3
                    ? window.location.href = 'https://adevotun.web.app'
                    : console.log('Invalid project ID');
        console.log(`Viewing project ${projectId}`);
    };

    const handleViewGithub = (projectId) => {
        projectId === 1
            ? window.location.href = 'https://github.com/Damodot/original-hitverse.git'
            : projectId === 2
                ? window.location.href = 'https://github.com/Damodot/Tourander-Json.git'
                : projectId === 3
                    ? window.location.href = 'https://adevotun.web.app'
                    : console.log('Invalid project ID');
        console.log(`Viewing GitHub for project ${projectId}`);
    };

    // Handlers for Home
    const handleContactClick = () => {
        setActiveTab('contact');
    };

    const handleDownloadCvClick = () => {
        console.log('Downloading CV');
    };

    // Handler for Contact form
    const handleSubmitContact = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const projectsData = [
        {
            id: 1,
            title: "Music Platform",
            description: "A well functioning music application, with lyrics section, liked songs section and is fully responsive on all websites.",
            tags: ["Javascript", "Bootstrap", "Firebase"],
            image: MusicImage
        },
        {
            id: 2,
            title: "Travelling Agency",
            description: "Mobile application for tracking fitness activities, nutrition, and health metrics.",
            tags: ["Javascript", "Firebase", "Bootstrap"],
            image: TravelPicture
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "My responsive portfolio website with animations and contact form.",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            image: PortfolioImage
        }
    ];

    const skillsData = [
        { name: "React", level: 90, icon: "fab fa-react" },
        { name: "JavaScript", level: 85, icon: "fab fa-js" },
        { name: "Node.js", level: 80, icon: "fab fa-node-js" },
        { name: "HTML/CSS", level: 95, icon: "fab fa-html5" },
        { name: "UI/UX Design", level: 75, icon: "fas fa-paint-brush" },
        { name: "Python", level: 70, icon: "fab fa-python" }
    ];

    const experienceData = [
        {
            role: "Javascript Instructor",
            company: "SQI College of ICT",
            period: "2025 - Present",
            description: "Leading tech school in so many cities in Nigeria."
        },
        {
            role: "Web Developer",
            company: "Hitverse Music Platform",
            period: "2024 - 2025",
            description: "Developed and maintained client websites with focus on performance and accessibility."
        },
        {
            role: "Frontend Website Developer",
            company: "Changee Fin Tech.",
            period: "2025 - Present",
            description: "Assisted in building te frontend design for the settings page and consumed neccessary backend endpoint and APIs"
        }
    ];

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Navigation */}
            <motion.nav
                className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                            <span className="text-xl font-bold gradient-text">ADEVOTUN</span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['home', 'projects', 'skills', 'experience', 'contact'].map((tab) => (
                                <motion.button
                                    key={tab}
                                    className={`capitalize ${activeTab === tab ?
                                        'text-indigo-600 dark:text-indigo-400 font-medium' :
                                        'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                                    onClick={() => setActiveTab(tab)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            className="h-0.5 bg-indigo-600 dark:bg-indigo-400 mt-1"
                                            layoutId="underline"
                                        />
                                    )}
                                </motion.button>
                            ))}
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                    className="sr-only"
                                />
                                <div className={`${darkMode ? 'text-yellow-400' : 'text-gray-400'}`}></div>
                            </label>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <label className="toggle mr-2">
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                    className="sr-only"
                                />
                                <div></div>
                            </label>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {['home', 'projects', 'skills', 'experience', 'contact'].map((tab) => (
                                    <motion.button
                                        key={tab}
                                        className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize ${activeTab === tab ? 'bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            setIsMenuOpen(false);
                                        }}
                                        whileHover={{ x: 5 }}
                                    >
                                        {tab}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Main Content */}
            <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {activeTab === 'home' && (
                        <Home
                            darkMode={darkMode}
                            onContactClick={handleContactClick}
                            onDownloadCvClick={handleDownloadCvClick}
                        />
                    )}

                    {activeTab === 'projects' && (
                        <Projects
                            projects={projectsData}
                            darkMode={darkMode}
                            onViewProject={handleViewProject}
                            onViewGithub={handleViewGithub}
                        />
                    )}

                    {activeTab === 'skills' && (
                        <Skills
                            skills={skillsData}
                            darkMode={darkMode}
                        />
                    )}

                    {activeTab === 'experience' && (
                        <Experiences
                            experiences={experienceData}
                            darkMode={darkMode}
                        />
                    )}

                    {activeTab === 'contact' && (
                        <Contact
                            darkMode={darkMode}
                            onSubmit={handleSubmitContact}
                        />
                    )}
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.div className="mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
                            <span className="text-xl font-bold gradient-text">ADEVOTUN</span>
                        </motion.div>
                        <div className="flex space-x-6">
                            <motion.a
                                href="https://github.com/Damodot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                whileHover={{ y: -3 }}
                            >
                                <FaGithub className="text-xl" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/adedotun-adedeji-a60648256/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                whileHover={{ y: -3 }}
                            >
                                <FaLinkedin className="text-xl" />
                            </motion.a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
                        <p>© {new Date().getFullYear()} Adevotun. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Add the CSS for the toggle animation */}
            <style jsx global>{`
                :root {
                    --x: 50%;
                    --y: 50%;
                }

                @keyframes reveal-in {
                    from {
                        clip-path: circle(0% at var(--x) var(--y));
                    }
                    to {
                        clip-path: circle(150% at var(--x) var(--y));
                    }
                }

                @keyframes reveal-out {
                    from {
                        clip-path: circle(150% at var(--x) var(--y));
                    }
                    to {
                        clip-path: circle(0% at var(--x) var(--y));
                    }
                }

                ::view-transition-new(root) {
                    animation: reveal-in 0.5s ease-in-out forwards;
                    z-index: 1;
                    mix-blend-mode: normal;
                }

                ::view-transition-old(root) {
                    animation: reveal-out 0.5s ease-in-out forwards;
                    animation-delay: .5s;
                    z-index: 0;
                    mix-blend-mode: normal;
                }

                ::view-transition-image-pair(root) {
                    isolation: isolate;
                }

                .toggle {
                    position: relative;
                    cursor: pointer;
                    z-index: 10;
                    transform: scale(0.5); /* Makes the toggle smaller */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }


                .toggle input {
                    display: none;
                }

                .toggle input + div {
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    position: relative;
                    box-shadow: inset 16px -16px 0 0 var(--toggle-color, #ffffff);
                    transform: scale(1) rotate(-2deg);
                    transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
                }

                .toggle input + div:before {
                    content: '';
                    width: inherit;
                    height: inherit;
                    border-radius: inherit;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: var(--toggle-color, #1e293b);
                    opacity: 0;
                    transition: opacity .3s ease;
                }

                .toggle:not(:checked) + div {
                    --toggle-color: #ffffff; 
                }

                .toggle input:checked + div:after {
                    box-shadow: 
                    0 -23px 0 var(--toggle-color),
                    0 23px 0 var(--toggle-color),
                    23px 0 0 var(--toggle-color),
                    -23px 0 0 var(--toggle-color),
                    15px 15px 0 var(--toggle-color),
                    -15px 15px 0 var(--toggle-color),
                    15px -15px 0 var(--toggle-color),
                    -15px -15px 0 var(--toggle-color);
                }

                .toggle input:checked + div {
                    --toggle-color: #fbbf24; /* Yellow color for sun */
                    box-shadow: inset 32px -32px 0 0 var(--background-color);
                }

                .toggle input:checked + div:before {
                    opacity: 1;
                    transition: opacity .3s ease .1s;
                }

                .toggle input:checked + div:after {
                    transform: scale(1.5);
                    transition: transform .5s ease .15s;
                }

                html {
                    --toggle-light: #ffffff;
                }

                html.dark {
                    --toggle-dark: #fbbf24;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;