import React from "react";

function APIfetch() {

    var test = []
    var userInputs = localStorage.getItem('_userInputs');
    if (!userInputs) return false;
    localStorage.removeItem('_userInputs');
    userInputs = atob(userInputs);
    userInputs = JSON.parse(userInputs)
    var origin = userInputs.origin
    var destination = userInputs.destination
    console.log(origin, destination)


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
            console.log(res)
            var flight_number = []
            console.log(res.data[destination])
            for (let i = 0; i < 2; i++) {
                test = flight_number.push(res.data[destination][i].flight_number)
            }
        }).catch(err => console.error(err))

    const renderArray = test.map((test) => {
        return (
            `<li>
                <p>${test}</p>
            </li>
            `
        )})
        .join('');
}
export default APIfetch


