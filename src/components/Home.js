import React from 'react'
import '../Home.css'
import Aboutus from './Aboutus'

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
           
            </div>
        </div>
        <Aboutus />
        </>
    )
}

export default Home;