import React from 'react';
import axios from 'axios';
import Nav from './components/Nav';

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
      <Nav />
    </div>
  );
}

export default App;
