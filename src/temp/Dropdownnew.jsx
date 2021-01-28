import React, { useState } from 'react';
import Select from 'react-select';
import { stateOptions } from '../assets/data_new';

const Dropdownnew = () => {

    const [options, selectedOption ] = useState();

    const handleChange = (selectedOptions) => {
        selectedOption(selectedOptions);
        console.log(selectedOptions);
    }

    return (
        <>
        <Select value={options} name="country" onChange={handleChange} options={stateOptions} />
        </>
    );
}

export default Dropdownnew;