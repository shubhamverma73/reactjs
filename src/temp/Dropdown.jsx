//https://www.npmjs.com/package/react-select-search
import React from 'react';
import SelectSearch from 'react-select-search';
import '../assets/search.css';
import { countries } from '../assets/data';

const Dropdown = () => {

    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'Spanish', value: 'es'},
            ]
        },
    ]

    return (
        <>
            <SelectSearch options={options} search value="sv" name="language" placeholder="Choose your language" />
            <SelectSearch closeOnSelect={false} options={countries} search value="sv" multiple name="language" placeholder="Choose your language" />
        </>
    );
}

export default Dropdown;