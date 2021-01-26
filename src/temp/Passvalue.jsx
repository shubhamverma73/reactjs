import React from 'react'

const Passvalue = () => {

    const shoot = (event) => {
        alert(event);
    }

    return (
        <>
            <div className="manageDivCountBox">
                <button className="buttonClassValue" onClick={() => shoot("Goal")} >CLick Here</button>
            </div>
        </>
    );

};
export default Passvalue;