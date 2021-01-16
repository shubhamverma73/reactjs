import React, { useEffect, useState } from 'react';

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
    
    useEffect(() => {
        document.title = `value is: ${defaultVal}`;
    })

    return (
            <>
                <div className="manageDivCountBox">
                    <span id="increaseCount">{defaultVal}</span><br/>
                    <button className="buttonClassValue" onClick={increaseFunction}><i className="fas fa-plus-circle"></i></button>
                    <button className="buttonClassValue" onClick={decreaseFunction}><i className="fas fa-minus-circle"></i></button>
                </div>
            </>
        );
}

export default IncrementVal;