import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import AppointmentTimeButtons from './AppointmentTimeButtons';
import axios from 'axios';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_APPOINTMENT_DATE } from '../utils/actions';

const api = axios.create({
  baseURL: `http://localhost:3001/api/`
  // baseURL: `https://carwashyeah.herokuapp.com/api/`
});
function AppointmentTimes() {
  // global state
  const [ state, dispatch ] = useStoreContext();
  // set min and max dates
  let maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  
  
  // set value of calender
  const [value, setValue] = useState();

  // set initial appointment times
  const [appTimes, setAppTimes] = useState();

  // set T or F whether or not to get user info
  const [detailForm, setDetailForm] = useState(false);


  // when button in calender is clicked
  function onChange(val) {
    setValue(val)
  }

  // get rid of weekends
  function tileDisabled({ date, view }) {
    const disabledDates = [7, 5, 6];
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
  //check if value has been changed
  useEffect(() => {
    if(value !== undefined) {
      localStorage.removeItem('appTime');
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
        const month = value.getMonth() + 1;
        const date = value.getDate();
        const year = value.getFullYear();
        const fullDate = `${month}/${date}/${year}`;
        dispatch({
          type: UPDATE_APPOINTMENT_DATE,
          date: fullDate
        })
        setValue(undefined);
      });
    } 
  }, [value, dispatch]);

  return (
    <div>
      {detailForm ? (
        <div></div>
      ) : (
        <div>
            <Calendar 
              maxDate={maxDate}
              minDate={minDate}
              showNeighboringMonth={false}
              tileDisabled={tileDisabled}
              onChange={onChange}
              className='animate__animated animate__fadeInDown'
            />
            {state.date !== '' && 
              <AppointmentTimeButtons props={appTimes}/>
            }
        </div>
      )}
    </div>
  );
}

export default AppointmentTimes;