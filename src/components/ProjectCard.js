import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Card>
        <Card.Img variant="top" src={`${project.image}`} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Projects</a>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
