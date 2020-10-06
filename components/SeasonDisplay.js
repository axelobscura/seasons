import React, { Component } from 'react';


class SeasonDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            lat: null
        };
        if (typeof window !== "undefined") {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({
                        lat: position.coords.latitude
                    })
                },
                (err) => console.log(err)
            );
        }
        
    }
    render(){
        
        return(
            <>
                <h1>Season Display</h1>
                <h2>Latitude: {this.state.lat}</h2>
            </>
        )
    }
}

export default SeasonDisplay;