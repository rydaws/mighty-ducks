import React from "react"

function Home() {
    console.log("At Home");
    return (
        <main>
            <div class="searchbar">
            <input type="text" placeholder="Arriving to..."></input>
            <input type="text" placeholder="Departing from..."></input>
            </div>
        </main>
        );
    }
export default Home