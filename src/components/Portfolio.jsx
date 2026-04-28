import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: 'Lumina Dashboard',
            desc: 'A high-performance analytics platform.',
            img: '/assets/project1.png'
        },
        {
            title: 'EcoSphere App',
            desc: 'Sustainability tracking for global brands.',
            img: '/assets/project2.png'
        },
        {
            title: 'Nexus AI',
            desc: 'Next-gen AI assistant interface.',
            img: '/assets/project3.png'
        },
        {
            title: 'Velox Pay',
            desc: 'Ultra-fast crypto payment gateway.',
            img: '/assets/project4.png'
        }
    ];

    return (
        <section id="portfolio">
            <div className="container">
                <h2 className="section-title">Portfolio</h2>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10, borderColor: 'var(--accent-color)' }}
                        >
                            <img src={project.img} alt={project.title} className="project-img" />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
