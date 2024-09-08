import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import cert1 from '../certifcates/cert1.png';
import cert2 from '../certifcates/cert2.png';
import cert3 from '../certifcates/cert3.png';
import cert4 from '../certifcates/cert4.png';
import './certificates.css'; // Import the CSS file for card styles
import certback from '../assets/certificates-background.jpg'

const certificates = [
  { img: cert1, title: 'Certificate 1', description: 'Certification In Pytorch For AI' },
  { img: cert2, title: 'Certificate 2', description: 'Certification In Fine Tunning Of LLM' },
  { img: cert3, title: 'Certificate 3', description: 'Certification In Python And Flask' },
  { img: cert4, title: 'Certificate 4', description: 'Certification In Web Development And MERN Stack' },

];

function Certificates() {
  return (
    <section id="certificates" className="py-5" style={{backgroundImage:`url(${certback})`}}>
      <Container>
        <h2 className="text-center mb-4">Certificates</h2>
        <Row className="justify-content-center">
          {certificates.map((cert, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <motion.div
                className="cert-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <Card.Img variant="top" src={cert.img} />
                  <Card.Body>
                    <Card.Title>{cert.title}</Card.Title>
                    <Card.Text>{cert.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certificates;
