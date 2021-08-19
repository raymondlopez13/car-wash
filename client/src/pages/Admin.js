import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminApps from '../components/AdminApps';

// const api = axios.create({
//     baseURL: `https://carwashyeah.herokuapp.com/api/`
//   });
const api = axios.create({
    baseURL: `https://localhost:3001/api/`
});

function Admin() {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    //get appointments
    useEffect(() => {
        api.get('/').then(apps => {
            const appointments = apps.data;
            setApps(appointments);
            setLoading(false);
        }).catch(err => console.log(err));
    }, [])
    
  return (
    <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <table>
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
        )}
    </div>
  );
}

export default Admin;