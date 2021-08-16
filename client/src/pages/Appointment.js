import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentTimes from '../components/AppointmentTimes';

const api = axios.create({
  baseURL: `http://localhost:3001/api`
});

function Appointment() {
  // set min and max dates
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  // set state
  const [value, setValue] = useState(minDate);
  const [appTimes, setAppTimes] = useState([8,9,10,11,12,1]);
  // changes state on click
  function onChange(val) {
    setValue(val);
  }
  //checks to see if state has been changed
  useEffect(() => {
    const appointmentTimes = [8,9,10,11,12,1];
    api.get('/').then(app => {
      let days = app.data.filter(appointment => {
        const date = appointment.date.split('/')[1];
        if(Number(date) === value.getDate()) {
          return appointment;
        }
      });
      days.forEach(appointment => {
        for(var i=0; i < appointmentTimes.length; i++) {
          if(appointment.time === appointmentTimes[i]) {
            appointmentTimes.splice(i, 1);
          }
        }
      });
      setAppTimes(appointmentTimes);
    });
    
  }, [value]);
  //disables weekends
  const disabledDates = [7, 5, 6];
  function tileDisabled({ date, view }) {
    if (view === 'month') {
      return disabledDates.find(dDate => {
        if(date.getDay() === dDate || date.getDay() + 7 === dDate) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  return (
    <div className='App-container'>
      <Calender
        onChange={onChange}
        value={value}
        maxDate={maxDate}
        minDate={minDate}
        defaultValue={minDate}
        tileDisabled = {tileDisabled}
      />
      <AppointmentTimes props={appTimes} />
    </div>
  );
}

export default Appointment;