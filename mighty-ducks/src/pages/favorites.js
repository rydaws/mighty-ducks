import React, { useEffect, useState } from "react";

 
const Favorite = (props) => (
 <tr>
  <td>{props.favorite.Departure}</td>
  <td>{props.favorite.Arrival}</td>
  <td>{props.favorite.Airline}</td>
  <td>{props.favorite.Price}</td>
  <td>
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.favorite._id);
       }}
     >
       Unfavorite
     </button>
   </td>
 </tr>
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
  await fetch(`http://localhost:3000/${id}`, {
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
 
 // This following section will display the table with the records of individuals.
 return (
  <section>
   <div>
     <h3>Favorites</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Departure</th>
           <th>Arrival</th>
           <th>Price</th>
           <th>Airline</th>
         </tr>
       </thead>
       <tbody>{favList()}</tbody>
     </table>
   </div>
   </section>
 );
}
