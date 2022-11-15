import React from "react";
import { useState } from 'react'
import IATAcodes from '../components/IATACodes'

function CityBookings() {
    var city = localStorage.getItem('_cityChoice')
    console.log(city)
    CityAPI()


    function CityAPI() {
        var flight_number = []
        var airline = []
        var iataPlusFlightNumber = []
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
                const dataAPI = Object.keys(response.data)
                console.log(dataAPI)
                for (let i = 0; i < dataAPI.length; i++) {
                flight_number[i] = response.data[dataAPI[i]].flight_number

                airline[i] = response.data[dataAPI[i]].airline 
                airline[i] = airline[i].replaceAll('"', '')

                iataPlusFlightNumber[i] = airline[i].concat(flight_number[i])
                
            }
                AirportAPI()
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
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    

// function DisplayCityBookings() {
//     output = data.map((data) =>
//         <li>
//             {data}
//         </li>
//     )
//     return output
// }

return (
    <div id="airline">
        
    </div>
)
}

async function renderAPI(airline) {
document.getElementById("airline").innerHTML = airline
}


export default CityBookings