import React, {useEffect, useState} from 'react';


function AppointmentTimes(props) {
    const times = props.props.map(time => {
        if(time === 8 || time === 9 || time === 10 || time === 11) {
            return time = `${time}am`;
        } else {
            return time = `${time}pm`;
        }
    });
    const month = props.month + 1;
    const date = props.date;
    const year = props.year;
    const fullDate = `${month}/${date}/${year}`;
    console.log(fullDate);
    return (
        <div className='App-times-container'>
            {times.map(time => (
                <button key={time} className='App-time-btn'><a href={`/booking?time=${time}&date=${fullDate}`}>{time}</a></button>
            ))}
        </div>
    );
}

export default AppointmentTimes;