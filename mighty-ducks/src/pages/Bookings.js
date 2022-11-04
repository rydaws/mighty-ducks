import React from "react";
import Card from "react-bootstrap/Card"

function APIfetch() {
    var price = []
    var airline = []
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
                for (let i = 0; i < 2; i++) {

                    price[i] = JSON.stringify(res.data[destination][i].price, null, '\t')

                    flight_number[i] = JSON.stringify(res.data[destination][i].flight_number, null, '\t')

                    if (airline === "\"\"") {
                        airline[i] = "NOT FOUND"
                    } else {
                        airline[i] = JSON.stringify(res.data[destination][i].airline, null, '\t')
                    }

                }

                // console.log(price)
                // console.log(airline)
                // console.log(flight_number)
                FetchAirlineAPI(flight_number)
                renderAPI()
            }

            ).catch(err => console.error(err))
    }

    function FetchAirlineAPI(flight_number) {
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };
        console.log(flight_number[0])
        for (let i = 0; i < flight_number.length; i++) {
        fetch('https://aerodatabox.p.rapidapi.com/flights/number/' + flight_number[i] + '?withAircraftImage=true&withLocation=true', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        renderAPI()
        }
    }

    return (
        <section>
            <Card style={
                {
                    width: '40rem',
                }}>
                <Card.Header>
                    Ticket 1
                </Card.Header>
                <Card.Body>
                    <Card.Title id="firstAirline"></Card.Title>
                    <Card.Text id="firstPriceTicket">Loading...</Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '40rem' }}>
                <Card.Header>
                    Ticket 2
                </Card.Header>
                <Card.Body>
                    <Card.Title id="secondAirline"></Card.Title>
                    <Card.Text id="secondPriceTicket">Loading...</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )

    async function renderAPI() {
        console.log(price)
        document.getElementById("firstPriceTicket").innerHTML = price[0]
        document.getElementById("secondPriceTicket").innerHTML = price[1]
        document.getElementById("firstAirline").innerHTML = airline[0]
        document.getElementById("secondAirline").innerHTML = airline[1]
    }
}
export default APIfetch


