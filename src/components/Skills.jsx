import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'Node.js', level: '90%' },
        { name: 'Javascript', level: '95%' },
        { name: 'React Native', level: '90%' },
        { name: 'React.js', level: '90%' },
        { name: 'Next.js', level: '85%' },
        { name: 'Python', level: '80%' },
        { name: 'MongoDB', level: '85%' },
        { name: 'PostgreSQL', level: '80%' },
        { name: 'MySQL', level: '80%' },
        { name: 'Socket.io', level: '90%' },
        { name: 'Websocket', level: '90%' },
        { name: 'SIP', level: '75%' }
    ];

    const techIcons = [
        { name: 'Node.js', color: '#339933' },
        { name: 'Javascript', color: '#F7DF1E' },
        { name: 'React Native', color: '#61DAFB' },
        { name: 'React', color: '#61DAFB' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Python', color: '#3776AB' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'PostgreSQL', color: '#4169E1' },
        { name: 'MySQL', color: '#4479A1' },
        { name: 'Socket.io', color: '#010101' }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div className="skills-grid">
                    <motion.div 
                        className="skills-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/assets/skills.png" alt="Skills Illustration" />
                    </motion.div>
                    
                    <motion.div 
                        className="skills-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="skills-subtitle">Full Stack Development</h3>
                        <div className="tech-stack-icons">
                            {techIcons.map((icon, index) => (
                                <motion.div 
                                    key={index}
                                    className="tech-icon-wrapper"
                                    whileHover={{ scale: 1.2, color: icon.color }}
                                    title={icon.name}
                                >
                                    <span className="tech-icon-label">{icon.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <ul className="skills-list">
                            <li>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</li>
                            <li>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</li>
                            <li>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="proficiency-section">
                    <h2 className="section-title" style={{ marginTop: '4rem' }}>Proficiency</h2>
                    <div className="proficiency-grid">
                        {skills.slice(0, 8).map((skill, index) => (
                            <div key={index} className="proficiency-item">
                                <div className="proficiency-info">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}</span>
                                </div>
                                <div className="proficiency-bar-bg">
                                    <motion.div 
                                        className="proficiency-bar-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
