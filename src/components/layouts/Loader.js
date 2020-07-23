import React from 'react';
import '../styling/loader.scss';
import Logo from '../../images/logo.svg';

const Loader = ({ hide }) => {
  return (
    <div className={`loader ${hide ? 'hide' : ''}`}>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default Loader;
