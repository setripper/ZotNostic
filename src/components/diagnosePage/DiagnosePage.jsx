import React, { useState } from 'react';
import './DiagnosePage.css';
import SideBar from '../sideBar/SideBar';

const DiagnosePage = () => {
  const [prompts, setPrompts] = useState([]); 
  const [currentInput, setCurrentInput] = useState(''); 

  const handleSubmit = () => {
    if (currentInput.trim()) {
      setPrompts((prevPrompts) => [currentInput.trim(), ...prevPrompts]);
      setCurrentInput(''); 
    }
  };

  return (
    <>
      {/* Pass prompts to SideBar */}
      <SideBar prompts={prompts} />
      <div className="Diagnose">
        <div className="nav">
          <p>ZOTNostic</p>
        </div>

        <div className="main-container">
          <div className="greet">
            <p><span>Hello, User.</span></p>
            <p>How can I help you</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Suggest healthy meal to eat while sick</p>
            </div>
            <div className="card">
              <p>Recommend me a nearby doctor to see</p>
            </div>
            <div className="card">
              <p>Suggest tips on how to recover quickly</p>
            </div>
            <div className="card">
              <p>Suggest a healthy meal to eat while sick</p>
            </div>
          </div>
        </div>

        <div className="main-bottom">
          <div className="searchbox">
            <input
              type="text"
              placeholder="Enter your symptoms"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSubmit();
              }}
            />
            <button onClick={handleSubmit}>Send</button>
          </div>

          <p className="bottom-info">
            Disclaimer tag about the information we type in
          </p>
        </div>
      </div>
    </>
  );
};

export default DiagnosePage;