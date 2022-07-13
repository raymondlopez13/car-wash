import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_APPOINTMENT_TIME, UPDATE_APPOINTMENT_TYPE } from '../utils/actions';
 
function AppointmentTimes({ props }) {
  //global state
  const [ state, dispatch ] = useStoreContext(); 
  //initial appointment time
  const [ appTime, setTime ] = useState('');
  // checks if there are any times
  if (props === undefined) {
    props = [];
  }
  // adds PM and AM to times
  const times = props.map(time => {
    if(time === 8 || time === 9 || time === 10 || time === 11) {
        return time = `${time}am`;
    } else {
        return time = `${time}pm`;
    }
  });
  useEffect(() => {
    if(appTime !== '') {
      let appointmentTime = appTime;
      appointmentTime = appointmentTime.replace('am', '');
      appointmentTime = appointmentTime.replace('pm', '');
      dispatch({
        type: UPDATE_APPOINTMENT_TIME,
        time: appointmentTime
      })
    }
    console.log(state);
  }, [appTime, dispatch]);

  return (
    <div>
      <h2 className=''>Appointment times for: {state.date}</h2>
      {times.map(time => (
        <button type='button' key={time} id={time} onClick={() => setTime(time)} className='app-time-btn'>{time}</button>
      ))}
    </div>
  );
}

export default AppointmentTimes;