import React from "react";
import Card from "react-bootstrap/Card"
import Placeholder from 'react-bootstrap/Placeholder'


var iatanumber = []
var airlineName = []
var price = []
var airline = []

function APIfetch() {
    var userInputs = localStorage.getItem('_userInputs');
    if (userInputs) {
        localStorage.removeItem('_userInputs');
        userInputs = atob(userInputs);
        userInputs = JSON.parse(userInputs)
        var origin = userInputs.origin
        var destination = userInputs.destination
        console.log(origin, destination)
        FetchPriceAPI()
    }
    




    function FetchPriceAPI() {
        var flight_number = []
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
                console.log(res.data[destination])
                for (let i = 0; i < 2; i++) {

                    price[i] = JSON.stringify(res.data[destination][i].price, null, '\t')

                    flight_number[i] = JSON.stringify(res.data[destination][i].flight_number, null, '\t')

                    if (airline === "\"\"") {
                        airline[i] = "NOT FOUND"
                    } else {
                        airline[i] = JSON.stringify(res.data[destination][i].airline, null, '\t')
                        airline[i] = airline[i].replaceAll('"', '')
                    }

                    iatanumber[i] = airline[i].concat(flight_number[i])
                }

                renderDandA(origin,destination)
                FetchAirlineAPI(iatanumber)
                renderAPI()
            }

            ).catch(err => console.error(err))
    }

    function FetchAirlineAPI(iatanumber) {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };
        console.log(iatanumber)
        for (let i = 0; i < iatanumber.length; i++) {
            fetch('https://aerodatabox.p.rapidapi.com/flights/number/' + iatanumber[i] + '?withAircraftImage=true&withLocation=true', options)
                .then(response => response.json())
                .then(response => {
                    airlineName[i] = JSON.stringify(response[0].airline.name)
                    airlineName[i] = airlineName[i].replaceAll('"', '')
                    renderAPI(origin,destination)
                    console.log(response)
                }
                ).catch(err => console.error(err));
        }
        
    }  

    async function createFavorite(){
         if(localStorage.getItem('loginState')){
            const favorite={
                favoritedBy:localStorage.getItem('user'),
                departingFrom: document.getElementById("origin").textContent,
                arrivingAt: document.getElementById("destination").textContent,
                airline: airlineName[0],
                price: price[0],
                
            }
            console.log(favorite.favoritedBy, favorite.airline,favorite.departingFrom,favorite.arrivingAt, favorite.price)
            
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


            
         }else{
            console.log("user not logged in")
         }
        
        
    }

    return (
        <section>
            <div className="'flightToAndFrom'">
                <p>Leaving from: </p>
                <div id="origin">Loading...</div>
                <p>Arriving at:</p>
                <div id="destination">Loading...</div>
            </div>
            <Card style={
                {
                    width: '40rem',
                }}>
                <Card.Header id='airlineOne'>
                    <Placeholder animation='glow'><Placeholder xs={2} /></Placeholder>
                </Card.Header>
                <Card.Header><button type="submit"
                        value="Favorite"
                        onClick={(e) => {createFavorite(
                        document.getElementById("departure").innerHTML,
                        document.getElementById("arrival").innerHTML,
                        document.getElementById("firstPriceTicket").innerHTML)}}>Favorite</button></Card.Header>
                <Card.Body>
                    <Card.Title className="firstTicket">
                        <div id="firstPriceTicket"></div>
                    </Card.Title>
                    <Card.Text id="departure">Loading...</Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '40rem' }}>
                <Card.Header id='airlineTwo'>
                    <Placeholder animation='glow' xs={2}><Placeholder xs={2} /></Placeholder>
                </Card.Header>
                <Card.Header><button type="submit"
                        value="Favorite"
                        onClick={(e) => {createFavorite(
                        document.getElementById("departure").innerHTML,
                        document.getElementById("arrival").innerHTML,
                        document.getElementById("secondPriceTicket").innerHTML)}}>Favorite</button></Card.Header>
                <Card.Body>
                    <Card.Title id="secondPriceTicket"></Card.Title>
                    <Card.Text id="arrival">Loading...</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )

    async function renderDandA(origin,destination){
        document.getElementById("origin").innerHTML=origin+" "
        document.getElementById("destination").innerHTML=destination+" "
    }


    async function renderAPI() {
        // console.log(price)
        document.getElementById("firstPriceTicket").innerHTML = "Price: " + price[0]
        document.getElementById("secondPriceTicket").innerHTML = "Price: " + price[1]
        document.getElementById("departure").innerHTML = airline[0]
        document.getElementById("arrival").innerHTML = airline[1]
        document.getElementById("airlineOne").innerHTML = airlineName[0]
        document.getElementById("airlineTwo").innerHTML = airlineName[1]
    }
}
export default APIfetch


