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
        {/* Ensure the src matches the correct property */}
        <Card.Img variant="top" src={project.imageUrl} alt={project.name} />
        <Card.Body>
          {/* Use the correct property for the title */}
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
