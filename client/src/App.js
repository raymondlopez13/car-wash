import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001/api`
})
function App() {
  function getData() {
    api.get('/').then(res => {
      console.log(res.data);
    })
  }
  return (
    <div>
      <button onClick={getData}>
        Car Wash
      </button>
      
    </div>
  );
}

export default App;
