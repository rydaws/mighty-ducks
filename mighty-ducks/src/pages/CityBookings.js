import React from "react";
import { useState } from 'react'
import IATAcodes from '../components/IATACodes'

function CityBookings() {
    var flight_number = []
    var airline = []
    var iataPlusFlightNumber = []
    var airlineName = []
    var city = localStorage.getItem('_cityChoice')
    var output
    CityAPI()


    function CityAPI() {
        const [data, setData] = useState({})
        console.log(IATAcodes)
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
                setData(response.data)
                // FetchAirlineInfo(iataPlusFlightNumber)
            })
            .catch(err => console.error(err));
    }

    function FetchAirlineInfo(iataPlusFlightNumber) {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };
        console.log(iataPlusFlightNumber)
        for (let i = 0; i < iataPlusFlightNumber.length; i++) {
            fetch('https://aerodatabox.p.rapidapi.com/flights/number/' + iataPlusFlightNumber[i] + '?withAircraftImage=true&withLocation=true', options)
                .then(response => response.json())
                .then(response => {
                    // data = response.data
                    // console.log(data)
                }
                ).catch(err => console.error(err));
        }
    }


function DisplayCityBookings(data) {
    output = data.map((data) =>
        <li>
            {data}
        </li>
    )
    return output
}

return (
    <div id="airline">
        
    </div>
)
}

async function renderAPI(airline) {
document.getElementById("airline").innerHTML = airline
}


export default CityBookings