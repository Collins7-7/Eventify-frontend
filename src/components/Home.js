import React from 'react'
import '../Home.css'

function Home({ setStoredToken }){

    return(
        <>
        <div className="hero">
            <div className="home-header">
            <h1>Your own community for business events, tech events, and many more...</h1>
                <h2>Life is an event. Get started in minutes and experience the best now.</h2>

                <div className="link-btn">
                    <button type="button">Learn More</button>
                </div>

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
        
        </>
    )
}

export default Home;