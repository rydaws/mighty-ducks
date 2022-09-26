import React from "react"

function About() {
    return (
        <section>
            <div className ="styleAbout">
                Welcome to Ticket Wizard, the only website you need to find the lowest price for any flight. Here at Ticket Wizard, we want the lowest prices to be 
                easily accessible to people instead of having to look through multiple different websites to compare. Our team is made up of four students and we are excited to have Ticket
                Wizard as our first functional web app.  
            </div>
            <div className="aboutHead">
                <p>Meet the Team</p>
            </div>
            <div className="imageBox">
                <img src="eavan.png" alt="imgEavan"/>
                    
            </div>
            <div className="textbox">
                Eavan Feeney
            </div>
            <div className="imageBox2">
                <img src="zach.png" alt="imgZach"/>
                    
            </div>
            <div className="textbox2">
                Zach Weller
            </div>
            <div className="imageBox3">
                <img src="ryan.png" alt="imgRyan"/>
                    
            </div>
            <div className="textbox3">
                Ryan Dawson
            </div>
            <div className="imageBox4">
                <img src="mason.png" alt="imgMason"/>
                    
            </div>
            <div className="textbox4">
                Mason Digaudio
            </div>
            
            
        </section>
    )
}

export default About