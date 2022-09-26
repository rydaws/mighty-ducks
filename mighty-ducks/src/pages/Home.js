import React from "react";
import Bookings from "./Bookings";
import {Routes} from 'react-router-dom';
function Home() {
  console.log("At Home");
  return (
    <div className="home">
      <div className="wizard_div">
        <img
          className="wizLogo"
          src="wizard_logo.png"
          alt="Wizard Logo"
        ></img>
      </div>
      <div className="extrabuttons">
        <button className="roundtrip" type="button">
          Round-Trip
        </button>
        <button className="oneway" type="button">
          Oneway
        </button>
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
        <a href="Bookings">
        <button className="ticketsearch" type="button">
          Search
        </button>
        </a>
      </div>
    </div>
  );
}
export default Home;
