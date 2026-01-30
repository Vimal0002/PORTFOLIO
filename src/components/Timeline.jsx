import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

const TimelineItem = ({ date, title, subtitle, description, icon: Icon, type, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="flex gap-4 md:gap-8 mb-12 relative"
        >
            {/* Line Segment */}
            <div className="absolute left-[19px] md:left-[19px] top-12 bottom-[-48px] w-0.5 bg-zinc-700 last:hidden" />

            <div className="flex-shrink-0 mt-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-slate-900 ${type === 'education' ? 'bg-purple-500 text-white' :
                    type === 'work' ? 'bg-blue-500 text-white' : 'bg-cyan-500 text-white'
                    }`}>
                    <Icon size={18} />
                </div>
            </div>

            <div className="flex-grow pt-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded-full w-fit border border-zinc-800">
                        <Calendar size={14} className="text-zinc-400" />
                        <span className="text-sm font-medium text-zinc-400">{date}</span>
                    </div>
                </div>
                <h4 className="text-lg font-medium text-blue-400 mb-2">{subtitle}</h4>
                <p className="text-zinc-400 leading-relaxed max-w-2xl bg-zinc-900 p-4 rounded-lg border border-zinc-800 shadow-sm">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const events = [
        {
            date: "Oct 2022 - Present",
            title: "Bachelor of Technology (CSE)",
            subtitle: "Jabalpur Engineering College",
            description: "Pursuing Computer Science Engineering. Focused on Data Structures, Algorithms, and Full Stack Development. Active participant in technical societies and hackathons.",
            icon: GraduationCap,
            type: "education",
            delay: 0.2
        },
        {
            date: "Nov 2025 - Present",
            title: "AI Voice Agent Project",
            subtitle: "Personal Project",
            description: "Developing an intelligent voice assistant using OpenAI API and Next.js. Focusing on real-time latency optimization and secure authentication.",
            icon: Briefcase,
            type: "work",
            delay: 0.3
        },
        {
            date: "Oct 2025",
            title: "Safety Management System",
            subtitle: "Personal Project",
            description: "Built a safety auditing platform with React & Node.js to manage workplace risks. Implemented dashboard visualization for safety metrics.",
            icon: Briefcase,
            type: "work",
            delay: 0.4
        },
        {
            date: "Feb 2025",
            title: "Code Kumbh Hackathon",
            subtitle: "Participant / Finalist",
            description: "Competed in a high-pressure 24-hour coding competition. Collaborated with a team to build a prototype solving a real-world problem.",
            icon: Award,
            type: "achievement",
            delay: 0.5
        },
        {
            date: "Apr 2021 - Mar 2022",
            title: "Higher Secondary (XII)",
            subtitle: "Kendriya Vidyalaya Bhind",
            description: "Completed secondary education with focus on Science and Mathematics.",
            icon: GraduationCap,
            type: "education",
            delay: 0.6
        }
    ];

    return (
        <section id="experience" className="py-20 bg-zinc-950 text-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        My Journey
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
                </motion.div>

                <div className="pl-4 md:pl-0">
                    {events.map((event, index) => (
                        <TimelineItem key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
