import React from "react";

function Home() {
  console.log("At Home");
  return (
    <div className="home">
      <div className="wizard_div">
        <img
          className="wizLogo"
          src="wizard_logo.png"
          alt="Italian Trulli"
        ></img>
      </div>
      <div className="searchbars">
        <input type="text" placeholder="Departing from..."></input>
        <input type="text" placeholder="Arriving to..."></input>
      </div>

      <div className="datebars">
        <input type="text" placeholder="Departure date (MM/DD/YYYY)"></input>
        <input type="text" placeholder="Return date (MM/DD/YYYY)"></input>
      </div>
      <div className="buttonPosition">
        <button className="ticketsearch" type="button">
          Search
        </button>
      </div>
    </div>
  );
}
export default Home;
