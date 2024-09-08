// src/ChatIcon.js
import React from 'react';
import './ChatIcon.css'; // Ensure you create this CSS file
import chaticon from "./chaticon.png"

const ChatIcon = ({ onClick }) => {
  return (
    <div className="chat-icon" onClick={onClick}>
      <img src={chaticon} alt="Chat Icon" /> {/* Use your chat icon image here */}
    </div>
  );
};

export default ChatIcon;
