import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, github, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 hover:border-blue-500 transition-colors duration-300 flex flex-col h-full shadow-md"
        >
            {/* Image Placeholder - making it a gradient pattern for now */}
            <div className="h-48 bg-zinc-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${title.includes('AI') ? 'from-purple-600/20 to-blue-600/20' : 'from-zinc-700/20 to-zinc-600/20'}`} />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    <Code2 size={48} opacity={0.5} />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-white text-zinc-400 hover:text-zinc-950 transition-colors shadow-sm">
                            <Github size={20} />
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">{title}</h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed flex-grow">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs font-medium text-zinc-300 bg-zinc-950 rounded border border-zinc-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "AI Voice Agent Web App",
            description: "An advanced voice assistant application featuring real-time voice interaction. Integrated secure OpenAI API usage with JWT-based authentication and a futuristic UI.",
            tags: ["Next.js", "OpenAI API", "Node.js", "Tailwind CSS"],
            link: "#", // Add live link if available
            github: "https://github.com/Vimal0002",
            delay: 0.2
        },
        {
            title: "Safety Management System",
            description: "A comprehensive safety auditing platform to monitor workplace risks. Features interactive dashboards for real-time data visualization and reporting.",
            tags: ["React.js", "Node.js", "MySQL", "Chart.js"],
            link: "#",
            github: "https://github.com/Vimal0002",
            delay: 0.4
        },
        {
            title: "Digital Clock Application",
            description: "A highly optimized digital clock featuring real-time updates and lazy loading techniques with minimal performance overhead.",
            tags: ["HTML", "CSS", "JavaScript", "Performance"],
            link: "#",
            github: "https://github.com/Vimal0002",
            delay: 0.6
        }
    ];

    return (
        <section id="projects" className="py-20 bg-zinc-950 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Showcasing my journey through code, from intelligent systems to optimized frontend experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
