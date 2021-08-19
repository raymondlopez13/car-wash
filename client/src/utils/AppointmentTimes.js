import React, { useState, useEffect } from 'react';
import { useStoreContext } from './GlobalState';
import { UPDATE_APPOINTMENT_TIME, UPDATE_APPOINTMENT_DATE } from './actions';

function AppointmentTimes(props) {
    const [clicked, setClicked] = useState(false);
    const [time, setTime] = useState('');
    const [state, dispatch] = useStoreContext();
    // for displaying times in browser
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
    
    function clickEvent(appTime) {
        setTime(appTime);
        setClicked(true);
    }

    useEffect(() => {
        if(clicked) {
            let appTime = time;
            appTime = appTime.replace('am', '');
            appTime = appTime.replace('pm', '');
            dispatch({
                type: UPDATE_APPOINTMENT_TIME,
                time: appTime
            });
            dispatch({
                type: UPDATE_APPOINTMENT_DATE,
                date: fullDate
            });
        }
        console.log(state);
    }, [clicked, time, fullDate, dispatch])
    
    return (
        <div className='App-times-container'>
            {times.map(time => (
                <button key={time} id={time} className='App-time-btn' onClick={() => clickEvent(time)}>{time}</button>
            ))}
        </div>
    );
}

export default AppointmentTimes;