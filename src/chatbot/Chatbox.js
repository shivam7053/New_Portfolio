import React from 'react';
import './Chatbox.css';

const Chatbox = ({ showChatbox, onClose }) => {
  const [messages, setMessages] = React.useState([
    { text: 'Hello! Welcome to my portfolio. What\'s your name?', type: 'bot' }
  ]);
  const [userInput, setUserInput] = React.useState('');
  const [userName, setUserName] = React.useState('');

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages];
    let response = '';

    if (userName === '') {
      setUserName(userInput);
      response = `Nice to meet you, ${userInput}! How can I assist you today? You can ask me about my certificates, about me, or my projects.`;
    } else {
      if (userInput.toLowerCase().includes('certificate' || 'certificates')) {
        response = 'You can check my certificates <a href="/certificates" target="_blank" rel="noopener noreferrer">here</a>.';
      } else if (userInput.toLowerCase().includes('about me' || 'about' || 'about you')) {
        response = 'Here\'s a bit about me <a href="/about" target="_blank" rel="noopener noreferrer">here</a>.';
      } else if (userInput.toLowerCase().includes('projects' || "project")) {
        response = 'This is my projects. You can check my projects <a href="/projects" target="_blank" rel="noopener noreferrer">here</a>. Which one would you like to know about?';
      } else {
        response = 'I\'m sorry, I didn\'t quite understand that. Can you ask about my certificates, about me, or my projects?';
      }
    }

    newMessages.push({ text: response, type: 'bot' });
    setMessages(newMessages);
    setUserInput('');
  };

  return (
    <div className={`chatbox ${showChatbox ? 'show' : ''}`}>
      <div className="chatbox-header">
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="chatbox-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`} dangerouslySetInnerHTML={{ __html: msg.text }} />
        ))}
      </div>
      <div className="chatbox-footer">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="message-input"
        />
        <button onClick={handleSend} className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
