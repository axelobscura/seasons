import React, { Component } from 'react';


class SeasonDisplay extends Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        )
        return(
            <h1>Season Display</h1>
        )
    }
}

export default SeasonDisplay;