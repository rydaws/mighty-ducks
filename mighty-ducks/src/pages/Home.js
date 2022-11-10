import React from "react";
import InputBar from '../components/searchBar'
import Calender from '../components/calendar'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";

function Home() {
  console.log("At Home");

  return (
    <body>
      <div className="container">

        <div className="h-100 w-100 d-inline-block shadow-lg p-3 ">
          <Container>
            <Row>
              <Col>
                <img
                  className="centerLogo"
                  src="wizard_logo.png"
                  alt="Wizard Logo"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: '60rem', bottom: '15rem' }}>
                  <div className="homepageSearchbar">
                  <Calender />
                  </div>
                  <div className="homepageCalendar">
                    <InputBar />
                  </div>

                </Card >
              </Col>
            </Row>
          </Container>

        </div>

      </div>

    </body>

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
