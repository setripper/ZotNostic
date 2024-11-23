import React, { useState } from 'react';
import './DiagnosePage.css';
import SideBar from '../sideBar/SideBar';

import call_gemini from '../../backend/GeminiApi'



const DiagnosePage = () => {
  const [prompts, setPrompts] = useState([]); 
  const [currentInput, setCurrentInput] = useState(''); 
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    if (currentInput.trim()) {
      setPrompts((prevPrompts) => [currentInput.trim(), ...prevPrompts]);
      setCurrentInput(''); 

      const result = await call_gemini(currentInput);
      setResponse(result);
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
              <p>Enter the symptoms that you are expierencing</p>
            </div>
          </div>
        </div>

        {response && (
          <div className="response-box">
            <p><strong>Response:</strong> {response}</p>
          </div>
        )}

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
            it is important to note that ZOTNostic is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </>
  );
};

export default DiagnosePage;