import React from "react";
import InputBar from '../components/searchBar'
import Calender from '../components/calendar'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Datepicker, setOpenPicker, openPicker } from "@mobiscroll/react"
import "@mobiscroll/react/dist/css/mobiscroll.min.css"


function Home() {
  console.log("At Home");

  return (
    <main>
      
        <Calender />

    </main>



    // <div className="home">
    //   <div className="wizard_div">
    //     <img
    //       className="wizLogo"
    //       src="wizard_logo.png"
    //       alt="Wizard Logo"
    //     ></img>
    //   </div>
    //   <div className="center">
    //     <label className="checkboxContainer">
    //       Oneway<input type="checkbox" />
    //       <span className="checkmark" />
    //     </label>
    //     <label className="checkboxContainer">
    //       Round-Trip<input type="checkbox" />
    //       <span className="checkmark" />
    //     </label>
    //     <InputBar />
    //     </div>


    //   </div>
  )
}


export default Home;
