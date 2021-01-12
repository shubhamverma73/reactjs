import React, { useState } from 'react';

const IncrementVal = () => {

    const[defaultVal, setVal] = useState(0);  

    const increaseFunction = () => {
        setVal(defaultVal+1);
    }
    const decreaseFunction = () => {
        if((defaultVal) > 0) {
            setVal(defaultVal-1);
        } else {
            alert('Value should not be less than 0');
        }        
    }  

    return (
            <>
                <div className="manageDivCountBox">
                    <span id="increaseCount">{defaultVal}</span><br/>
                    <button className="buttonClass" onClick={increaseFunction}>Increase Value</button>
                    <button className="buttonClass" onClick={decreaseFunction}>Decrease Value</button>
                </div>
            </>
        );
}

export default IncrementVal;