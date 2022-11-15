import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Favorites = (props) => (
 <tr>
   <td>{props.Favorite.Arrival}</td>
   <td>{props.Favorite.Departure}</td>
   <td>{props.Favorite.Price}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.Favorite._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.Favorite._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function favorites() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getFavorites() {
     const response = await fetch(`http://localhost:3000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function unfavorite(id) {
   await fetch(`http://localhost:3000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function listFavorites() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => unfavorite(record._id)}
         key={record._id}
       />
     );
   });
 }
 
    return (
        <section>
            <div class="flightHistory">
                <span class="flightHistoryItem">JetBlue Airways</span>
                <span class="flightHistoryItem"><strong>10:29 PM</strong></span>
                <span class="flightHistoryItem">6H 2M</span>
                <span class="flightHistoryItem">$368</span>
                <button className="ticketLink" type="button">Link to Tickets</button>
            </div>
            <div class="flightHistory">
                <span class="flightHistoryItem">JetBlue Airways</span>
                <span class="flightHistoryItem"><strong>9:45 PM</strong></span>
                <span class="flightHistoryItem">13H 50M</span>
                <span class="flightHistoryItem">$371</span>
                <button className="ticketLink" type="button">Link to Tickets</button>
            </div>
            <div class="flightHistory">
                <span class="flightHistoryItem">American Airlines</span>
                <span class="flightHistoryItem"><strong>6:30 AM</strong></span>
                <span class="flightHistoryItem">9H 48M</span>
                <span class="flightHistoryItem">$422</span>
                <button className="ticketLink" type="button">Link to Tickets</button>
            </div>
            <div class="flightHistory">
                <span class="flightHistoryItem">Delta</span>
                <span class="flightHistoryItem"><strong>7:00 AM</strong></span>
                <span class="flightHistoryItem">6H 0M</span>
                <span class="flightHistoryItem">$478</span>
                <button className="ticketLink" type="button">Link to Tickets</button>
            </div>
            <div class="flightHistory">
                <span class="flightHistoryItem">United</span>
                <span class="flightHistoryItem"><strong>10:00 AM</strong></span>
                <span class="flightHistoryItem">6H 4M</span>
                <span class="flightHistoryItem">$503</span>
                <button className="ticketLink" type="button">Link to Tickets</button>
            </div>
        </section>
        
    )
}
