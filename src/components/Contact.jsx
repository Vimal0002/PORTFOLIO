import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=rp00366685@gmail.com&su=${subject}&body=${body}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Whether you have a question, a project opportunity, or just want to say hi, I'm always open to connecting!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 border border-zinc-800 shadow-sm rounded-lg text-blue-500">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white">Email</h4>
                                <a href="mailto:rp00366685@gmail.com" className="text-zinc-400 hover:text-blue-400 transition-colors">
                                    rp00366685@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 border border-zinc-800 shadow-sm rounded-lg text-green-500">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white">Phone</h4>
                                <a href="tel:+917909515615" className="text-zinc-400 hover:text-green-400 transition-colors">
                                    +91 79095 15615
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 border border-zinc-800 shadow-sm rounded-lg text-purple-500">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white">Location</h4>
                                <p className="text-zinc-400">
                                    Jabalpur, Madhya Pradesh, India
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-zinc-800">
                            <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/Vimal0002" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 shadow-sm rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-white transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/vimal-pratap-singh" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 shadow-sm rounded-lg text-zinc-500 hover:bg-blue-900/50 hover:text-blue-400 transition-all">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg relative"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
