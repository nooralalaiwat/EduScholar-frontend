import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGooglePlusG, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3>EduScholar</h3>
      
      <p>Find scholarships and universities around the world.</p>

      <div className="social-icons">
        <a href="#" className="icon-link" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="icon-link" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" className="icon-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" className="icon-link" aria-label="Google Plus"><FaGooglePlusG /></a>
        <a href="#" className="icon-link" aria-label="WhatsApp"><FaWhatsapp /></a>
      </div>

      <div className="footer-bottom">
        <p>2026 EduScholar.</p>
      </div>
    </footer>
  );
}

export default Footer;