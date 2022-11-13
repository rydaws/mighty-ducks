import React from "react";
import InputBar from '../components/searchBar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import 'react-multi-carousel/lib/styles.css';
import MultiCarousel from '../components/MultiCarousel'
import Carousel from "react-bootstrap/Carousel"
import MyCarousel from "../components/Carousel"
function Home() {
  console.log("At Home");

  return (
      <div className="background">
   
        <Card>
          <InputBar />
        </Card>
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
            <h2>Best Prices From City</h2>
          </Row>

          <Row >
            <div>
              <MultiCarousel />
              </div>
          </Row>      
          <br /><br /> <br /><br />  <br /><br /> <br /><br />  
          
          <Row>
            <h2>Meet The Team</h2>
            <Col>
            <img className="teamPics" src="ryan.png" />
            </Col>
            <Col>
            <img className="teamPics" src="eavan.png" />
            </Col>
            <Col>
            <img className="teamPics" src="mason.png" />
            </Col>
            <Col>
            <img className="teamPics" src="zach.png" />
            </Col>
          </Row>
          <Row>
            <Col><strong>Ryan Dawson</strong></Col>
            <Col><strong>Eavan Feeney</strong></Col>
            <Col><strong>Mason DiGaudio</strong></Col>
            <Col><strong>Zach Weller</strong></Col>
          </Row>
        </Container>
        <br /><br /><br />
 
      </div>

  )
}


export default Home;