import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default function Display(props){

    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Blurrr..., it\'s Chilly!!!' : 'Lets hit the Beach';

    return(
        <h1>{text}</h1>
    )
}