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
    var website

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
                website = response.website
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
                           <strong>{city + ' -> '}<span id="destination0"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate0">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price0">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline0">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website0">Loading...</ListGroup.Item>
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
                            <strong>{city + ' -> '} <span id="destination1"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate1">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price1">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline1">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website1">Loading...</ListGroup.Item>
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
                            <strong>{city + ' -> '} <span id="destination2"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website2">Loading...</ListGroup.Item>
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
                            <strong>{city + ' -> '} <span id="destination3"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website3">Loading...</ListGroup.Item>
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
                            <strong>{city + ' -> '} <span id="destination4"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website4">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>
    )
    async function renderAPI() {
        document.getElementById("destination0").innerHTML = destination[0]
        document.getElementById("departuredate0").innerHTML = "Departure: " + departureDate[0]
        document.getElementById("price0").innerHTML = "Price: $" + price[0]
        document.getElementById("airline0").innerHTML = "Airline Code: " + airlineCode[0]
        document.getElementById("website0").innerHTML = "Website: " + website
        document.getElementById("destination1").innerHTML = destination[1]
        document.getElementById("departuredate1").innerHTML = "Departure: " + departureDate[1]
        document.getElementById("price1").innerHTML = "Price: $" + price[1]
        document.getElementById("airline1").innerHTML = "Airline Code: " + airlineCode[1]
        document.getElementById("website1").innerHTML = "Website: " + website
        document.getElementById("destination2").innerHTML = destination[2]
        document.getElementById("departuredate2").innerHTML = "Departure: " + departureDate[2]
        document.getElementById("price2").innerHTML = "Price: $" + price[2]
        document.getElementById("airline2").innerHTML = "Airline Code: " + airlineCode[2]
        document.getElementById("website2").innerHTML = "Website: " + website
        document.getElementById("destination3").innerHTML = destination[3]
        document.getElementById("departuredate3").innerHTML = "Departure: " + departureDate[3]
        document.getElementById("price3").innerHTML = "Price: $" + price[3]
        document.getElementById("airline3").innerHTML = "Airline Code: " + airlineCode[3]
        document.getElementById("website3").innerHTML = "Website: " + website
        document.getElementById("destination4").innerHTML = destination[4]
        document.getElementById("departuredate4").innerHTML = "Departure: " + departureDate[4]
        document.getElementById("price4").innerHTML = "Price: $" + price[4]
        document.getElementById("airline4").innerHTML = "Airline Code: " + airlineCode[4]
        document.getElementById("website4").innerHTML = "Website: " + website
    }
}




export default CityBookings