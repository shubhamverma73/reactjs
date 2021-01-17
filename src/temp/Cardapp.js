import React from 'react';
import Card, {Cdata} from './Card';

const Cardapp = () => {
    return (
        <>
            <div className="row">
                {Cdata.map((val) => {
                    return (
                                <Card key={val.id} imgsrc={val.imgsrc} cardname={val.cardname} position={val.position} linkRedirect={val.redirect} />
                            );
                })}
            </div>
        </>
    );
}

export default Cardapp;