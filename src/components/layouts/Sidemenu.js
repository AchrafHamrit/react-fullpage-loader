import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/sidemenu.scss';

const Sidemenu = ({ setNewLocation }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    setNewLocation('/' + e.target.name);
  };

  return (
    <div className='sidemenu'>
      <div className='humberger'>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <Link
            className='title'
            to='home'
            name='home'
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className='title'
            to='about'
            name='about'
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className='title'
            to='contact'
            name='contact'
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
