import React from 'react'
import "./Navbar.css"

function Navbar() {
    return(
        <>
        <nav>
            <h1>Eventify</h1>

        <div>
            <ul id="navbar">
                <li><a href ="index.html">Home</a></li>
                <li><a href ="index.html">Category</a></li>
                <li><a href ="index.html">Signup</a></li>
                <li><a href ="index.html">Login</a></li>

            </ul>
        </div>
        </nav>
        </>
    )
}

export default Navbar;