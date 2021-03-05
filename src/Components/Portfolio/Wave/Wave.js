import React, { useState } from 'react';
import "./Wave.css"
const Wave = (props) => {


    let opening = 'first-wave'



    let testing = {

        animation: 'animate 5s ease-in-out',
        animationDelay: props.sequence / 50 + 's'
    }

    console.log(props.sequence)





    return (<div className="wave" style={testing}></div>);
}

export default Wave;