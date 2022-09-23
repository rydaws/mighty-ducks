import React from "react"

function Home() {
    console.log("At Home");
    return (
        <main>
            
            <div class="searchbars">
                <input type="text" placeholder="Arriving to..."></input>
                <input type="text" placeholder="Departing from..."></input>
                <button class="ticketsearch" type="button">Search</button>
            </div>

            <div class="datebars">
                <input type="text" placeholder="Return date (MM/DD/YYYY)"></input>
                <input type="text" placeholder="Leave date (MM/DD/YYYY)"></input>
            </div>
        </main>
        );
    }
export default Home