

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { cibLeetcode } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import '../App.css'; // Import CSS for the footer styles

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anishabirla/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
          <a href="https://github.com/Anisha2123" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://leetcode.com/u/Anishatycon/" target="_blank" rel="noopener noreferrer">
            <CIcon icon={cibLeetcode} className="icon" />
          </a>
          <a href="https://wa.me/6307255290" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
        </div>
        <p className="footer-text">
          &copy; {currentYear} Anisha Birla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
