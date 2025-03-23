// App.jsx
import React from "react";
import Avatar from "./Avatar";
import Chatbot from "./ChatBot";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Left Chat Section */}
      <div className="chat-section">
        <Chatbot />
      </div>

      {/* Right Avatar Section */}
      <div className="avatar-container">
        <Avatar />
      </div>
    </div>
  );
}

export default App;
