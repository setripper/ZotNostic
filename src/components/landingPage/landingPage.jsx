import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    

    <div className='LandingPage'>

        <div className='leftSide'>
            
            <div className='leftTop'>
              <h1 className="typing-effect">
              <span>Z</span>
              <span>O</span>
              <span>T</span>
              <span>N</span>
              <span>o</span>
              <span>s</span>
              <span>t</span>
              <span>i</span>
              <span>c</span>
              <span>.</span>
            </h1>
        </div>
            <div className='leftBottom'>
                <h3 className = 'fadeUp'>ZOTNostic is a simple, user-friendly tool designed to help individuals identify potential illnesses based on their symptoms. By leveraging manually curated symptom-diagnosis mappings, the app provides users with a list of potential conditions and an estimated accuracy percentage based on available data.
                  The goal of this application is to empower users with preliminary health insights. However, it is important to note that the app is not a substitute for professional medical advice.</h3>
            </div>

        </div>

        <div className='rightSide'>

            <div className='rightTop'>
              <h1 className = 'fadeDown'>Get Started</h1>
            </div>

            <div className='rightBottom'>
              <ul className = 'fadeUp'>
                <li><a href = "/diagnose">Diagnose</a></li>
                <li><a href = "/">About Us</a></li>
              </ul>
            </div>

        </div>

    </div>

    


  )
}

export default LandingPage