import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Card from './Card';

//ReactDOM.render(<App />,document.getElementById('root'));

ReactDOM.render(
		<>
		<Card imgsrc="https://www.w3schools.com/howto/img_avatar.png" cardname="Shubham" position="Software Engineer" />
		<Card imgsrc="https://www.w3schools.com/howto/img_avatar.png" cardname="Sonu" position="Web Developer" />
		<Card imgsrc="https://www.w3schools.com/howto/img_avatar.png" cardname="Vishwash" position="PHP Application Developer" />
		</>,
			document.getElementById('root')
		);