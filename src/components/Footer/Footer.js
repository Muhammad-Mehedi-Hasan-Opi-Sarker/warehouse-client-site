import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    
    return (
        <div className='footer'>
            <div>
                <h4>Information</h4>
                <p>About Warehouse</p>
                <Link className='text-decoration-none' style={{color:'white'}} to={'/blog'}>Our Blog</Link>
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