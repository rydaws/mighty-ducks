import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
    return (
        <Carousel fade>
              <Carousel.Item interval={5000}>
                <img className="carouselPics" src="AmericanAirline.jpg" alt="Loading..."/>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img className="carouselPics" src="UnitedAirlines.jpg" alt="Loading" />
              </Carousel.Item>
            </Carousel>
    )
}

export default MyCarousel