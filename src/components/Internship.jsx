// Reverting to placeholders to fix crash
const stif = "https://ui-avatars.com/api/?name=STIF&background=ffffff&color=00bcd4&size=128";
const offerLetter = "#";

import { Briefcase, ExternalLink, Github, FileText } from 'lucide-react';

const Internship = () => {
    return (
        <section id="internship" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                        <Briefcase size={24} />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Internship</h2>
                    </div>
                    <p className="text-gray-400">
                        Professional experience and projects.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 space-y-8"
                >
                    <div className="border-b border-white/5 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                                <img src={stif} alt="STIF Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Sri Sairam Techno Incubator Foundation</h3>
                                <p className="text-cyan-400 font-medium">Internship Projects</p>
                            </div>
                        </div>

                        <motion.a
                            href={offerLetter}
                            target={offerLetter === "#" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => offerLetter === "#" && e.preventDefault()}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 w-fit cursor-pointer"
                        >
                            <FileText size={20} />
                            View Offer Letter
                        </motion.a>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="glass p-6 space-y-4 hover:bg-white/5 transition-colors">
                            <h4 className="text-xl font-bold text-white">Bank Application Mini Frontend</h4>
                            <p className="text-xs text-cyan-400 font-mono">BANK-APPLICATION-MINI-FRONTEND-STIF</p>
                            <p className="text-gray-400 text-sm">
                                A frontend mini project for a banking application.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="http://localhost:5173" // Placeholder as requested
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-bold transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Project
                                </a>
                                <a
                                    href="https://github.com/harishd3504-oss/BANK-APPLICATION-MINI-FRONTEND-STIF.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-bold transition-colors"
                                >
                                    <Github size={16} />
                                    Repo
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="glass p-6 space-y-4 hover:bg-white/5 transition-colors">
                            <h4 className="text-xl font-bold text-white">E-Commerce FullStack Mini</h4>
                            <p className="text-xs text-cyan-400 font-mono">ECOMMERCE-FullStack-Mini-STIF</p>
                            <p className="text-gray-400 text-sm">
                                A full-stack mini project for an e-commerce platform.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="http://localhost:5173" // Placeholder as requested
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-bold transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Project
                                </a>
                                <a
                                    href="https://github.com/harishd3504-oss/ECOMMERCE-FullStack-Mini-STIF.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-bold transition-colors"
                                >
                                    <Github size={16} />
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Internship;
