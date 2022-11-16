import React from "react";
import Card from "react-bootstrap/Card"
import Placeholder from 'react-bootstrap/Placeholder'
import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

var origin = localStorage.getItem('_userOrigin');
var destination = localStorage.getItem('_userDestination');

const LowPrices = (props) => {
    <Card>
        <Card.Header>
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.favorite._id);
                }}
            >
                Unfavorite
            </button>
        </Card.Header>
        <Card.Title>
            {origin + '=>' + destination}
        </Card.Title>
        <Card.Body>

        </Card.Body>
    </Card>
};

// const monthlyPrices = (props) => {
//     <Card>
//         <Card.Header>
//         <button className="btn btn-link"
//         onClick={() => {
//           props.deleteRecord(props.favorite._id);
//         }}
//       >
//         Unfavorite
//       </button>
//         </Card.Header>
//         <Card.Title>
//             {origin + '=>' + destination}
//         </Card.Title>
//         <Card.Body>

//         </Card.Body>
//     </Card>
// };

function APIfetch() {
    var departure = []
    var airlineName = []
    var airlineCode = []
    var price = []
    var airline = []
    var priceAPI = []
    var departureDate = []
    var flight_number = []
    var monthlyDeparture = []
    var monthlyAirlineName = []
    var monthlyAirlineCode = []
    var monthlyFlight_Number = []
    var monthlyPrice = []
    var monthlyAirline = []
    var priceAPI = []
    var monthlyDepartureDate = []
    var flight_number = []
    var indexedMontlyTickets = []
    var website
    var monthlyWebsite
    var futureDate = new Date(2022, 12, 1).toISOString().slice(0, 10)
    var currDate = new Date()
    window.onload = function PriceAPIs() {

        


        const options = {
            method: 'GET',
            headers: {
                'X-Access-Token': '4eaf2071e912db689ea22d419dd5ecca',
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
        };

        fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=' + origin + '&page=None&currency=USD&destination=' + destination, options)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < 2; i++) {
                    priceAPI[i] = res.data[destination][i]
                    price[i] = priceAPI[i].price
                    airline[i] = priceAPI[i].airline
                    flight_number[i] = priceAPI[i].flight_number
                    departure[i] = priceAPI[i].departure_at
                    departureDate[i] = departure[i].substr(0, 10)
                    airlineCode[i] = airline[i].concat(flight_number[i])
                }
                console.log(priceAPI)
                AirportAPI()
                MonthAPI()
            }

            ).catch(err => console.error(err))
    }

    function MonthAPI() {
        const options = {
            method: 'GET',
            headers: {
                'X-Access-Token': '4eaf2071e912db689ea22d419dd5ecca',
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
        };

        fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/calendar?calendar_type=departure_date&destination=' + destination + '&origin=' + origin + '&depart_date=2020-11-18&currency=USD', options)
            .then(response => response.json())
            .then(response => {
                let dataAPI = Object.values(response.data)
                console.log(dataAPI)

                for (let i = 0; i < 15 ; i++) {
                    monthlyPrice[i] = dataAPI[i].price
                    monthlyDeparture[i] = dataAPI[i].departure_at
                    monthlyDepartureDate[i] = monthlyDeparture[i].substr(0, 10)
                    monthlyAirline[i] = dataAPI[i].airline
                    monthlyFlight_Number[i] = dataAPI[i].flight_number
                    monthlyAirlineCode[i] = monthlyAirline[i].concat(monthlyFlight_Number[i])

                }
                console.log(monthlyFlight_Number)
                console.log(monthlyPrice)

                DisplayMonthlyPrices()
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

        fetch('https://airport-info.p.rapidapi.com/airport?iata=' + origin, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                website = response.website
                console.log(website)

                DisplayMonthlyPrices()
                DisplayLowestAPI()
            })
            .catch(err => console.error(err));
    }

    async function createFavorite() {
        if (localStorage.getItem('loginState')) {
            const favorite = {
                favoritedBy: localStorage.getItem('user'),
                departingFrom: document.getElementById("origin").textContent,
                arrivingAt: document.getElementById("destination").textContent,
                airline: airlineName[0],
                price: price[0],

            }
            console.log(favorite.favoritedBy, favorite.airline, favorite.departingFrom, favorite.arrivingAt, favorite.price)

            // if(!checkData){
            await fetch("http://localhost:3000/Favorite/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(favorite),
            }).catch((error) => {
                window.alert(error);
                return;
            });
            //}
        } else {
            console.log("user not logged in")
        }
    }


    return (
        <>
            <h2>Found 2 Best Prices</h2>
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
                            <strong>{origin + ' -> ' + destination}</strong>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="website2">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>

            <br /><br />
            <Row>
                <h2>Other Tickets Found</h2>
                <Col>
                    <Card style={{
                        width: '18rem',
                        left: '10px'
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite2">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite3">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite4">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite5">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
            <Col>
                    <Card style={{
                        width: '18rem',
                        left: '10px'

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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite6">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite7">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite8">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite9">Loading...</ListGroup.Item>
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
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate10">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice10">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline10">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlywebsite10">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </>
    )

    async function DisplayLowestAPI() {
        document.getElementById("price").innerHTML = "Price: $" + price[0]
        document.getElementById("airline").innerHTML = "Airline Code: " + airlineCode[0]
        document.getElementById("departuredate").innerHTML = "Departure: " + departureDate[0]
        document.getElementById("website").innerHTML = "Website: " + website
        document.getElementById("price2").innerHTML = "Price: $" + price[1]
        document.getElementById("airline2").innerHTML = "Airline Code: " + airlineCode[1]
        document.getElementById("departuredate2").innerHTML = "Departure: " + departureDate[1]
        document.getElementById("website2").innerHTML = "Website: " + website
    }
    async function DisplayMonthlyPrices() {
        document.getElementById("monthlyprice").innerHTML = "Price: $" + monthlyPrice[1]
        document.getElementById("monthlyairline").innerHTML = "Airline Code: " + monthlyAirlineCode[1]
        document.getElementById("monthlydeparturedate").innerHTML = "Departure: " + monthlyDepartureDate[1]
        document.getElementById("monthlywebsite").innerHTML = "Website: " + website
        document.getElementById("monthlyprice2").innerHTML = "Price: $" + monthlyPrice[2]
        document.getElementById("monthlyairline2").innerHTML = "Airline Code: " + monthlyAirlineCode[2]
        document.getElementById("monthlydeparturedate2").innerHTML = "Departure: " + monthlyDepartureDate[2]
        document.getElementById("monthlywebsite2").innerHTML = "Website: " + website
        document.getElementById("monthlyprice3").innerHTML = "Price: $" + monthlyPrice[3]
        document.getElementById("monthlyairline3").innerHTML = "Airline Code: " + monthlyAirlineCode[3]
        document.getElementById("monthlydeparturedate3").innerHTML = "Departure: " + monthlyDepartureDate[3]
        document.getElementById("monthlywebsite3").innerHTML = "Website: " + website
        document.getElementById("monthlyprice4").innerHTML = "Price: $" + monthlyPrice[4]
        document.getElementById("monthlyairline4").innerHTML = "Airline Code: " + monthlyAirlineCode[4]
        document.getElementById("monthlydeparturedate4").innerHTML = "Departure: " + monthlyDepartureDate[4]
        document.getElementById("monthlywebsite4").innerHTML = "Website: " + website
        document.getElementById("monthlyprice5").innerHTML = "Price: $" + monthlyPrice[5]
        document.getElementById("monthlyairline5").innerHTML = "Airline Code: " + monthlyAirlineCode[5]
        document.getElementById("monthlydeparturedate5").innerHTML = "Departure: " + monthlyDepartureDate[5]
        document.getElementById("monthlywebsite5").innerHTML = "Website: " + website
        document.getElementById("monthlyprice6").innerHTML = "Price: $" + monthlyPrice[6]
        document.getElementById("monthlyairline6").innerHTML = "Airline Code: " + monthlyAirlineCode[6]
        document.getElementById("monthlydeparturedate6").innerHTML = "Departure: " + monthlyDepartureDate[6]
        document.getElementById("monthlywebsite6").innerHTML = "Website: " + website
        document.getElementById("monthlyprice7").innerHTML = "Price: $" + monthlyPrice[7]
        document.getElementById("monthlyairline7").innerHTML = "Airline Code: " + monthlyAirlineCode[7]
        document.getElementById("monthlydeparturedate7").innerHTML = "Departure: " + monthlyDepartureDate[7]
        document.getElementById("monthlywebsite7").innerHTML = "Website: " + website
        document.getElementById("monthlyprice8").innerHTML = "Price: $" + monthlyPrice[8]
        document.getElementById("monthlyairline8").innerHTML = "Airline Code: " + monthlyAirlineCode[8]
        document.getElementById("monthlydeparturedate8").innerHTML = "Departure: " + monthlyDepartureDate[8]
        document.getElementById("monthlywebsite8").innerHTML = "Website: " + website
        document.getElementById("monthlyprice9").innerHTML = "Price: $" + monthlyPrice[9]
        document.getElementById("monthlyairline9").innerHTML = "Airline Code: " + monthlyAirlineCode[9]
        document.getElementById("monthlydeparturedate9").innerHTML = "Departure: " + monthlyDepartureDate[9]
        document.getElementById("monthlywebsite9").innerHTML = "Website: " + website
        document.getElementById("monthlyprice10").innerHTML = "Price: $" + monthlyPrice[10]
        document.getElementById("monthlyairline10").innerHTML = "Airline Code: " + monthlyAirlineCode[10]
        document.getElementById("monthlydeparturedate10").innerHTML = "Departure: " + monthlyDepartureDate[10]
        document.getElementById("monthlywebsite10").innerHTML = "Website: " + website

    } 
}
export default APIfetch

