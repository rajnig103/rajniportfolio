import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title">Hi all, I'm Rajni <span className="wave">👋</span></h1>
                    <p className="hero-subtitle">
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Node.js / React.js / Next.js / Python and some other cool libraries and frameworks.
                    </p>
                    
                    <div className="social-links">
                        <a href="#" className="social-icon github" title="Github">GitHub</a>
                        <a href="#" className="social-icon linkedin" title="LinkedIn">LinkedIn</a>
                        <a href="#" className="social-icon twitter" title="Twitter">Twitter</a>
                    </div>

                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Contact Me</a>
                        <a href="#" className="btn btn-secondary">Download My Resume</a>
                    </div>
                </motion.div>

                <motion.div 
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src="/assets/hero.png" alt="Hero Illustration" />
                </motion.div>
            </div>
            
            <motion.div 
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="mouse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
