import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


const Hookcall = (props) => {
    let currTIme = new Date().toLocaleTimeString();

    const [currentTIme, setTIme] = useState(currTIme); //useState is hook function that return current data and function

    const ChangeTIme = () => {
        currTIme = new Date().toLocaleTimeString();
        setTIme(currTIme);
    }

    return (
        <>
            <div className="manageDivCountBoxTime">
                <span id="timeCount">{currentTIme}</span><br/><br/>
                <button className="buttonClass" onClick={ChangeTIme}>{props.button}</button>
            </div>
        </>
    );
}

const Runtime = () => {
    let currTIme = new Date().toLocaleTimeString();

    const [currentTIme, setTime] = useState(currTIme);

    const updateTIme = () => {
        currTIme = new Date().toLocaleTimeString();
        setTime(currTIme);
    };
    setInterval(updateTIme, 1000);

    return (
        <>
            <div className="manageDivAutoTime">
                <span id="timeAutoCount">{currentTIme}</span>
            </div>
        </>
    );
}

export default Hookcall;
export { Runtime };