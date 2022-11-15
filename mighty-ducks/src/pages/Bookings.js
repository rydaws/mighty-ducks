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
    var website
    // const [priceData, setPriceData] = useState([])

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
                    departureDate[i] = departure[i].substr(0,10)   
                    airlineCode[i] = airline[i].concat(flight_number[i])               
                }
                console.log(priceAPI)
                AirportAPI()
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
                const months = Object.keys(response.data)
                console.log(response)
            })

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
            <Row lg = {2}>
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
            <Row>
                <h2>Other Tickets Found</h2>
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
}
export default APIfetch

