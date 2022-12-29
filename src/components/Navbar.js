import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'

function Navbar() {

const [State, setState] = useState(false)

    return(
        <>
        <nav>
            <h1 className="logo">Eventify</h1>
        <div>
            <ul className={State ? "nav-links-mobile" : "nav-links"} onClick={() => setState(false)}>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/categories'><li>CATEGORIES</li></Link>
                <Link to='/signup'><li>SIGNUP</li></Link>
                <Link to='/login'><li>LOGIN</li></Link>
            </ul>
            
            <button className="mobile-menu-icon" onClick={() => setState(!State)}>
                    {State ? <ImCross /> : <FaBars />}
    
                </button>
        </div>
        </nav>
        </>
    )
}

export default Navbar;