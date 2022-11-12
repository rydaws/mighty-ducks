import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card'
import { Rerousel } from 'rerousel'
import React from 'react';

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
            }else if (val == "Atlanta") {

                window.location("/CityBookings")
            }
            console.log(val)
        }



    return (
      
        <Carousel
            responsive={responsive}
            infinite={true}

        >
            <button className='carouselButton' value="Atlanta" onClick={() => handleButton('Atlanta')}>
             <Card style={{
                  width: '18rem',
                }}>
                  <Card.Img className="city" src="Atlanta.jpg" />
                  <Card.ImgOverlay>
                    <Card.Title><p>Atlanta</p></Card.Title>
                  </Card.ImgOverlay>
                </Card>
                </button>
              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" variant="bottom" src="New York.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>New York</p></Card.Title>
                </Card.ImgOverlay>
              </Card>

              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" variant="bottom" src="Los Angeles.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>Los Angeles</p></Card.Title>
                </Card.ImgOverlay>
              </Card>

              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" variant="bottom" src="Chicago.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>Chicago</p></Card.Title>
                </Card.ImgOverlay>
              </Card>

              <Card style={{
                width: '18rem',
              }}>
                <Card.Img className="city" variant="bottom" src="Florida.jpg" />
                <Card.ImgOverlay>
                  <Card.Title><p>Florida</p></Card.Title>
                </Card.ImgOverlay>
              </Card>
        </Carousel>
     




        // <div className='gap'>
        //     <Rerousel interval={1000}>
        //         <Card style={{
        //           width: '18rem',
        //           gap: '10px'
        //         }}>
        //           <Card.Img className="city" variant="bottom" src="Atlanta.jpg" />
        //           <Card.ImgOverlay>
        //             <Card.Title><p>Atlanta</p></Card.Title>
        //           </Card.ImgOverlay>
        //         </Card>

        //       <Card style={{
        //         width: '18rem',
        //       }}>
        //         <Card.Img className="city" variant="bottom" src="New York.jpg" />
        //         <Card.ImgOverlay>
        //           <Card.Title><p>New York</p></Card.Title>
        //         </Card.ImgOverlay>
        //       </Card>

        //       <Card style={{
        //         width: '18rem',
        //       }}>
        //         <Card.Img className="city" variant="bottom" src="Los Angeles.jpg" />
        //         <Card.ImgOverlay>
        //           <Card.Title><p>Los Angeles</p></Card.Title>
        //         </Card.ImgOverlay>
        //       </Card>

        //       <Card style={{
        //         width: '18rem',
        //       }}>
        //         <Card.Img className="city" variant="bottom" src="Chicago.jpg" />
        //         <Card.ImgOverlay>
        //           <Card.Title><p>Chicago</p></Card.Title>
        //         </Card.ImgOverlay>
        //       </Card>
        //     </Rerousel>
            // </div>
    )
}
export default multiCarousel