// import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/banner.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src='../images/smssub.PNG' alt='' />
          </div>
          <div>
            <img src='../images/smssub1.PNG' alt='' />
          </div>
          <div>
            <img src='../images/eazy.PNG' alt='' />
          </div>
          <div>
            <img src='../images/eazy1.PNG' alt='' />
          </div>
          <div>
            <img src='../images/eazy2.PNG' alt='' />
          </div>
          <div>
            <img src='../images/smssub.PNG' alt='' />
          </div>
        </Slider>
      </div>
    );
  }
}

// function banner() {
//   return (

//     <Carousel className='banner' autoPlay infiniteLoop showIndicators={false} showStatus={false} interval={3000} showThumbs={false}>
//         <div className='banner_content'>
//             <img src='../images/smssub.PNG' alt='' />
//             <div className='content_items'>
//             <h3>Welcome to Chechi Limited</h3>
//             <h4>For faster, easy and convinient airtime loading</h4>
//             <p>Our enhanced website and application will help you easily</p> 
//             </div>


            
//         </div>
//         <div className='banner_content'>
//             <img src='../images/smssub1.PNG' alt='' />
//             <div className='content_items'>
//             <h3>Our newly improved short message services</h3>
//             <h4>To get daily sports news, betting tips, motivational quotes, visit our website</h4>
//             <p>Our user friendly website and customer care support eill work on ensuring the best of help</p> 
//             </div>



//         </div>
//     </Carousel>
//   )
// }

// export default banner