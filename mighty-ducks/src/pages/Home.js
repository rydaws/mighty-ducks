import React from "react";
import InputBar from '../components/searchBar'
function Home() {
  return (
    <div className="home">
      <div className="wizard_div">
        <img
          className="wizLogo"
          src="wizard_logo.png"
          alt="Wizard Logo"
        ></img>
      </div>
      <div className="center">
        <label className="checkboxContainer">
          Oneway<input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="checkboxContainer">
          Round-Trip<input type="checkbox" />
          <span className="checkmark" />
        </label>
        <InputBar />
        </div>
      </div>
   

  );
}


export default Home;
