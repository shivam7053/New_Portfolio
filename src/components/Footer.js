import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa';
import collegeLogo from '../assets/college-logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-dark text-white py-2">
      <Container className="d-flex justify-content-between align-items-center">
        {/* College Logo */}
        <div className="footer-logo">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </div>

        {/* Footer Description */}
        <div className="footer-description">
          <p className="mb-0">&copy; 2024 ShivamKoli. All rights reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social d-flex">
          <a href="https://www.instagram.com/shivamkoli.tech/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram />
          </a>
          <a href="https://x.com/DevOpsShivam" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shivam7053" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaGithub />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
