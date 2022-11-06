import React from "react";
import InputBar from '../components/searchBar'
import Calendar from 'react-calendar'
import { useState } from 'react'
function Home() {
  console.log("At Home");

  const show = () => {
    setOpenPicker(true);
  }

  const onClose = () => {
    setOpenPicker(false)
  }
  



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
        <div>
          <Datepicker
              controls={['calendar']}
              showOnClick={false}
              showOnFocus={false}
              isOpen={openPicker}
              onClose={onClose}
              touchUi={true}
              inputComponent="input"
              inputProps={props} />

              
        </div>
      </div>
   

  );
}


export default Home;
