/*var React = require('react'); //For only to show html content, it was before
var ReactDOM = require('react-dom'); //For use html dom object*/

import React from 'react'; //For only to show html content, its mordern code
import ReactDOM from 'react-dom'; //For use html dom object


var myOwnVar = <h1>Hello World...</h1>;

//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root')); //h1 tag is call JSX (Javascript XML or extension)
ReactDOM.render(myOwnVar, document.getElementById('root')); //h1 tag is call JSX (Javascript XML or extension)