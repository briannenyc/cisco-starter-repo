import React, { useEffect, useState } from 'react';




const Packet = () => {

const ws = new WebSocket('ws://localhost:55455')  

const callPylon = {
   // something happens here
};

ws.onopen = (event) => {
    ws.send(JSON.stringify(callPylon))
}

ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    console.log(`[message] Data received from server: ${json}`);
    try {
        if ((json.event = "data")) {
            console.log(json.data);
        }
    } catch (err) {
        console.log(err)
    }
}
    
    
    
    
    
    
    
    return (
        <div></div>
    
    )}


export default Packet;