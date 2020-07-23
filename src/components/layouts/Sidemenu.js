import React from 'react';
import '../styling/sidemenu.scss';

const Sidemenu = () => {
  return (
    <div className='sidemenu'>
      <div className='humberger'>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <span className='title'>Home</span>
        </li>
        <li>
          <span className='title'>About</span>
        </li>
        <li>
          <span className='title'>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
