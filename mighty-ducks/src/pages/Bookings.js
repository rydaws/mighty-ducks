import React from "react";
import Card from "react-bootstrap/Card"
import Placeholder from 'react-bootstrap/Placeholder'
import { useState } from 'react'

const lowPrices = (props) => {
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
            {props.setPriceData.origin + '=>' + props.setPriceData.destination}
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
    var iatanumber = []
    var airlineName = []
    var price = []
    var airline = []
    var origin = localStorage.getItem('_userOrigin');
    var destination = localStorage.getItem('_userDestination');
    const [priceData, setPriceData] = useState([])
    PriceAPIs()

    
    function PriceAPIs() {
        
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
                setPriceData(res.data)
                console.log(priceData)
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
                    const months = Object.keys(response.data)
                    console.log(months)
                    console.log(response)})
                
                .catch(err => console.error(err));
                AirportAPI()
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
                DisplayLowestAPI()
            })
            .catch(err => console.error(err));
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

    function DisplayLowestAPI() {
   return priceData.map((propPrice) => {
     return (
       <lowPrices
        priceData={propPrice}
        createFavorite={() => createFavorite(propPrice._id)}
         key={propPrice._id}
       />
     );
   });
  }
    return (
        <section>
            <ul>
                <li>
                    {DisplayLowestAPI()}
                </li>
            </ul>
        </section>
    )
    
}
export default APIfetch

