import React from 'react';
import PostLoader from '../../images/post-loader.svg';
import '../styling/page.scss';

const Contact = () => {
  return (
    <div className='page'>
      <div className='content'>
        <h2>Contact page</h2>
        <img src={PostLoader} alt='Post loader' />
      </div>
    </div>
  );
};

export default Contact;
