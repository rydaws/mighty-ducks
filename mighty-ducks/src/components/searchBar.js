import React from "react";
import 'material-icons/iconfont/material-icons.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class saveUserInput extends React.Component {
    constructor(props) {
        super(props);


        this.state = { origin: '' };
        this.state = { destination: '' };

        this.handleOriginChange = this.handleOriginChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveInputs = this.saveInputs.bind(this)
    }

    handleOriginChange(event) {
        this.setState({ origin: event.target.value });
    }

    handleDestinationChange(event) {
        this.setState({ destination: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.origin)
        console.log(this.state.destination)
    }

    saveInputs() {
        var userInputs = {
            origin: this.state.origin,
            destination: this.state.destination
        };
        userInputs = JSON.stringify(userInputs);
        userInputs = btoa(userInputs);
        localStorage.setItem('_userInputs', userInputs);
        window.location("/Bookings")
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit} method='GET'>
                <div className="container">
                    <div className="searchbars">
                        <Row>
                            <Col>
                                <div className="searchbar-1">
                                    <i className="material-icons">search</i><input id="origin" type="text" value={this.state.origin} onChange={this.handleOriginChange} placeholder="Departing From..." method="GET" />
                                </div>
                            </Col>
                            <Col>
                            <div className="searchbar-2">
                            <i className="material-icons">search</i><input id="destination" type="text" value={this.state.destination} onChange={this.handleDestinationChange} placeholder="Arriving To..." method="POST" />
                            <a href="Bookings">
                                <button className="searchButton" type="button" value="Submit" onClick={this.saveInputs}>Go</button>
                            </a>
                            </div>
                            </Col>
                           
                        </Row>
                    </div>
                </div >

            </form >

        );
    }
}

