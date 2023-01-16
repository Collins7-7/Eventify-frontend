import React from 'react'
import '../App.css'
import About from './Service';

function Home({ setStoredToken }){

    return(
        <>
        <div className="Home">
            <div className="home-header">
            <h1>You will see this page when logged in, is home page</h1>
            <button
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}
      >
        Log out
      </button>
            </div>
        </div>
        
        <About/>
        </>
    )
}

export default Home;