import React from "react";
import InputBar from '../components/searchBar'
import Calender from '../components/calendar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import 'react-multi-carousel/lib/styles.css';
import MultiCarousel from '../components/MultiCarousel'
import Carousel from "react-bootstrap/Carousel"

function Home() {
  console.log("At Home");

  return (
      <div className="background">
        <Card as="searchbarPosition">
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
            <h2>Best Prices By City</h2>
          </Row>

          <Row >
            <div>
              <MultiCarousel />
              </div>
          </Row>      
            

          <Row>
            <Col>
            <Carousel>
              <Carousel.Item>
                <img className="carouselPics" src="airplane.jpg" alt="Loading..."/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="carouselPics" src="stockairplane.jpg" alt="Loading" />
              </Carousel.Item>
            </Carousel>
            </Col>
          </Row>
          <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> 
          <Row>
            <h2>Meet The Team</h2>
            <Col>
            <Card style={{width: '10rem',
                          height: '10rem'
                          }}>
            <Card.Img className="teamPics" src="ryan.png" />
            </Card>
            </Col>
            <Col>
            <Card style={{width: '10rem'}}>
            <Card.Img className="teamPics" src="ryangithub.jpg" />
            </Card>
            </Col>
            <Col>
            <Card style={{width: '10rem'}}>
            <Card.Img className="teamPics" src="ryangithub.jpg" />
            </Card>
            </Col>
            <Col>
            <Card style={{width: '10rem'}}>
            <Card.Img className="teamPics" src="ryangithub.jpg" />
            </Card>
            </Col>
          </Row>
        </Container>
        <br /><br /><br />
      </div>

  )
}


export default Home;