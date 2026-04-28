import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: 'Global Poker Heads Up',
            desc: 'Real-time multiplayer React Native poker application and custom game API backend.',
            img: '/assets/poker.png',
            link: 'https://play.google.com/store/apps/details?id=com.global.poker.headsup.online'
        },
        {
            title: 'Holiday Wholesale',
            desc: 'E-commerce platform for holiday and seasonal wholesale.',
            img: '/assets/holiday.png',
            link: 'https://holidaywholesale.in/'
        },
        {
            title: 'LiftMyTraffic',
            desc: 'A premium traffic growth and marketing analytics platform.',
            img: '/assets/traffic.png',
            link: 'https://liftmytraffic.com/'
        },
        {
            title: 'InvoiceMint Pro',
            desc: 'Sleek invoicing and billing management system.',
            img: '/assets/invoice.png',
            link: 'https://invoicemintpro.com/'
        },
        {
            title: 'New India Cooling',
            desc: 'Industrial cooling and HVAC service management portal.',
            img: '/assets/cooling.png',
            link: 'https://newindiacoolingsystem.com/'
        },

        {
            title: 'Contributor.company',
            desc: 'Corporate B2B platform for team collaboration and growth.',
            img: '/assets/contributor.png',
            link: 'https://contributor.company/'
        },
        {
            title: 'The Scented Bohemian',
            desc: 'Luxury fragrance and lifestyle e-commerce boutique.',
            img: '/assets/scented.png',
            link: 'https://thescentedbohemian.ca/'
        },
        {
            title: 'Travel By Kelly',
            desc: 'Bespoke travel agency and booking experience.',
            img: '/assets/travel.png',
            link: 'https://www.travelbykelly.ca/'
        }
    ];

    return (
        <section id="portfolio">
            <div className="container">
                <h2 className="section-title">Portfolio</h2>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10, borderColor: 'var(--accent-color)' }}
                            style={{ textDecoration: 'none', display: 'block' }}
                        >
                            <img src={project.img} alt={project.title} className="project-img" />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
