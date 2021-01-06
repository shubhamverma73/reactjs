import React from 'react';
import Headings, { Paragraph, Create_account } from './Heading';

var date = new Date().getDate();

var cssStyle = {};
if(date == 7) {
	cssStyle.color = 'green';
} else {
	cssStyle.color = 'red';
}

function Formelement() {
    return (<div className="test">
            <form action="/action_page.php">
                <div className="container">							
                    <h1>Register</h1>
                    {Create_account()}
                    <Headings />
                    <Paragraph />
                    <hr/>
                    <label htmlFor="fname"><b>First Name</b></label>
                    <input type="text" placeholder="First Name" name="fname" id="fname" required />

                    <label htmlFor="lname"><b>Last Name</b></label>
                    <input type="text" placeholder="Last Name" name="lname" id="lname" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <hr/>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    <button type="submit" className="registerbtn">Register</button>
                </div>

                <div className="container signin" style={cssStyle}>
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>
            </form>
        </div>);
}

export default Formelement;