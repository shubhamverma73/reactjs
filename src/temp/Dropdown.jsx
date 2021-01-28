//https://www.npmjs.com/package/react-select-search
import React, { useState } from 'react';
import SelectSearch from 'react-select-search';
import '../assets/search.css';
import { countries } from '../assets/data';

const Dropdown = () => {

    const[size, setSize] = useState();
    console.log(size);

    /*const onChangeData = (event) => {
        console.log(event.target.value);
    }*/

    return (
        <>
            <SelectSearch options={countries} onChange={setSize} search value={size} name="language" placeholder="Choose your language" />
        </>
    );
}

export default Dropdown;