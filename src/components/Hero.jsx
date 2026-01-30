import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 filter" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50 filter" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-cyan-400 font-semibold tracking-wide uppercase mb-4"
                    >
                        Hi, I am
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Vimal Pratap Singh
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-medium text-zinc-400 mb-8">
                        Full Stack Developer & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            AI Integration Specialist
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg mb-10 leading-relaxed">
                        I build scalable web applications and intelligent systems using Next.js, React, and Modern AI.
                        Focused on performance, aesthetics, and user experience.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/25">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 transition-all shadow-sm">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-zinc-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
