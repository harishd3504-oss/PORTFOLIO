import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Calendar, Download, Briefcase, Award, Users, Terminal, Mail, Phone, MapPin, Globe, Linkedin, Github, Star } from 'lucide-react';

const Resume = () => {
    const contactInfo = {
        name: "HARISH D",
        title: "Full Stack Developer | Aspirant Cyber Security Engineer",
        location: "Chennai, Tamil Nadu, India",
        phone: "9092459913",
        email: "harishd3504@gmail.com",
        linkedin: "linkedin.com/in/harish-d-420617328",
        github: "github.com/harishd3504-oss"
    };

    const academicHighlights = [
        { label: "12th Standard", score: "90.1%", year: "2024" },
        { label: "11th Standard", score: "89.2%", year: "2023" },
        { label: "10th Standard", score: "85.6%", year: "2022" }
    ];

    const summary = "Full Stack Developer and Aspiring Cybersecurity Engineer with hands-on experience building responsive, high-performance web applications using HTML5, CSS3, JavaScript, and React. Proven track record in creating user-friendly designs through academic projects and internships. Currently pursuing Bachelor of Engineering in Cyber Security at Sri Sairam Engineering College (CGPA: 8.86). Winner of 2nd Place at IEEE Day 2025 Fancy Event.";

    const technicalSkills = [
        {
            category: "Programming Languages",
            items: ["Python", "JavaScript", "HTML5", "CSS3"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React", "Node.js"]
        },
        {
            category: "Tools & Technologies",
            items: ["Git", "Version Control", "Deployment Environments", "Netlify"]
        },
        {
            category: "Specializations",
            items: ["Frontend Development", "Responsive Design", "UI/UX Implementation", "Web Application Security"]
        }
    ];

    const education = [
        {
            institution: "Sri Sairam Engineering College",
            degree: "Bachelor of Engineering in Cyber Security",
            duration: "2024 - 2028 (Currently in 3rd Semester)",
            grade: "Score: 8.86 CGPA",
            description: "Specializing in Cyber Security with a focus on Frontend Development, Responsive Design, and Web Application Security."
        },
        {
            institution: "Sir Sivaswami Kalalaya Matriculation Higher Secondary School",
            degree: "12th Standard - Computer Science with Mathematics (HSC)",
            duration: "Passing Year: 2024",
            grade: "Score: 90.1%",
            description: "Completed higher secondary education with a strong foundation in core sciences and programming."
        },
        {
            institution: "Sir Sivaswami Kalalaya Matriculation Higher Secondary School",
            degree: "11th Standard",
            duration: "Passing Year: 2023",
            grade: "Score: 89.2%",
            description: "Successfully completed 11th standard with consistent academic performance."
        },
        {
            institution: "SSK CBSE School",
            degree: "10th Standard (SSLC)",
            duration: "Passing Year: 2022",
            grade: "Score: 85.6%",
            description: "Foundational secondary education with a focus on core academic subjects."
        }
    ];

    const experience = [
        {
            company: "Sri Sairam Techno Incubator Foundation",
            role: "Web Development Intern",
            duration: "December 2025 - Present",
            description: [
                "Designed and developed real-world web applications with focus on functionality, performance, and user experience in R&D Department",
                "Built E-commerce Full-Stack Mini Project and Mini Bank Application using React, implementing responsive UI components, client-side logic, and modern deployment practices",
                "Gained hands-on experience with industry-oriented development workflows, version control, deployment environments, and real-world incubation and startup use cases"
            ]
        }
    ];

    const leadership = [
        {
            role: "Campus Ambassador",
            organization: "White Devils Tech Community",
            duration: "August 2025 - Present",
            description: "Spread awareness about tech community initiatives, organized tech events and webinars, and fostered culture of learning and innovation"
        },
        {
            role: "Student Member",
            organization: "IEEE Systems, Man, and Cybernetics Society",
            duration: "December 2024 - Present",
            description: "Engaged in technical learning, professional development, and collaborative activities through workshops, seminars, and networking events"
        },
        {
            role: "NSS Volunteer",
            organization: "NSS SAIRAM",
            duration: "August 2024 - Present",
            description: "Participated in cleanliness drives, awareness programs, blood donation camps, and rural outreach activities demonstrating commitment to social responsibility"
        }
    ];

    const achievements = [
        "2nd Place Winner - IEEE Day 2025 Fancy Event | IEEE SMC",
        "UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS",
        "CERTIFICATE COMPLETION OF C PROGRAMMING",
        "JOY OF COMPUTING USING PYTHON",
        "BIG STANDARDS AND CONSUMER RIGHTS",
        "E-SIM TRAINING"
    ];

    return (
        <section id="resume" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <FileText size={24} />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">Resume</h2>
                        </div>
                        <p className="text-gray-400 max-w-4xl text-sm leading-relaxed">
                            {summary}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20"
                            onClick={() => window.open('/resume.png', '_blank')}
                        >
                            <Download size={20} />
                            Download CV
                        </motion.button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-12">
                        {/* Contact Header */}
                        <div className="glass p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-l-4 border-cyan-500">
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <MapPin size={16} className="text-cyan-500" />
                                {contactInfo.location}
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <Phone size={16} className="text-cyan-500" />
                                +91 {contactInfo.phone}
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <Mail size={16} className="text-cyan-500" />
                                {contactInfo.email}
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <Linkedin size={16} className="text-cyan-500" />
                                {contactInfo.linkedin}
                            </div>
                        </div>

                        {/* HIGHLY VISIBLE Academic Highlights (requested "outside") */}
                        <div className="grid grid-cols-3 gap-4">
                            {academicHighlights.map((stat, i) => (
                                <div key={i} className="glass p-4 text-center border-b-2 border-transparent hover:border-cyan-500 transition-colors">
                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">{stat.label}</p>
                                    <p className="text-lg font-black text-cyan-400">{stat.score}</p>
                                    <p className="text-[10px] text-gray-400">{stat.year}</p>
                                </div>
                            ))}
                        </div>

                        {/* Technical Skills Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 glass rounded-lg text-cyan-500">
                                    <Terminal size={20} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Technical Skills</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {technicalSkills.map((skill, idx) => (
                                    <div key={idx} className="glass p-4 space-y-2 hover:bg-white/5 transition-colors">
                                        <h4 className="text-cyan-400 font-bold text-xs uppercase tracking-wider">{skill.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item, i) => (
                                                <span key={i} className="text-gray-300 text-sm">{item}{i < skill.items.length - 1 ? ',' : ''}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section - MOVED UP for prominence */}
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 md:before:left-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-cyan-500/30 before:to-transparent pl-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 glass rounded-lg text-cyan-500">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Education</h3>
                            </div>

                            {education.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative glass p-6 space-y-4 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#00bcd4] group-hover:scale-125 transition-transform"></div>

                                    <div className="flex items-start justify-between flex-wrap gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-400">{item.institution}</h4>
                                            <p className="text-cyan-500 text-sm font-medium italic">{item.degree}</p>
                                            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest bg-white/5 inline-block px-2 py-1 rounded">{item.grade}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest glass px-3 py-1">
                                            <Calendar size={14} />
                                            {item.duration}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Experience Section */}
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 md:before:left-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-cyan-500/30 before:to-transparent pl-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 glass rounded-lg text-cyan-500">
                                    <Briefcase size={20} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Professional Experience</h3>
                            </div>

                            {experience.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative glass p-6 space-y-4 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#00bcd4] group-hover:scale-125 transition-transform"></div>
                                    <div className="flex justify-between items-start flex-wrap gap-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-white uppercase">{item.role}</h4>
                                            <p className="text-cyan-500 font-medium italic">{item.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest glass px-3 py-1">
                                            <Calendar size={14} />
                                            {item.duration}
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="leading-relaxed">{desc}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Leadership Section */}
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 md:before:left-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-cyan-500/30 before:to-transparent pl-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 glass rounded-lg text-cyan-500">
                                    <Users size={20} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Leadership & Community</h3>
                            </div>

                            {leadership.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative glass p-6 space-y-4 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#00bcd4] group-hover:scale-125 transition-transform"></div>
                                    <div className="flex justify-between items-start flex-wrap gap-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase">{item.role}</h4>
                                            <p className="text-cyan-500 font-medium italic">{item.organization}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest glass px-3 py-1">
                                            <Calendar size={14} />
                                            {item.duration}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Achievements Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 glass rounded-lg text-cyan-500">
                                    <Award size={20} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Certifications & Achievements</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {achievements.map((achievement, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="glass p-3 text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                        {achievement}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass p-4 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
                            <img
                                src="/resume.png"
                                alt="Harish D Resume"
                                className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="mt-4 text-center">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Resume Preview</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
