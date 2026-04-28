import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'journey', 'portfolio', 'contact'];
            let current = 'home';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.pageYOffset >= element.offsetTop - 300) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Journey', href: '#journey' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="navbar">
            <div className="nav-pill">
                {navLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href}
                        className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
