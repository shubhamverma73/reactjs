/* https://daveceddia.com/context-api-vs-redux/ */
import React, { createContext } from "react";
import Compb from './Compb';

/* =========================== For Context use only ============================= */
const Firstname = createContext();
const Lastname = createContext();
/* =========================== For Context use only ============================= */

const Compa = () => {
    return (
        <>
            <Firstname.Provider value={'Shubham'}>
                <Lastname.Provider value={'Verma'}>
                    <h1>Component from A</h1>
                    <Compb />
                </Lastname.Provider>
            </Firstname.Provider>            
        </>
    );
}

export default Compa;
export {Firstname, Lastname};