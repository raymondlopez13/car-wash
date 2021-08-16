import React from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import About from './components/About';
import { FaInstagramSquare } from 'react-icons/fa';

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
      <div className="insta-container">
        <a href="#"><FaInstagramSquare className="insta"/></a>
      </div>
      <div className='Book-btn-container'>
        <button className='Book-btn'><a href='#'>Book Now</a></button>
      </div>
      <About />
    </div>
  );
}

export default App;
