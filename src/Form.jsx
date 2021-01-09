import React, { useState } from 'react';


const Form = () => {

    const[defaultVal, setValue] = useState('Shubham');
    const[onSubmitVal, setOnSubmitVal] = useState();

    const onSub = (event) => {
        event.preventDefault();
        setOnSubmitVal(defaultVal);
    };

    const inputChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <>
            <div className="manageDivCountBoxTime">
                <form onSubmit={onSub}>
                    FIrst Name: <input type="text" name="fname" id="fname" defaultValue="" onChange={inputChange} placeholder="Your First Name" /><br/>
                    <button type="submit" className="buttonClass">Click Here</button>
                    <div>{onSubmitVal}</div>
                </form>
            </div>
        </>
    );
}

export default Form;