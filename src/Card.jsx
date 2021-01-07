import React from 'react';

function Card(props) {
	return (
			<>
			<a href={props.linkRedirect} target="_blank" rel="noreferrer">
				<div className="column">
					<div className="card">
						<img className="imageClass" src={props.imgsrc} alt="Avatar" style={{width:"100%"}} />
						<div className="container textBorderClass">
							<h4><b>{props.cardname}</b></h4> 
							<p>{props.position}</p> 
						</div>
					</div>
				</div>
			</a>
			</>
		);
}


const Cdata = [
				{
					//"key": 1,
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Card 1",
					position: "Software Engineer",
					redirect: "https://www.flipkart.com/"
				},{
					//"key": 2,
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Card 2",
					position: "Web Developer",
					redirect: "https://www.flipkart.com/"
				},{
					//"key": 3,
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Card 3",
					position: "PHP Application Developer",
					redirect: "https://www.flipkart.com/"
				},{
					//"key": 4,
					imgsrc: "https://www.w3schools.com/howto/img_avatar.png",
					cardname: "Card 4",
					position: "Software Developer",
					redirect: "https://www.flipkart.com/"
				}

			];

export default Card;
export { Cdata };