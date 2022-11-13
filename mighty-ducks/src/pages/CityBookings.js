import React from "react";

function CityBookings() {
        var city = localStorage.getItem('_cityChoice')
        var output
        if (true) {
        localStorage.removeItem('_cityChoice');
        console.log(city)
        CityAPI()
    }

    async function CityAPI() {

        var data = []

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
                console.log(response.data)
                for (let i = 0; i < 30; i++) {
                    DisplayCityBookings(data)
                }
            })
            .catch(err => console.error(err));
        console.log(data)
    }

    async function DisplayCityBookings(data) {
        output = data.map((data) =>
            <li>
                {data}
            </li>
        )
        return output
    }

    return (
        <ul>{output}</ul>
    )

}

export default CityBookings