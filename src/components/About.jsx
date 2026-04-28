import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '12', label: 'Industry Awards' }
    ];

    return (
        <section id="about">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    About Us
                </motion.h2>
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p>Driven by a passion for technical excellence and aesthetic precision, we specialize in delivering bespoke digital solutions. Our approach combines creative storytelling with cutting-edge technology to create products that not only work flawlessly but also leave a lasting impression.</p>
                        <p style={{ marginTop: '1rem' }}>Whether it's a complex enterprise dashboard or a minimalist brand showcase, we bring the same level of dedication and craftsmanship to every pixel.</p>
                    </motion.div>
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index} 
                                className="stat-card glass"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, borderColor: 'var(--accent-color)' }}
                            >
                                <span className="stat-number" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-color)', display: 'block' }}>{stat.number}</span>
                                <span className="stat-label" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
