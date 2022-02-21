import React from 'react';
import '../styles/services.css'

const Services = () => {
  return (
    <div className='services'>
      <h1>Our Services</h1>
      <h3>Our Company offers the following services</h3>
      <div className='services_container'>
        <div className='services_content'>
          <h3>Airtime Subscription</h3>
          <img src="../images/eazy.PNG" alt="" />

        </div>
        <div className='services_content'>
          <h3>SMS Subscription</h3>
          <img src="../images/eazy1.PNG" alt="" />

        </div>
      </div>
    </div>

  );
};

export default Services;
