import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card"

function CityBookings() {
    var city = localStorage.getItem('_cityChoice')
    console.log(city)
    var flight_number = []
    var airline = []
    var price = []
    var departure = []
    var departureDate = []
    var airlineCode = []
    var destination = []

    window.onload = function CityAPI() {
       
        const options = {
            method: 'GET',
            headers: {
                'X-Access-Token': '4eaf2071e912db689ea22d419dd5ecca',
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
        };

        fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?currency=USD&origin=' + city, options)
            .then(response => response.json())
            .then(response => {
                let dataAPI = Object.values(response.data)

                for (let i = 0; i < 15; i++) {
                    price[i] = dataAPI[i].price
                    departure[i] = dataAPI[i].departure_at
                    departureDate[i] = departure[i].substr(0, 10)
                    airline[i] = dataAPI[i].airline
                    flight_number[i] = dataAPI[i].flight_number
                    airlineCode[i] = airline[i].concat(flight_number[i])
                    destination[i] = dataAPI[i].destination
                }
                console.log(destination)
                AirportAPI()
            }
            )
            .catch(err => console.error(err));
    }
    function AirportAPI() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };

        fetch('https://airport-info.p.rapidapi.com/airport?iata=' + city, options)
            .then(response => response.json())
            .then(response => {
                renderAPI()
                console.log(response)
            })
            .catch(err => console.error(err));
    }


    return (
    <Row lg={2}>
            <Col lg={2}>
                    <Card style={{
                        width: '18rem',
                        left: '10px',

                    }}>
                        <Card.Header>
                            <button className="btn btn-link"
                                onClick={() => {
                                    // props.deleteRecord(props.favorite._id);
                                }}
                            >
                                Unfavorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                           <strong>{city + ' -> '}<span id="destination" /></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button className="btn btn-link"
                                onClick={() => {
                                    // props.deleteRecord(props.favorite._id);
                                }}
                            >
                                Unfavorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination2" /></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website2">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>

    )
    async function renderAPI() {
        document.getElementById("airline").innerHTML = airline[1]
        document.getElementById("destination").innerHTML = destination[0]
        document.getElementById("destination2").innerHTML = destination[1]
    }
}




export default CityBookings