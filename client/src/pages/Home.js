import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import About from '../components/About';


function Home() {
  return (
    <div className="grid">
        <div className="insta-container">
          <a href="#"><FaInstagramSquare className="insta"/></a>
        </div>
        <div className='Book-btn-container'>
          <button className='Book-btn'><a href='/appointment'>Book Now</a></button>
        </div>
        <About />
      </div>
  );
}

export default Home;