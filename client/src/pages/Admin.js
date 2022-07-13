import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminApps from '../components/AdminApps';

const api = axios.create({
    baseURL: `https://carwashyeah.herokuapp.com/api/`
  });
// const api = axios.create({
//     baseURL: `http://localhost:3001/api/`
// });

function Admin() {
    const [apps, setApps] = useState([]);
    const [newApps, setNewApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLogin] = useState(false);

    function login() {
        const pass = document.getElementById('password').value;
        if(pass === '???!!!') {
            setLogin(true);
            localStorage.setItem('loggedIn', true);
        }
    }
    function logout() {
        localStorage.removeItem('loggedIn');
        window.location.reload();
    }
    //get appointments
    useEffect(() => {
        console.log(localStorage.getItem('loggedIn'));
        if(localStorage.getItem('loggedIn') === 'true') {
            setLogin(true);
        }
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
    <div className='admin-table'>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                {loggedIn ? (
                    <div>
                        {newApps.length > 0 ? (
                            <table className='newApps'>
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
                            <h1 className=''>No new appointments</h1>
                        )}
                        <table className=''>
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
                        <div className=''><button type='button' onClick={logout} className='logout'>Log Out</button></div>
                    </div>
                ) : (
                    <form className=''>
                        <label>Password:</label>
                        <input type='text' id='password'/>
                        <button type='button' onClick={login} className='logout'>Login</button>
                    </form>
                )}
            </div>
        )}
    </div>
  );
}

export default Admin;