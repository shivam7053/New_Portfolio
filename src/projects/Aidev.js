import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', link: '#'},
  { title: 'Project 2', description: 'Description of Project 2', link: '#'},
  { title: 'Project 3', description: 'Description of Project 3', link: '#'}
];

function Aideveloper() {
  return (
    <Container>
      <h2 className="text-center my-4">Artificial Intelligence Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Aideveloper;
