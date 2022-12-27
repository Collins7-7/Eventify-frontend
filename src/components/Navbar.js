import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {


    return(
        <>
        <nav>
            <h1>Eventify</h1>
        <div>
            <ul className="navbar">
                <Link to='/'><li>HOME</li></Link>
                <Link to='/categories'><li>CATEGORIES</li></Link>
                <Link to='/signup'><li>SIGNUP</li></Link>
                <Link to='/login'><li>LOGIN</li></Link>
            </ul>
        </div>
        </nav>
        </>
    )
}

export default Navbar;