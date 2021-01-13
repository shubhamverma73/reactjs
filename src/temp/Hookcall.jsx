import React, { useState } from 'react';


const Hookcall = () => {
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
                <button className="buttonClass" onClick={ChangeTIme}>Click Here</button>
            </div>
        </>
    );
}

const Runtime = () => {
    let currTIme = new Date().toLocaleTimeString();

    const [currentTIme, setTIme] = useState(currTIme);

    const updateTIme = () => {
        currTIme = new Date().toLocaleTimeString();
        setTIme(currTIme);
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