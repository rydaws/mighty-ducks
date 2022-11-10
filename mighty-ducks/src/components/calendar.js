// import { Datepicker, setOpenPicker, openPicker } from "@mobiscroll/react"
// import "@mobiscroll/react/dist/css/mobiscroll.min.css"
// import { useState } from "react";
// import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

function Calendar() {
    var formattedDate

    function setCurrDate() {
        const date = new Date()
        var day = date.getDate()
        if (day < 10) {
            day = "0" + day
        }
        var month = date.getMonth() + 1
        if (month < 10) {
            month = "0" + month
        }
        var year = date.getFullYear()

        formattedDate = `${year}-${month}-${day}`
        console.log(formattedDate)
        var grabDepartureCalendar = document.getElementById("departure")
        var grabArrivalCalendar = document.getElementById("arrival")
        grabDepartureCalendar.setAttribute("min", formattedDate)
        grabArrivalCalendar.setAttribute("min", formattedDate)
    }

    function CalendarInput() {

    }


    return (

        <div className="container">
            <div className="searchbars">
                <Row>
                    <Col>
                        <div className="searchbar-1">
                            <label>Departing</label><input type="date" id="departure" name="DepartureCalendar" min="" placeholder="Where to.." required />
                        </div>
                    </Col>
                    <Col>
                        <div className="searchbar-2">
                        <label>Arriving</label><input type="date" id="arrival" name="ArrivalCalendar" min="" placeholder="Where from..." required />
                            <button className='searchButton' type="submit" >Submit</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )

}
export default Calendar