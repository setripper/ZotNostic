import React from 'react'
import { assets } from '../../assets/assets'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <img src = {assets.menu_icon} alt = ""/>\
            <div className='newChat'>
                <img src = {assets.plus_icon} alt = " "/>
                <p>New Diagnostic</p>
            </div>
        </div>

        <div className='bottom'>

        </div>
    </div>
  )
}

export default SideBar