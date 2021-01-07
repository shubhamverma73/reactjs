import React from 'react';

function Card(props) {
	return (
			<>
			<div className="column">
				<div className="card">
					<img src={props.imgsrc} alt="Avatar" style={{width:"100%"}} />
					<div className="container">
						<h4><b>{props.cardname}</b></h4> 
						<p>{props.position}</p> 
					</div>
				</div>
			</div>
			</>
		);
}


const Cdata = [
				{
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Shubham",
					position: "Software Engineer"
				},{
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Sonu",
					position: "Web Developer"
				},{
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Vishwash",
					position: "PHP Application Developer"
				}

			];

export default Card;
export { Cdata };