import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Card, {Cdata} from './Card';

//ReactDOM.render(<App />,document.getElementById('root'));

function ncard(val) {
    return (
        <Card imgsrc={val.imgsrc} cardname={val.cardname} position={val.position} />
    );
}

/*ReactDOM.render(
		<>
            <div className="row">
                <Card imgsrc={Cdata[0].imgsrc} cardname={Cdata[0].cardname} position={Cdata[0].position} />
                <Card imgsrc="https://www.w3schools.com/howto/img_avatar.png" cardname="Sonu" position="Web Developer" />
                <Card imgsrc="https://www.w3schools.com/howto/img_avatar.png" cardname="Vishwash" position="PHP Application Developer" />
            </div>
		</>,
			document.getElementById('root')
        );*/
        

ReactDOM.render(
    <>
        <div className="row">
            {Cdata.map(ncard)}
        </div>
    </>,
        document.getElementById('root')
    );