import React, { Component } from 'react';


class SeasonDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            lat: null,
            errorMessage: ''
        };
        if (typeof window !== "undefined") {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({
                        lat: position.coords.latitude
                    })
                },
                (err) => {
                    this.setState({
                        errorMessage: err.message
                    })
                }
            );
        }
        
    }
    render(){
        return(
            <>
                <h1>Season Display</h1>
                <h2>Latitude: {this.state.lat}</h2>
                <h3>Error: {this.state.errorMessage}</h3>
            </>
        )
    }
}

export default SeasonDisplay;