import React from 'react';
import './../../assets/contact.css';

const Contact = () => {

    const inputChange = (event) => {
        /*if(event.target.name === 'fname') {
            alert(event.target.value.length);
        }*/
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { fname, lname, email, mobile, subject } = event.target.elements;
        console.log(fname.value);
        console.log(lname.value);
        console.log(email.value);
        console.log(mobile.value);
        console.log(subject.value);
    };

    return (
        <>
            <h3>Contact Form</h3>
			<div className="container">
				<form onSubmit={onSubmit}>
					<label htmlFor="fname">First Name</label>
					<input type="text" name="fname" id="fname" onChange={inputChange} placeholder="Your First Name" required />

					<label htmlFor="lname">Last Name</label>
					<input type="text" name="lname" id="lname" onChange={inputChange} placeholder="Your Last Name" required />

					<label htmlFor="lname">Email</label>
					<input type="text" name="email" id="email" onChange={inputChange} placeholder="Your Email" required />

					<label htmlFor="lname">Mobile</label>
					<input type="text" name="mobile" id="mobile" onChange={inputChange} placeholder="Your Mobile" required />

					<label htmlFor="subject">Subject</label>
					<textarea id="subject" name="subject" placeholder="Write something.." onChange={inputChange} style={{height:"200px"}} required></textarea>

					<button type="submit" className="buttonClass">Click Here</button>
				</form>
			</div>
        </>
    );
}

export default Contact;