import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminApps from '../components/AdminApps';

// const api = axios.create({
//     baseURL: `https://carwashyeah.herokuapp.com/api/`
//   });
const api = axios.create({
    baseURL: `http://localhost:3001/api/`
});

function Admin() {
    const [apps, setApps] = useState([]);
    const [newApps, setNewApps] = useState([]);
    const [loading, setLoading] = useState(true);
    //get appointments
    useEffect(() => {
        api.get('/').then(apps => {
            const appointments = apps.data;
            const newAppointments = appointments.filter(appointment => appointment.newAppointment === true);
            const oldAppointments = appointments.filter(appointment => appointment.newAppointment === false);
            setNewApps(newAppointments);
            setApps(oldAppointments);
            setLoading(false);
        }).catch(err => console.log(err));
    }, [])
    
  return (
    <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                {newApps.length > 0 ? (
                    <table className='bg newApps'>
                        <caption><h2>New Appointments</h2></caption>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Confirm</th>
                        </tr>
                        {newApps.map(appointment => (
                            <AdminApps props={appointment} />
                        ))}
                    </table>
                ) : (
                    <h1 className='bg'>No new appointments</h1>
                )}
                <table className='bg'>
                    <caption><h2>Current Appointments</h2></caption>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
                {apps.map(appointment => (
                    <AdminApps props={appointment} />
                ))}
            </table>
            </div>
        )}
    </div>
  );
}

export default Admin;