import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card, {Cdata} from './Card';

/*function ncard(val) {
    return (
        <Card imgsrc={val.imgsrc} cardname={val.cardname} position={val.position} linkRedirect={val.redirect} />
    );
}*/

ReactDOM.render(
    <>
        <div className="row">
            {Cdata.map((val) => {
                return (
                            <Card key={val.id} imgsrc={val.imgsrc} cardname={val.cardname} position={val.position} linkRedirect={val.redirect} />
                        );
            })}
        </div>
    </>,
        document.getElementById('root')
    );