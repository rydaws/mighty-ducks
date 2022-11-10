import React from "react";
function About() {
  return (
    <section>
      <div className="aboutHeader">
        <div className="styleAbout">
          Welcome to Ticket Wizard, the only website you need to find the lowest
          price for any flight. Here at Ticket Wizard, we want the lowest prices
          to be easily accessible to people instead of having to look through
          multiple different websites to compare. Our team is made up of four
          students and we are excited to have Ticket Wizard as our first
          functional web app.
        </div>
        <div className="meetTeam">
          <p>Meet the Team</p>
        </div>
      </div>
      <div className="meetTeamInfo">
        <div className="imageBox">
          <img src="eavan.png" alt="imgEavan" />
        </div>
        <div className="imageBox">
          <img src="zach.png" alt="imgZach" />
        </div>

        <div className="imageBox">
          <img src="ryan.png" alt="imgRyan" />
        </div>

        <div className="imageBox">
          <img src="mason.png" alt="imgMason" />
        </div>
      </div>
      <div className="textBoxPosition">
        <div className="textbox">Eavan Feeney</div>
        <div className="textbox">Zach Weller</div>
        <div className="textbox">Ryan Dawson</div>
        <div className="textbox">Mason Digaudio</div>
      </div>
    </section>
  );
}
export default About;
