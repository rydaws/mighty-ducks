import React from "react";
import Card from "react-bootstrap/Card"
import Placeholder from 'react-bootstrap/Placeholder'
import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function APIfetch() {
    var departure = []
    var airlineCode = []
    var price = []
    var airline = []
    var priceAPI = []
    var departureDate = []
    var flight_number = []
    var expire = []
    var monthlyDeparture = []
    var monthlyAirlineName = []
    var monthlyAirlineCode = []
    var monthlyFlight_Number = []
    var monthlyPrice = []
    var monthlyAirline = []
    var priceAPI = []
    var monthlyDepartureDate = []
    var flight_number = []
    var expireDate = []
    var monthlyExpire = []
    var monthlyExpireDate = []
    var website

    var origin = localStorage.getItem('_userOrigin').toUpperCase();
    var destination = localStorage.getItem('_userDestination').toUpperCase();
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
                    expireDate[i] = priceAPI[i].expires_at
                    expire[i] = expireDate[i].substr(0, 10)
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
                    monthlyExpireDate[i] = dataAPI[i].expires_at
                    monthlyExpire[i] = monthlyExpireDate[i].substr(0, 10)

                }
                console.log(monthlyExpire)

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

    async function createFavorite(price,airlineCode,departureDate,id) {
        if (localStorage.getItem('loginState')) {
            const favorite = {
                favoritedBy: localStorage.getItem('user'),
                departingFrom: origin,
                arrivingAt: destination,
                airline: airlineCode,
                price: price,
                departure:departureDate
            }
            if(document.getElementById(id).innerHTML=="Favorited"){
                window.alert("flight already favorited")
            }else{
                document.getElementById(id).innerHTML="Favorited"
                console.log(favorite.favoritedBy, favorite.departingFrom, favorite.arrivingAt,favorite.airline, favorite.price,favorite.departure)
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
            }
        } else {
            console.log("user not logged in")
        }
    }


    return (
        <>
        <a id="website">Link to Website</a>
            <h2>Found 2 Best Prices</h2>
            <Row lg={2}>
                <Col lg={2}>
                    <Card style={{
                        width: '18rem',
                        left: '10px',

                    }}>
                        <Card.Header>
                            <button id="low1"
                                onClick={() => {
                                    createFavorite(price[0],airlineCode[0],departureDate[0],"low1")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire1">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="low2"
                                onClick={() => {
                                    createFavorite(price[1],airlineCode[1],departureDate[1],"low2")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire2">Loading...</ListGroup.Item>
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
                            <button id="fav1"
                                onClick={() => {
                                    createFavorite(monthlyPrice[1],monthlyAirlineCode[1],monthlyDepartureDate[1],"fav1")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire1">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav2"
                                onClick={() => {
                                    createFavorite(monthlyPrice[2],monthlyAirlineCode[2],monthlyDepartureDate[2],"fav2")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire2">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav3"
                                onClick={() => {
                                    createFavorite(monthlyPrice[3],monthlyAirlineCode[3],monthlyDepartureDate[3],"fav3")
                                   
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire3">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav4"
                                onClick={() => {
                                    createFavorite(monthlyPrice[4],monthlyAirlineCode[4],monthlyDepartureDate[4],"fav4")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire4">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav5"
                                onClick={() => {
                                    createFavorite(monthlyPrice[5],monthlyAirlineCode[5],monthlyDepartureDate[5],"fav5")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire5">Loading...</ListGroup.Item>
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
                            <button id="fav6"
                                onClick={() => {
                                    createFavorite(monthlyPrice[6],monthlyAirlineCode[6],monthlyDepartureDate[5],"fav6")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire6">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav7"
                                onClick={() => {
                                    createFavorite(monthlyPrice[7],monthlyAirlineCode[7],monthlyDepartureDate[7],"fav7")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire7">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav8"
                                onClick={() => {
                                    createFavorite(monthlyPrice[8],monthlyAirlineCode[8],monthlyDepartureDate[8],"fav8")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire8">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav9"
                                onClick={() => {
                                    createFavorite(monthlyPrice[9],monthlyAirlineCode[9],monthlyDepartureDate[9],"fav9")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire9">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav10"
                                onClick={() => {
                                    createFavorite(monthlyPrice[10],monthlyAirlineCode[10],monthlyDepartureDate[10],"fav10")
                                    
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{origin + ' -> ' + destination}</strong>
                        </Card.Title>
                        <ListGroup.Item id="monthlydeparturedate10">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyprice10">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyairline10">Loading...</ListGroup.Item>
                        <ListGroup.Item id="monthlyexpire10">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </>
    )

    async function DisplayLowestAPI() {
        document.getElementById("price").innerHTML = "Price: $" + price[0]
        document.getElementById("airline").innerHTML = "Airline Code: " + airlineCode[0]
        document.getElementById("departuredate").innerHTML = "Departure: " + departureDate[0]
        document.getElementById("expire1").innerHTML = "Price Changes: " + expire[0]
        document.getElementById("price2").innerHTML = "Price: $" + price[1]
        document.getElementById("airline2").innerHTML = "Airline Code: " + airlineCode[1]
        document.getElementById("departuredate2").innerHTML = "Departure: " + departureDate[1]
        document.getElementById("expire2").innerHTML = "Price Changes: " + expire[1]
        document.getElementById("website").setAttribute("href", website)
    }
    async function DisplayMonthlyPrices() {
        document.getElementById("monthlyprice").innerHTML = "Price: $" + monthlyPrice[1]
        document.getElementById("monthlyairline").innerHTML = "Airline Code: " + monthlyAirlineCode[1]
        document.getElementById("monthlydeparturedate").innerHTML = "Departure: " + monthlyDepartureDate[1]
        document.getElementById("monthlyexpire1").innerHTML = "Price Changes: " + monthlyExpire[1]
        document.getElementById("monthlyprice2").innerHTML = "Price: $" + monthlyPrice[2]
        document.getElementById("monthlyairline2").innerHTML = "Airline Code: " + monthlyAirlineCode[2]
        document.getElementById("monthlydeparturedate2").innerHTML = "Departure: " + monthlyDepartureDate[2]
        document.getElementById("monthlyexpire2").innerHTML = "Price Changes: " + monthlyExpire[2]
        document.getElementById("monthlyprice3").innerHTML = "Price: $" + monthlyPrice[3]
        document.getElementById("monthlyairline3").innerHTML = "Airline Code: " + monthlyAirlineCode[3]
        document.getElementById("monthlydeparturedate3").innerHTML = "Departure: " + monthlyDepartureDate[3]
        document.getElementById("monthlyexpire3").innerHTML = "Price Changes: " + monthlyExpire[3]
        document.getElementById("monthlyprice4").innerHTML = "Price: $" + monthlyPrice[4]
        document.getElementById("monthlyairline4").innerHTML = "Airline Code: " + monthlyAirlineCode[4]
        document.getElementById("monthlydeparturedate4").innerHTML = "Departure: " + monthlyDepartureDate[4]
        document.getElementById("monthlyexpire4").innerHTML = "Price Changes: " + monthlyExpire[4]
        document.getElementById("monthlyprice5").innerHTML = "Price: $" + monthlyPrice[5]
        document.getElementById("monthlyairline5").innerHTML = "Airline Code: " + monthlyAirlineCode[5]
        document.getElementById("monthlydeparturedate5").innerHTML = "Departure: " + monthlyDepartureDate[5]
        document.getElementById("monthlyexpire5").innerHTML = "Price Changes: " + monthlyExpire[5]
        document.getElementById("monthlyprice6").innerHTML = "Price: $" + monthlyPrice[6]
        document.getElementById("monthlyairline6").innerHTML = "Airline Code: " + monthlyAirlineCode[6]
        document.getElementById("monthlydeparturedate6").innerHTML = "Departure: " + monthlyDepartureDate[6]
        document.getElementById("monthlyexpire6").innerHTML = "Price Changes: " + monthlyExpire[6]
        document.getElementById("monthlyprice7").innerHTML = "Price: $" + monthlyPrice[7]
        document.getElementById("monthlyairline7").innerHTML = "Airline Code: " + monthlyAirlineCode[7]
        document.getElementById("monthlydeparturedate7").innerHTML = "Departure: " + monthlyDepartureDate[7]
        document.getElementById("monthlyexpire7").innerHTML = "Price Changes: " + monthlyExpire[7]
        document.getElementById("monthlyprice8").innerHTML = "Price: $" + monthlyPrice[8]
        document.getElementById("monthlyairline8").innerHTML = "Airline Code: " + monthlyAirlineCode[8]
        document.getElementById("monthlydeparturedate8").innerHTML = "Departure: " + monthlyDepartureDate[8]
        document.getElementById("monthlyexpire8").innerHTML = "Price Changes: " + monthlyExpire[8]
        document.getElementById("monthlyprice9").innerHTML = "Price: $" + monthlyPrice[9]
        document.getElementById("monthlyairline9").innerHTML = "Airline Code: " + monthlyAirlineCode[9]
        document.getElementById("monthlydeparturedate9").innerHTML = "Departure: " + monthlyDepartureDate[9]
        document.getElementById("monthlyexpire9").innerHTML = "Price Changes: " + monthlyExpire[9]
        document.getElementById("monthlyprice10").innerHTML = "Price: $" + monthlyPrice[10]
        document.getElementById("monthlyairline10").innerHTML = "Airline Code: " + monthlyAirlineCode[10]
        document.getElementById("monthlydeparturedate10").innerHTML = "Departure: " + monthlyDepartureDate[10]
        document.getElementById("monthlyexpire10").innerHTML = "Price Changes: " + monthlyExpire[10]
        

    } 
}
export default APIfetch
