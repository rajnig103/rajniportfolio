import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('Send Message');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');

        setTimeout(() => {
            setStatus('Message Sent!');
            setIsSubmitting(false);
            e.target.reset();
            
            setTimeout(() => {
                setStatus('Send Message');
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <motion.div 
                    className="contact-container glass" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                rows="5" 
                                placeholder="Your Message" 
                                required 
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            disabled={isSubmitting}
                            style={{ 
                                background: status === 'Message Sent!' ? '#22c55e' : 'var(--accent-color)',
                                width: '100%'
                            }}
                        >
                            {status}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
