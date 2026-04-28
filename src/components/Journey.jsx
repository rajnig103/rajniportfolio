import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    const experiences = [
        {
            date: '2023 - Present',
            title: 'Senior Full Stack Developer',
            desc: 'Leading the development of high-scale React applications and mentoring junior developers on design system implementations.',
            tags: ['Next.js', 'TypeScript', 'Node.js', 'AWS']
        },
        {
            date: '2021 - 2023',
            title: 'UI/UX Engineer',
            desc: 'Focused on bridging between design and code, implementing complex animations and micro-interactions for fintech platforms.',
            tags: ['React', 'Framer Motion', 'GSAP']
        },
        {
            date: '2019 - 2021',
            title: 'Frontend Developer',
            desc: 'Started my journey by building responsive web components and optimizing performance for e-commerce websites.',
            tags: ['HTML5', 'CSS3', 'JavaScript']
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
