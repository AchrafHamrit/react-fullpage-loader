import React from 'react';
import PostLoader from '../../images/post-loader.svg';
import '../styling/page.scss';

const About = () => {
  return (
    <div className='page'>
      <div className='content'>
        <h2>About page</h2>
        <img src={PostLoader} alt='Post loader' />
      </div>
    </div>
  );
};

export default About;
