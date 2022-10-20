const mongoose = require('mongoose');
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const Record = (props) => (
//     <tr>
//       <td>{props.Favorite.userFrom}</td>
//       <td>{props.Favorite.Flight}</td>
//       <td>
//         <Link className="btn btn-link" to={`/edit/${props.Favorite._id}`}>Edit</Link> |
//         <button className="btn btn-link"
//           onClick={() => {
//             props.deleteRecord(props.record._id);
//           }}
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//    );



function Favorites() {
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

export default Favorites