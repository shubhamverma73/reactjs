/*var React = require('react'); //For only to show html content, it was before
var ReactDOM = require('react-dom'); //For use html dom object*/
/* For deployment on live: https://www.youtube.com/watch?v=aQhAmW_I4II&ab_channel=VideoGallery */

import React from 'react'; //For only to show html content, its mordern code
import ReactDOM from 'react-dom'; //For use html dom object
import './index.css';

var myOwnVar = 'Shubham Verma';
var fname = 'Shubham';
var lname = 'Verma';
var currentdate = new Date();
var currentDate = new Date().toLocaleDateString();
var currentTime = new Date().toLocaleTimeString();
var img = "https://www.w3schools.com/images/w3certified_logo_250.png";

ReactDOM.render(
        <React.Fragment>
			<h1 className="header">Hello World!!</h1>
			<p>My first code is woking</p>
			<p>{myOwnVar}</p>
			<p>{2+3}</p>
			<p>{ Math.random() }</p>
			<b>{ `My name is: ${fname} - ${lname}` }</b>
			<p>{ `${currentdate.getDate()} - ${(currentdate.getMonth()+1)} - ${currentdate.getFullYear()}, 
			${currentdate.getHours()} : ${currentdate.getMinutes()} : ${currentdate.getSeconds()}` }</p>
			<p>{ currentDate }</p>
			<p>{ currentTime }</p>
			<img src={img} alt="test" title="testing" />
        </React.Fragment>,
        document.getElementById('root')); //h1 tag is call JSX (Javascript XML or extension)
