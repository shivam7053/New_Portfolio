import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import project1Img from './3.png';


const projects = [
  { 
    title: 'Quiz', 
    description: 'Quiz Game', 
    link: 'https://quiz-reactjs-shivam.netlify.app/',
    image: project1Img
  },
];

function Webdeveloper() {
  return (
    <Container>
      <h2 className="text-center my-4">Web App Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} alt={`Image for ${project.title}`} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                  variant="primary" 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Webdeveloper;
