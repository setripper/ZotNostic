import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './SideBar.css';

function SideBar({ prompts }) {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        <div className="new-diagnostic">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Diagnostic</p> : null}
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          {prompts.length > 0 ? (
            prompts.map((prompt, index) => (
              <div key={index} className="recent-entry">
                {extended ? <img src={assets.message_icon} alt="" /> : null}
                {}
                <p>{prompt.split(' ').slice(0, 3).join(' ')}...</p>
              </div>
            ))
          ) : (
            <p>No recent prompts</p>
          )}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;