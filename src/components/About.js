import React from 'react';
import { Container } from 'react-bootstrap';
import aboutPic from '../assets/about.jpg'; // Replace with your image
import { motion } from 'framer-motion';
import collegeLogo from '../assets/college-logo.png';
import aboutBackground from '../assets/about-background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className="d-flex flex-column align-items-center text-center min-vh-100 bg-light" style={{ backgroundImage: `url(${aboutBackground})`, paddingTop: '40px' }}>
      <Container>
        <motion.img 
          src={aboutPic} 
          alt="About" 
          className="img-fluid rounded-circle mb-4" 
          style={{ width: '150px' }}
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        />
        <motion.img 
          src={collegeLogo} 
          alt="About" 
          className="img-fluid rounded-circle mb-4" 
          style={{ width: '150px',marginInline:'20px' }}
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        />
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Hey I am ShivamKoli
        </motion.h2>
        <motion.h5 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          MAIT (ipu) 2025 , A MERN stack , React Navite , Flask Developer And A Machine Learning Researcher
        </motion.h5>
        <motion.h5 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
         <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
           shivamkoli7053@gmail.com
        </motion.h5>
      </Container>
    </section>
  );
}

export default About;
