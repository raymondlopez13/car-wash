import React, { useState, useEffect } from 'react';

function AppointmentTimes({ props }) {
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
      //localStorage.setItem('appTime', appointmentTime);
    }
  }, [appTime]);

  return (
    <div>
      {times.map(time => (
        <button type='button' key={time} id={time} onClick={() => setTime(time)}>{time}</button>
      ))}
    </div>
  );
}

export default AppointmentTimes;