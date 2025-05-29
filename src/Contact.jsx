import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = ({
    darkMode = true,
    onSubmit,
    socialLinks = {
        github: "https://github.com/Damodot",
        linkedin: "www.linkedin.com/in/adedeji-damodotun-a60648256",
        email: "mailto:damodotunadedeji@gmail.com",
        phone: "tel:+2347019748865"
    }
}) => {
    return (
        <motion.section
            key="contact"
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
                Get In <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>Touch</span>
            </motion.h2>
            <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={`rounded-2xl p-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                    <FaEnvelope className={`text-xl ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email</h4>
                                    <a href={socialLinks.email} className="text-gray-600 dark:text-gray-300 hover:underline">
                                        damodotunadedeji@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                    <i className={`fas fa-phone-alt ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Phone</h4>
                                    <a href={socialLinks.phone} className="text-gray-600 dark:text-gray-300 hover:underline">
                                        +234 (701) 974-8865
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                                    <i className={`fas fa-map-marker-alt ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} text-xl`}></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Oyo, Nigeria</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                <motion.a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-700 hover:bg-indigo-900/30' : 'bg-gray-100 hover:bg-indigo-100'} text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400`}
                                    whileHover={{ y: -3 }}
                                >
                                    <FaGithub className="text-xl" />
                                </motion.a>
                                <motion.a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-700 hover:bg-indigo-900/30' : 'bg-gray-100 hover:bg-indigo-100'} text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400`}
                                    whileHover={{ y: -3 }}
                                >
                                    <FaLinkedin className="text-xl" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-700 hover:bg-indigo-900/30' : 'bg-gray-100 hover:bg-indigo-100'} text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400`}
                                    whileHover={{ y: -3 }}
                                >
                                    <i className="fab fa-twitter text-xl"></i>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-700 hover:bg-indigo-900/30' : 'bg-gray-100 hover:bg-indigo-100'} text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400`}
                                    whileHover={{ y: -3 }}
                                >
                                    <i className="fab fa-instagram text-xl"></i>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={`rounded-2xl p-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className={`w-full px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-indigo-400 hover:bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'} text-white`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
