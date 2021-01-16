import React, { useContext } from "react";
import { Firstname, Lastname } from "./Compa"; //Import Component from A

const Compc = () => {

    const fname = useContext(Firstname); //Context is just like Redux
    const lname = useContext(Lastname);
    return (
        <>
            <h1>Component from C</h1>
            <p><b>{fname} {lname}.</b> Getting Value direct from Component A without pass to Component B, and it is just like Redux</p>
        </>
    );
}

export default Compc;