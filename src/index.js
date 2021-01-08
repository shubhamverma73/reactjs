import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card, {Cdata} from './Card';

/*function ncard(val) {
    return (
        <Card imgsrc={val.imgsrc} cardname={val.cardname} position={val.position} linkRedirect={val.redirect} />
    );
}*/

var getVal = 1;
const clickFunction = () => {
    getVal++;
    document.getElementById('increaseCount').innerHTML = getVal;
}

ReactDOM.render(
    <>
        <div className="row">
            {Cdata.map((val) => {
                return (
                            <Card key={val.id} imgsrc={val.imgsrc} cardname={val.cardname} position={val.position} linkRedirect={val.redirect} />
                        );
            })}
        </div>
        <div className="manageDivCountBox">
            <span id="increaseCount">1</span><br/>
            <button className="buttonClass" onClick={clickFunction}>Click Here</button>
        </div>
    </>,
        document.getElementById('root')
    );