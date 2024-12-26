import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import projectsBackground from '../assets/projects-background.jpg';




// Static project data
const projects = [
  {
    id: 1,
    name: 'Quiz',
    description: 'A Quiz Game',
    imageUrl:require('../components/projects/quiz.png') , // Use the imported image directly
    link: 'https://quiz-reactjs-shivam.netlify.app/',
  },
  {
    id: 2,
    name: 'ML Platform',
    description: 'A Platform to train machine learning models on your dataset',
    imageUrl: require('../components/projects/ml-platform.png'), // Dynamically require the image
    link: 'https://ml-platform-latest.onrender.com/',
  },
  {
    id: 3,
    name: 'Journal',
    description: 'A Journal App',
    imageUrl: require('../components/projects/journal.png'), // Dynamically require
    link: 'https://journal-mern-front.onrender.com/',
  },
  {
    id: 4,
    name: 'Maths Solver',
    description: 'A Maths Solver using custom nn model',
    imageUrl: require('../components/projects/maths.png'),
    link: 'https://maths-solver-1.onrender.com/',
  },
  {
    id: 5,
    name: 'Shivu Store',
    description: 'A simple Ecomm Website',
    imageUrl: require('../components/projects/shivustore.png'),
    link: 'https://shivustore.netlify.app/',
  },
  {
    id: 6,
    name: 'Portfolio-Nextjs',
    description: 'Portfolio using next.js',
    imageUrl: require('../components/projects/Port-Next.png'),
    link: 'https://shivamkoli108.netlify.app/',
  },
];


function Projects() {
  return (
    <section id="projects" className="min-vh-100 bg-light" style={{ backgroundImage: `url(${projectsBackground})`, paddingTop: '40px' }}>
      <Container>
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <Row>
          {projects.map(project => (
            <Col md={4} key={project.id} className="mb-4">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
