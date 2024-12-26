import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure you have styles to set sections full height

import NavigationBar from '../src/components/Navbar.js';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import Projects from '../src/components/Projects.js';
import Footer from '../src/components/Footer.js';
import Certificates from './components/certificates.js'; // Ensure correct case
import Chatbox from './chatbot/Chatbox.js';
import ChatIcon from './chatbot/ChatIcon.js';



function App() {
  const [showChatbox, setShowChatbox] = useState(false);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
      <Chatbox showChatbox={showChatbox} onClose={() => setShowChatbox(false)} />
      <ChatIcon onClick={() => setShowChatbox(true)} />
    </Router>
  );
}

export default App;
