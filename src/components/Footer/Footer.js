import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h4>Information</h4>
                <p>About me</p>
                <p>My Blog</p>
            </div>
            <div>
                <h4>Links</h4>
                <p>Services</p>
                <p>Facebook</p>
                <p>Instragram</p>
                <p>Privacy</p>
            </div>
            <div>
                <p>@ copy right</p>
            </div>
        </div>
    );
};

export default Footer;