import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import project1Img from './1.jpg';
import project2Img from './2.jpg';
import project3Img from './3.jpeg';

const projects = [
  { 
    title: 'Flip', 
    description: 'Flip the Card Game', 
    link: 'https://expo.dev/artifacts/eas/jcGHuGCTN9yWkgntCrKqyj.apk',
    image: project1Img
  },
  { 
    title: 'Quizzer', 
    description: 'Quiz Game', 
    link: 'https://expo.dev/artifacts/eas/r68b75Bk7Drt2ko4YFTK2a.apk',
    image: project2Img
  },
  { 
    title: 'Music Player', 
    description: 'Music Player', 
    link: 'https://expo.dev/artifacts/eas/6soTDMuvjVfMDK9HzfaQeU.apk',
    image: project3Img
  },
];

function Appdeveloper() {
  return (
    <Container>
      <h2 className="text-center my-4">Mobile App Projects</h2>
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

export default Appdeveloper;
