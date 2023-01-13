import React from 'react'
import '../App.css'
import About from './Service';

function Home(){

    return(
        <>
        <div className="Home">
            <div className="home-header">
            <h1>this is home page</h1>
            </div>
        </div>
        
        <About/>
        </>
    )
}

export default Home;