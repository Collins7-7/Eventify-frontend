import React from 'react'
import '../App.css'
import Service from './Service';

function Home(){

    return(
        <>
        <div className="Home">
            <div className="home-header">
                <h1>Your own community for business events, tech events, and many more...</h1>
                <h2>Life is an event. Get started in minutes and experience the best now.</h2>

                <div className="link-btn">
                    <button type="button">Learn More</button>
                </div>
            </div>
        </div>
        
        {/* <Service/> */}
        </>
    )
}

export default Home;