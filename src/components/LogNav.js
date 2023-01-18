import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./LogNav.css";
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'


function LogNav({setStoredToken}) {

const [State, setState] = useState(false)

let navigate=useNavigate()
    return(
        <div className="lognav">
        <nav>
            
            <div className="nav-container">
            {/* <div className='logo'>
                <img src='https://www.48hourslogo.com/48hourslogo_data/2019/06/08/85529_1559924707.png' alt="logo" />
            </div> */}
            <div className='logo'>
                <img onClick ={()=> {navigate("/")}}/>
            </div>
        <div className="navbar">
            <ul className={State ? "nav-links-mobile" : "nav-links"} onClick={() => setState(false)}>
                {/* <Link to='/'><li>HOME</li></Link>
                <Link to='/categories'><li>CATEGORIES</li></Link>
                <Link to='/contact'><li>CONTACT US</li></Link>
                <Link to='/signup'><li>SIGNUP</li></Link>
                <Link to='/login'><li>LOGIN</li></Link> */}

              <p>
                <a href="/login" className="signupB">
                  Login
                </a>
              </p>
              <p>
                <a href="/signup" className="signupB">
                  Signup
                </a>
              </p>
              {/* <p>
                <a href="/signup" className="text">
                  SIGNUP
                </a>
              </p> */}
              

            </ul>
            
            <button className="mobile-menu-icon" onClick={() => setState(!State)}>
                    {State ? <ImCross /> : <FaBars />}
    
                </button>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default LogNav;