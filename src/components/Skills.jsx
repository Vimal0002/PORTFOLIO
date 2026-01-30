import { motion } from 'framer-motion';
import {
    Code,
    Server,
    Database,
    Layout,
    Cpu,
    Wrench,
    CheckCircle2
} from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, colors, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-700 ${colors.border} transition-all duration-300 group shadow-sm`}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} group-hover:bg-opacity-20 transition-colors`}>
                    <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium text-zinc-300 bg-zinc-950 border border-zinc-700 rounded-full flex items-center gap-2 hover:text-white hover:border-zinc-500 transition-colors"
                    >
                        <CheckCircle2 size={14} className={colors.text} />
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Layout,
            colors: {
                border: "hover:border-cyan-500",
                bg: "bg-cyan-500/10",
                text: "text-cyan-400"
            },
            skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "HTML5/CSS3", "Material UI"],
            delay: 0.2
        },
        {
            title: "Backend & Connect",
            icon: Server,
            colors: {
                border: "hover:border-blue-500",
                bg: "bg-blue-500/10",
                text: "text-blue-400"
            },
            skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "API Integration", "Secure Sessions"],
            delay: 0.4
        },
        {
            title: "Database & Logic",
            icon: Database,
            colors: {
                border: "hover:border-purple-500",
                bg: "bg-purple-500/10",
                text: "text-purple-400"
            },
            skills: ["MySQL", "MongoDB", "SQL", "DBMS", "Data Structures", "OOPs"],
            delay: 0.6
        },
        {
            title: "Tools & Core",
            icon: Wrench,
            colors: {
                border: "hover:border-orange-500",
                bg: "bg-orange-500/10",
                text: "text-orange-400"
            },
            skills: ["Git & GitHub", "Postman", "VS Code", "Vercel", "C++", "SDLC"],
            delay: 0.8
        }
    ];

    return (
        <section id="skills" className="py-20 bg-zinc-950 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Technical Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building robust, scalable, and intuitive digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
