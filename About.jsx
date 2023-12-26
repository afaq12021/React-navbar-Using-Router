import React from "react"
import about from "./images/about.jpg"
import abt2 from "./images/abt2.jpg"

const About=()=>{
    return(
        <>
            <h1>About me:Software Engineer</h1>
            <img src={about} alt="h1" style={{height:"450px", width:"700px", marginLeft:"300px"}} />
            <img src={abt2} alt="h2" style={{height:"450px", width:"700px", marginLeft:"300px", marginTop:"20px"}} />
        </>
    );
}
export default About;