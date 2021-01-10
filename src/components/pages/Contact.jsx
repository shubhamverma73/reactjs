import React from 'react';

const Contact = () => {

    const inputChange = (event) => {
        if(event.target.name === 'fname') {
            alert(event.target.value.length);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { fname, lname, email, mobile } = event.target.elements;
        console.log(fname.value);
        console.log(lname.value);
        console.log(email.value);
        console.log(mobile.value);
    };

    return (
        <>
            <div className="manageDivBoxForm">
                <form onSubmit={onSubmit}>

                    First Name: <input type="text" name="fname" id="fname" onChange={inputChange} placeholder="Your First Name" /><br/>
                    Last Name: <input type="text" name="lname" id="lname" onChange={inputChange} placeholder="Your Last Name" /><br/>
                    Email: <input type="text" name="email" id="email" onChange={inputChange} placeholder="Your Email" /><br/>
                    Mobile: <input type="text" name="mobile" id="mobile" onChange={inputChange} placeholder="Your Mobile" /><br/>
                    <button type="submit" className="buttonClass">Click Here</button>
                </form>
            </div>
        </>
    );
}

export default Contact;