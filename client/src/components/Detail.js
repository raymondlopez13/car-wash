import React, { useState, useEffect } from 'react';
import AppointmentTimes from './Calender';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_APPOINTMENT_TYPE } from '../utils/actions';
import DetailForm from './DetailForm';


function Detail() {
    const [ calender, setCalender ] = useState('');

    const [ state, dispatch ] = useStoreContext();

    useEffect(() => {
        if(calender !== '') {
            dispatch({
                type: UPDATE_APPOINTMENT_TYPE,
                appointmentType: calender,
                name: '',
                email: '',
                phone: '',
                time: '',
                date: '',
                address: ''
            });
        } 
    }, [calender])

    return (
        <div>
            <div className="detail">
                <h2>Basic Detail $80</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button type='button' className="services-btn btn" onClick={() => setCalender('basic')}>Select</button>
                {(calender === 'basic' && state.time === '') &&
                    <AppointmentTimes />
                }
                {(calender === 'basic' && state.time.length > 0) &&
                    <DetailForm />
                }
            </div>

            <div className="detail">
                <h2>Advanced Detail $200</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button type='button' className="services-btn btn" onClick={() => setCalender('advanced')}>Select</button>
                {(calender === 'advanced'  && state.time === '') &&
                    <AppointmentTimes />
                }
                {(calender === 'advanced' && state.time.length > 0) &&
                    <DetailForm />
                }
            </div>
            
        </div>
    );
}

export default Detail;