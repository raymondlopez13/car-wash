import React, { useState, useEffect } from 'react';
import AppointmentTimes from './Calender';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_APPOINTMENT_TYPE } from '../utils/actions';
import DetailForm from './DetailForm';
import PayPal from './PayPal';


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
    }, [calender, dispatch])

    return (
        <div>
            <div className="detail">
                {calender === '' && 
                    <div>
                        <p>
                    A basic vaccuum and general cleaning of your vehicle.
                    </p>
                    <h2>Car Detail $100</h2>
                    <button type='button' className="services-btn btn" onClick={() => setCalender('basic')}>Select</button>
                    </div>
                }
                {(calender === 'basic' && state.time === '') &&
                    <AppointmentTimes props='Car Wash'/>
                }
                {(calender === 'basic' && state.time.length > 0 && state.name.length === 0) &&
                    <DetailForm />
                }
                {(calender === 'basic' && state.time.length > 0 && state.name.length > 0) &&
                    <PayPal />
                }
            </div>

            <div className="detail">
                {calender === '' && 
                    <div>
                        <h2>Truck Detail $125</h2>
                    <button type='button' className="services-btn btn" onClick={() => setCalender('advanced')}>Select</button>
                    </div>
                }
                {(calender === 'advanced'  && state.time === '') &&
                    <AppointmentTimes props='Truck Wash'/>
                }
                {(calender === 'advanced' && state.time.length > 0 && state.name.length === 0) &&
                    <DetailForm />
                }
                {(calender === 'advanced' && state.time.length > 0 && state.name.length > 0) &&
                    <PayPal />
                }
            </div>
            
        </div>
    );
}

export default Detail;