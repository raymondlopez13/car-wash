import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://carwashyeah.herokuapp.com/api/`
  });
// const api = axios.create({
//     baseURL: `http://localhost:3001/api/`
// });
function AdminApps(props) {
    const app = props.props;
    function deleteApp() {
        api.delete(`/${app._id}`).then(appointment => window.location.reload()).catch(err => console.log(err));
        
    }
    return (
        <tr className='Admin-app-times-container'>
            <th>{app.name}</th>
            <th>{app.phone}</th>
            <th>{app.address}</th>
            <th>{app.time}</th>
            <th>{app.date}</th>
            <button type='button' onClick={deleteApp}>delete</button>
        </tr>
    );
}

export default AdminApps;