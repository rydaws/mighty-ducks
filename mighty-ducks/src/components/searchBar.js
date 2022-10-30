import React from "react";

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
            <form onSubmit={this.handleSubmit} method='GET' action="Bookings.php">
                    <div className="searchbars">
                        <input id="origin" type="text" value={this.state.origin} onChange={this.handleOriginChange} placeholder="Departing From..." method="GET" maxLength="3"/>
                    </div>
                    <div className="searchbars">
                        <input id="destination" type="text" value={this.state.destination} onChange={this.handleDestinationChange} placeholder="Arriving To..." method="GET" maxLength="3"/>
                    </div>
                    <div className="buttonPosition">
                        <a href="Bookings">
                            <button className="ticketsearch" type="button" value="Submit" onClick={this.saveInputs}>Submit</button>
                        </a>
                    </div>
            </form>

        );
    }
}

