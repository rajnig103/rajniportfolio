import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Creative Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
