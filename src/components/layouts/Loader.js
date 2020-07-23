import React from 'react';
import '../styling/loader.scss';
import Logo from '../../images/logo.svg';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default Loader;
