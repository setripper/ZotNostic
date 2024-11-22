import React from 'react'
import './DiagnosePage.css'
import SideBar from '../sideBar/SideBar'
//import { Context } from '../../backend/Context'
//import send_icon from './send_icon.png'


const DiagnosePage = () => {

  //const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)


  return (
    <>
    <SideBar/>
    <div className='Diagnose'>
        <div className = "nav">
          <p>ZOTNostic</p>
        </div>

      <div className = "main-container">
        <div className = "greet">
          <p><span>Hello, NAMETOFILLIN </span></p>
          <p>How can I help you</p>
        </div>

        <div className = "cards">
          <div className="card">
            <p>Suggest healthy meal to eat while sick</p>
          </div>
          <div className="card">
            <p>Recommed me a nearby doctor to see</p>
          </div>
          <div className="card">
            <p>Suggest tips on how to recover quickly</p>
          </div>
          <div className="card">
            <p>Suggest a healthy meal to eat while sick</p>
          </div>
        </div>

      </div>

      <div className = "main-bottom">
        <div className="searchbox">
          <input type ="text" placeholder = "Enter your symptoms"></input>
          <div>
            
          </div>
        </div>

        <p className="bottom-info">
          Disclaimer tag about the information we type in
        </p>

      </div>







    </div> 
    </>
  )
}

export default DiagnosePage