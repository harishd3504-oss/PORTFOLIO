import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Maximize2, Camera } from 'lucide-react';

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const photos = [
        { id: 1, src: '/gallery/ieeebay.png', title: 'IEEE AWARD CEREMONY', category: 'Events' },
        { id: 2, src: '/gallery/annual_day_smile.png', title: '12th ANUAL DAY', category: 'Milestones' },
        { id: 3, src: '/gallery/annual_day_award.png', title: '11th ANUAL DAY', category: 'Milestones' },
        { id: 4, src: '/gallery/cybersecurity_group.png', title: 'SIRD VISIT', category: 'Cyber Security' },
        { id: 5, src: '/gallery/iit_research_park_group.jpg', title: 'IIT RESEARCH PARK', category: 'Education' },
        { id: 6, src: '/gallery/sairam_workshop_audience.jpg', title: 'Hacking workshop', category: 'Workshops' },
        { id: 7, src: '/gallery/student_resource_guide.png', title: 'MongoDb Workshop', category: 'Workshops' },
        { id: 8, src: '/gallery/cybersecurity_workshop.jpg', title: 'Cyber Forensics Workshop', category: 'Workshops' },
        { id: 9, src: '/gallery/agile_training.jpg', title: 'Agile Software Workshop', category: 'Workshops' },
        { id: 10, src: '/gallery/engineering_superpower_group.png', title: '4th Semester Orientation', category: 'Orientation' },
        { id: 11, src: '/gallery/seven_habits_book.png', title: '7Habits Of Highly Effective Teens', category: 'Growth' },
        { id: 12, src: '/gallery/sairam_event_group.jpg', title: 'IEEE day Award Distribution', category: 'Awards' },
        { id: 13, src: '/gallery/graduation_prep.jpg', title: 'Cyber Security Workshop', category: 'Workshops' },
        { id: 14, src: '/gallery/pete_tech_centre.jpg', title: 'Industrial Visit-Precision Engineering', category: 'Industry' },
        { id: 15, src: '/gallery/safer_internet_day.jpg', title: 'Responsive Use Of AI Workshop', category: 'AI' },
        { id: 16, src: '/gallery/industrial_estate_visit.jpg', title: 'IV Group Photo', category: 'Industry' }
    ];

    // Double the photos for seamless looping
    const displayPhotos = [...photos, ...photos];

    return (
        <section id="gallery" className="py-24 relative overflow-hidden bg-dark-accent/20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                        <Camera size={24} />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Photo Gallery</h2>
                    </div>
                    <p className="text-gray-400">
                        A visual journey through my professional milestones and events.
                    </p>
                </div>
            </div>

            {/* Marquee Track */}
            <div
                className="relative flex overflow-hidden py-10"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: isPaused ? 0 : [0, -6912] }} // Approx 432px per item (400px + 32px gap) * 16 items
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Slower duration for more content
                            ease: "linear"
                        }
                    }}
                >
                    {displayPhotos.map((photo, idx) => (
                        <motion.div
                            key={`${photo.id}-${idx}`}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="flex-shrink-0 w-[300px] md:w-[400px] group relative cursor-pointer"
                            onClick={() => setSelectedImage(photo)}
                        >
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl glass border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-xl shadow-black/50">
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60'; }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <div className="space-y-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold px-2 py-1 glass rounded">
                                            {photo.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-white">{photo.title}</h3>
                                        <div className="pt-2">
                                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                                <Maximize2 size={12} />
                                                View Milestone
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                Hover to pause • Click to enlarge
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-dark/95 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-8 right-8 p-3 glass rounded-full text-white hover:text-cyan-400 z-[101]"
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-full flex flex-col justify-center gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass shadow-2xl shadow-cyan-500/20">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60'; }}
                                />
                            </div>
                            <div className="space-y-2 text-center">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{selectedImage.title}</h3>
                                <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PhotoGallery;
