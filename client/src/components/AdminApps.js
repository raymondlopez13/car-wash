import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3001/api`
  });
function AdminApps(props) {
    const app = props.props;
    function deleteApp() {
        api.delete(`/${app._id}`).then(appointment => console.log('deleted'));
        window.location.reload();
    }
    return (
        <tr className='Admin-app-times-container'>
            <th>{app.name}</th>
            <th>{app.phone}</th>
            <th>{app.time}</th>
            <th>{app.date}</th>
            <button type='button' onClick={deleteApp}>delete</button>
        </tr>
    );
}

export default AdminApps;