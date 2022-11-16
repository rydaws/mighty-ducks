import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card"

 
const Favorite = (props) => (
  <Card style={{
    width: '18rem',
    left: '10px',
  }}>
    <Card.Header>
      <button id="unfav"
       onClick={() => {
         props.deleteRecord(props.favorite._id);
       }}
     >
       Unfavorite
     </button></Card.Header>
  <td>Departing from: {props.favorite.Departure}</td>
  <td>Arriving At: {props.favorite.Arrival}</td>
  <td>Price: {props.favorite.Price}</td>
  <td>Airline: {props.favorite.Airline}</td>
  <td>Flight leaves on: {props.favorite.departureDate}</td>
  <td>
     
   </td>
   </Card>
);
 
export default function FavList() {
 const [favorite, setFav] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {

   async function getUserFavorites(){
    var user=localStorage.getItem('user');

    const response = await fetch(`http://localhost:3000/Favorite/${user}`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const favorite = await response.json();
     console.log(favorite)
     setFav(favorite);
   }
   
   getUserFavorites();
   return;
  }, [favorite.length]);

 // This method will delete a record
 async function deleteRecord(id) {
  const response=await fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
  const newRecords = favorite.filter((el) => el._id !== id);
  setFav(newRecords);
}
 
 // This method will map out the records on the table
 function favList() {
   return favorite.map((favorite) => {
     return (
       <Favorite
         favorite={favorite}
         deleteRecord={() => deleteRecord(favorite._id)}
         key={favorite._id}
       />
     );
   });
  }

 return (
  <section>
   <div>
     <h3>Favorites</h3>
     <table className="favoriteDisplay" style={{ marginTop: 30, }}>
       <thead>
         <tr>
           
         </tr>
       </thead>
       <tbody>{favList()}</tbody>
     </table>
   </div>
   </section>
 );
}