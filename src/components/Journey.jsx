import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    const experiences = [
        {
            date: '2023 - Present',
            title: 'Senior Full Stack Developer',
            desc: 'Leading the development of high-performance real-time applications using Next.js and Node.js. Specializing in scalable architecture and real-time communication.',
            tags: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'Socket.io']
        },
        {
            date: '2020 - 2023',
            title: 'Full Stack Developer',
            desc: 'Developed robust backend systems and intuitive frontends. Focused on database optimization and high-concurrency websocket connections.',
            tags: ['Python', 'MongoDB', 'MySQL', 'Websocket', 'Javascript']
        },
        {
            date: '2017 - 2020',
            title: 'Software Engineer',
            desc: 'Started the journey by building communication platforms and integrating SIP protocols for enterprise-level VOIP solutions.',
            tags: ['SIP', 'Javascript', 'REST APIs', 'CSS3', 'HTML5']
        }
    ];

    return (
        <section id="journey">
            <div className="container">
                <h2 className="section-title">My Journey</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index} 
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass">
                                <span className="timeline-date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <p>{exp.desc}</p>
                                <div className="tech-tags">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
