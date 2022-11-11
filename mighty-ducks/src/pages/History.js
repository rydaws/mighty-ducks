import React, { useEffect, useState } from "react";
import "../custom.scss";

import { useNavigate } from "react-router";



export default function Create() {
    const [form, setForm] = useState({
        //UserID:"",
        Depature: "",
        Arrival: "",
        Price: ""
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    function getInformation(){
        favorites[0]=document.getElementById("Arrival").textContent;
        favorites[1]=document.getElementById("Depature").textContent;
        favorites[2]=document.getElementById("Price").textContent;
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        console.log(favorites);
        e.preventDefault();
        form.Arrival = favorites[0].Arrival
        form.Departure = favorites[0].Departure
        form.Price = favorites[0].Price

        // When a post request is sent to the create url, we'll add a new record to the database.
    const newFavorite = { ...form };
    await fetch("http://localhost:3000/favorites/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newFavorite),
    })
        .catch(error => {
            window.alert(error);
            return;
        });

    setForm({ Arrival: "", Depature: "",Price:"" });
    navigate("/");
    }
        

   
    

const [favorites, setFav] = useState([]);
// This method fetches the records from the database.
useEffect(() => {
    async function getRecords() {
        const response = await fetch(`http://localhost:3000/Favorite/`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const records = await response.json();

        console.log(favorites);
        setFav(favorites);
    }
    getRecords();

    return;
}, [favorites.length]);



return (
    <section>
        <div class="flightHistory">
            <form onSubmit={onSubmit}>
                <span class="flightHistoryItem"><label id="Arrival">JFK</label></span>
                <span class="flightHistoryItem"><label id="Departure">LAX</label></span>
                <span class="flightHistoryItem"><strong>10:29 PM</strong></span>
                <span class="flightHistoryItem">6H 2M</span>
                <span class="flightHistoryItem"><label id="price">$400</label></span>

                <div className='favorite'>
                    <button type="submit"
                        value="Favorite"
                        onClick={(e) => {getInformation()}}>button</button>
                </div>

                <button className="ticketLink" type="button">Link to Tickets</button>
            </form>
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
