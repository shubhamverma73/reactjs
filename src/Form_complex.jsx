import React, { useState } from 'react';


const Form_complex = () => {

    const[onFirstVal, setFirstName] = useState('');
    const[onLastVal, setLastName] = useState('');
    const[onFullVal, setFullName] = useState('');

    const onSub = (event) => {
        event.preventDefault();
        setFullName(`${onFirstVal} ${onLastVal}`);
    };

    const inputChange = (event) => {
        setFirstName(event.target.value);
    };

    const inputChange2 = (event) => {
        setLastName(event.target.value);
    };

    return(
        <>
            <div className="manageDivBoxForm">
                <form onSubmit={onSub}>
                    <h1>Hello: {onFullVal}</h1><br/>
                    First Name: <input type="text" name="fname" id="fname" defaultValue="" onChange={inputChange} placeholder="Your First Name" /><br/>
                    Last Name: <input type="text" name="lname" id="lname" defaultValue="" onChange={inputChange2} placeholder="Your Last Name" /><br/>
                    <button type="submit" className="buttonClass">Click Here</button>
                    <div>{onFirstVal} {onLastVal}</div>
                </form>
            </div>
        </>
    );
}

export default Form_complex;