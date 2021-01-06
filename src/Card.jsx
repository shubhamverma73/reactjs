import React from 'react';

function Card(props) {
	return (
			<>
				<div className="card">
					<img src={props.imgsrc} alt="Avatar" style={{width:"100%"}} />
					<div className="container">
						<h4><b>{props.cardname}</b></h4> 
						<p>{props.position}</p> 
					</div>
				</div>
			</>
		);
}

export default Card;