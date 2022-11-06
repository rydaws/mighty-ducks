
function APIfetch(origin, destination) {

    var userInputs = localStorage.getItem('_userInputs');
    if (!userInputs) return false;
    localStorage.removeItem('_userInputs');
    userInputs = atob(userInputs);
    userInputs = JSON.parse(userInputs)
    var origin = userInputs.origin
    var destination = userInputs.destination

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
            console.log(res.data)
        })
        .catch(err => console.error(err))


    return (
      <section>
        <div id="apiID">
            Hello
        </div>
    </section>
    )
}
export default APIfetch