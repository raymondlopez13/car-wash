import React from 'react';
import { GiTexas } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';
 

function Home() {
  return (
    <div className="bg home-grid">
      <div className='row-grid'>
        <GiTexas size="200px" className='icon icon1'/>
        <h2>Car detailing in the South Austin area</h2>
      </div>

      <div  className='row-grid'>
        <h2 className='SA'>Check our services tab to book your appointment!</h2>
        <FiSettings size="200px" className='icon icon2'/>
      </div>
    </div>
  );
}

export default Home;