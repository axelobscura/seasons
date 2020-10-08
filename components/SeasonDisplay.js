import React, { Component } from 'react';

class SeasonDisplay extends Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        if (typeof window !== "undefined") {
            window.navigator.geolocation.getCurrentPosition(
                position => this.setState({lat: position.coords.latitude}),
                (err) => this.setState({errorMessage: err.message})
            );
        }
    }

    componentDidUpdate(){
        console.log("My component did update");
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