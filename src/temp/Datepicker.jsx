import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment';

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleChange = date => {
        setStartDate(date);
    }
    const NewDate = moment(startDate).format('YYYY-MM-DD');
    
    return (
        <>
            Start Date: <DatePicker selected={startDate} name="date" dateFormat="yyyy-MM-dd" onChange={handleChange} minDate={new Date()} showWeekNumbers selectsStart startDate={startDate} endDate={endDate}/><br/>
            ENd Date: <DatePicker selected={startDate} name="date" dateFormat="yyyy-MM-dd" onChange={date => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate}/>
            
            {
                NewDate
            }
            <div>{new Date(startDate).toString()}</div>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} showMonthDropdown showYearDropdown dropdownMode="select" />
        </>
    );

}
export default Datepicker;