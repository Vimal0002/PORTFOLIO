import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Trophy, Upload, Camera } from 'lucide-react';

const About = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfileImage(base64String);
                localStorage.setItem('profileImage', base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <section id="about" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image/Profile Area - Editable */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer" onClick={triggerFileInput}>
                            {/* Hidden Input */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg animate-pulse" />

                            <div className="relative w-full h-full bg-zinc-900 border-2 border-zinc-700 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-blue-500 shadow-lg">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-zinc-500 group-hover:text-blue-400 transition-colors">
                                        <User size={100} strokeWidth={1} />
                                        <span className="text-sm font-medium flex items-center gap-2">
                                            <Upload size={16} /> Click to Upload Photo
                                        </span>
                                    </div>
                                )}

                                {/* Overlay Hint */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-white flex flex-col items-center gap-2">
                                        <Camera size={32} />
                                        <span className="text-sm font-medium">Change Photo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-zinc-200">
                            Driven by Innovation, Powered by Code.
                        </h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            I am a Final Year Computer Science Engineering student at Jabalpur Engineering College with a strong foundation in <span className="text-cyan-400 font-medium">Full Stack Development</span> and <span className="text-purple-400 font-medium">Artificial Intelligence</span>.
                        </p>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            My journey is defined by building scalable web applications and integrating intelligent systems to solve real-world problems. Whether it's optimizing API response times by 30% or designing futuristic UI/UX, I am obsessed with quality and meaningful impact.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-700 hover:border-blue-500 transition-colors shadow-sm">
                                <GraduationCap className="text-blue-500 mb-2" size={24} />
                                <h4 className="font-semibold text-white">Engineering</h4>
                                <p className="text-sm text-zinc-400">Jabalpur Engineering College (2022-Present)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default About;
