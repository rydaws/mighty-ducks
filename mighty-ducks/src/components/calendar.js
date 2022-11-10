// import { Datepicker, setOpenPicker, openPicker } from "@mobiscroll/react"
// import "@mobiscroll/react/dist/css/mobiscroll.min.css"
// import { useState } from "react";
// import Button from 'react-bootstrap/esm/Button';



import React from 'react'

function Calendar() {
   var formattedDate

    function setCurrDate() {
        const date = new Date()
        var day = date.getDate()
        var month = date.getMonth() + 1
        var year = date.getFullYear()

        formattedDate = `${year}-${month}-${day}`
        console.log(formattedDate)
    }

    function CalendarInput() {
    var calendarInput = document.getElementById("departure")
    console.log(calendarInput)
}

    return (
        <div>
            <input type="date" id="departure" name="DepartureCalendar" min={formattedDate}></input>
            <button type="submit" onClick={CalendarInput()}>Submit</button>
        </div>
    )
}
export default Calendar