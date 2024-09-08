import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import projectsBackground from '../assets/projects-background.jpg';
import webdev from '../projects/webdev.png'
import appdev from '../projects/appdev.png'
// import aidev from '../projects/aidev.webp'


// Static project data
const projects = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Projects in Web domain',
    image: webdev,
    link: '/web-project'
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Project in Mobile App domain',
    image: appdev,
    link: '/app-project'
  },
  // {
  //   id: 3,
  //   title: 'AI Development',
  //   description: 'Project in Artificial Intelligence',
  //   image: aidev,
  //   link: '/ai-project'
  // }
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
