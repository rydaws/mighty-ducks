import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.favorite.Arrival}</td>
   <td>{props.favorite.Departure}</td>
   <td>{props.favorite.Price}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.favorite._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.favorite._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [favorite, setFav] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3000/Favorite/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const favorite = await response.json();
     setRecords(favorite);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:3000/${id}`, {
     method: "DELETE"
   });
 
   const newFavorite = favorites.filter((el) => el._id !== id);
   setRecords(newFavorite);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return favorites.map((favorite) => {
     return (
       <Record
         record={favorite}
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
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Arrival</th>
           <th>Depature</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>{FavList()}</tbody>
     </table>
   </div>
   </section>
 );
}