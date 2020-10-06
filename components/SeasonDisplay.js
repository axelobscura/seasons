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
        if(this.state.errorMessage && !this.state.lat){
            return <div><h1>Error: {this.state.errorMessage}</h1></div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div><h1>Latitude: {this.state.lat}</h1></div>
        }
        
        return <div><h1>Loading!</h1></div>
    }
}

export default SeasonDisplay;