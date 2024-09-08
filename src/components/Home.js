import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {ReactTyped} from 'react-typed'; // Correct import for ReactTyped
import profilePic from '../assets/profile.jpg'; // Replace with your image
import homeBackground from '../assets/home-background.jpg';
import tech1 from '../technology/tech1.png'; // Replace with your technology images
import tech2 from '../technology/tech2.png'; // Replace with your technology images
import tech3 from '../technology/tech3.png'; // Replace with your technology images
import tech4 from '../technology/tech4.png';



function Home() {
  return (
    <section id="home" className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-primary text-white" style={{ backgroundImage: `url(${homeBackground})` }}>
      <Container>
        <motion.img 
          src={profilePic} 
          alt="Profile" 
          className="img-fluid rounded-circle mb-4" 
          style={{ width: '150px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Hey I am ShivamKoli
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <ReactTyped
            strings={[
              "ML Researcher",
              "Web Developer",
              "App Developer"
            ]}
            typeSpeed={50} // Speed of typing
            backSpeed={30} // Speed of backspacing
            backDelay={1000} // Delay before starting to backspace
            startDelay={500} // Delay before starting typing
            loop={true} // Loop the typing effect
            className="typed-text" // Add a className for styling if needed
          />
        </motion.p>
        <a href="/1.pdf" className="btn btn-light" download>Download Resume</a>
      </Container>

      {/* Technology Section */}
      <section id="technologies" className="mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={3} md={2} className="d-flex justify-content-center mb-3">
              <motion.div
                className="tech-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={tech1}
                  alt="Tech 1"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </motion.div>
            </Col>
            <Col xs={3} md={2} className="d-flex justify-content-center mb-3">
              <motion.div
                className="tech-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={tech2}
                  alt="Tech 2"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </motion.div>
            </Col>
            <Col xs={3} md={2} className="d-flex justify-content-center mb-3">
              <motion.div
                className="tech-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={tech3}
                  alt="Tech 3"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </motion.div>
            </Col>
            <Col xs={3} md={3} className="d-flex justify-content-center mb-3">
              <motion.div
                className="tech-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={tech4}
                  alt="Tech 4"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default Home;
