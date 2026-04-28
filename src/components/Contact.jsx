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
                    style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                required 
                                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                required 
                                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <textarea 
                                rows="5" 
                                placeholder="Your Message" 
                                required 
                                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff' }}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            disabled={isSubmitting}
                            style={{ 
                                width: '100%', 
                                background: status === 'Message Sent!' ? '#22c55e' : 'var(--accent-color)',
                                transition: 'all 0.3s ease'
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
