import React from 'react'
import './Navbar.css'
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

function MiniNavbar() {
  return (
    <div className='mininav'>
      <div className='nav-message'>
        <h4>Need help? Talk to an Expert  <span> +254 7000023003 </span> </h4>
      </div>
      <div className='nav-icons'>
        <h3>Follow Us: </h3>
          <div className='fb'>
            <FaFacebook /> <span></span>
          </div>
          <div className="ln">
            <FaLinkedin /> <span></span>
          </div>
          <div className='tw'>
            <FaTwitter /> <span></span>
          </div>
      </div>
    </div>
  )
}

export default MiniNavbar