import React from 'react'
import './DiagnosePage.css'
import SideBar from '../sideBar/SideBar'
//import { Context } from '../../backend/Context'


const DiagnosePage = () => {

  //const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)


  return (
    <div className='Diagnose'> 
        <SideBar/>
    </div>
  )
}

export default DiagnosePage