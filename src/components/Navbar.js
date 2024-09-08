import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Navbar, Nav } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand as={Link} to="/">ShivamKoli</Navbar.Brand> {/* Link to the home page */}
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Update to use react-router-dom Link */}
          <Nav.Link as={Link} to="/about">About Me</Nav.Link> {/* Update to use react-router-dom Link */}
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link> {/* Update to use react-router-dom Link */}
          <Nav.Link as={Link} to="/certificates">Certificates</Nav.Link> {/* Update to use react-router-dom Link */}
        </Nav>
        <Nav>
          <Nav.Link href="https://www.instagram.com/shivamkoli.tech/" target="_blank"><FaInstagram /></Nav.Link>
          <Nav.Link href="https://x.com/DevOpsShivam" target="_blank"><FaTwitter /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><FaLinkedin /></Nav.Link>
          <Nav.Link href="https://github.com/shivam7053" target="_blank"><FaGithub /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="ml-auto">
        <Nav.Link href="#home" className="text-white" style={{marginRight:"20px"}}>|| Jai Mata Di ||</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
