

function MonthAPI() {
    var months = []
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