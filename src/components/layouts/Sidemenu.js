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
          <a className='title' href='h'>
            Home
          </a>
        </li>
        <li>
          <a className='title' href='h'>
            About
          </a>
        </li>
        <li>
          <a className='title' href='h'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
