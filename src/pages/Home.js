import React from 'react';
import '../styles/home.css'
import Banner from '../components/banner'
import Service from '../components/service'
import Testimonial from '../components/testimonial'


const home = () => {
  return (
    <div className='homepage'>
      <h1>Home Page</h1>
      <Banner />
      <Service />
      <Testimonial />
    </div>
  );
};

export default home;
