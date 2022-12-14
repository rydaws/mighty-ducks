import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card'
import React from 'react';
import { useNavigate } from "react-router";

function multiCarousel() {
  var cityChoice

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  function handleButton(val) {

    if (val === undefined) {
      console.log("ERROR");
    } else if (val === "Atlanta") {
      cityChoice = "ATL"
      console.log(cityChoice)
      localStorage.setItem('_cityChoice', cityChoice);
      window.location.href = "/CityBookings"
    } else if (val === "NewYork") {
      cityChoice = "JFK"
      console.log(cityChoice)
      localStorage.setItem('_cityChoice', cityChoice);
      window.location.href = "/CityBookings"
    }else if (val === "LosAngeles") {
      cityChoice = "LAX"
      console.log(cityChoice)
      localStorage.setItem('_cityChoice', cityChoice);
      window.location.href = "/CityBookings"
    }else if (val === "Chicago") {
      cityChoice = "ORD"
      console.log(cityChoice)
      localStorage.setItem('_cityChoice', cityChoice);
      window.location.href = "/CityBookings"
    }else if (val === "Florida") {
      cityChoice = "MIA"
      console.log(cityChoice)
      localStorage.setItem('_cityChoice', cityChoice);
      window.location.href = "/CityBookings"
    }
  }



  return (
      
        <Carousel
            responsive={responsive}
            infinite={true}
        >
            <div className='carouselButton' value="Atlanta" onClick={() => handleButton('Atlanta')}>
             <Card style={{
                  width: '18rem'
                }}>
                  <Card.Img className="city" src="Atlanta.jpg" />
                  <Card.ImgOverlay>
                    <Card.Title><p>Atlanta</p></Card.Title>
                  </Card.ImgOverlay>
                </Card>
                </div>
                <div className='carouselButton' value="NewYork" onClick={() => handleButton('NewYork')}>
              <Card style={{
                width: '18rem',
              }}> 
                <Card.Img className="city"  src="New York.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>New York</p></Card.Title>
                </Card.ImgOverlay>
              </Card>
              </div>
              <div className='carouselButton' value="LosAngeles" onClick={() => handleButton('LosAngeles')}>
              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" src="Los Angeles.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>Los Angeles</p></Card.Title>
                </Card.ImgOverlay>
              </Card>
              </div>
              <div className='carouselButton' value="Chicago" onClick={() => handleButton('Chicago')}>
              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" src="Chicago.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>Chicago</p></Card.Title>
                </Card.ImgOverlay>
              </Card>
              </div>
              <div className='carouselButton' value="Florida" onClick={() => handleButton('Florida')}>
              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" src="Florida.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>Florida</p></Card.Title>
                </Card.ImgOverlay>
              </Card>
              </div>
        </Carousel >
    )

}
export default multiCarousel