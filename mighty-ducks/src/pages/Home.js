import React from "react";
import InputBar from '../components/searchBar'
import Calender from '../components/calendar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"
import 'react-multi-carousel/lib/styles.css';
import MultiCarousel from '../components/MultiCarousel'

function Home() {
  console.log("At Home");

  return (
      <div className="background">
        <Card>
          <InputBar />
          <Calender />
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
            <h2>Best Prices By City</h2>
          </Row>

          <Row>
            <div>
              <MultiCarousel />
              </div>
          </Row>      
            <br /><br />
        </Container>
        <br />
      </div>

  )
}


export default Home;