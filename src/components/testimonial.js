import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
import '../styles/testimonal.css'

const testimonial = () => {
    return (
        <Carousel className='banner testimonial__banner' autoPlay infiniteLoop showIndicators={false} showStatus={false} interval={3000} showThumbs={false}>



            <div className='content__items testimonial__item'>
                <h3 >Perpetua Kabute</h3>
                <h4>Kabute@gmail.com</h4>
                <p>The newly developed website has helped easen airtime purchase more convniently</p>
            </div>
            <div className='content__items  testimonial__item'>
                <h3 >Graham Kavulavu</h3>
                <h4>graham@gmail.com</h4>
                <p>The availability of online SMS subscription messages has enabled me to choose from a wide variety of messages to recieve </p>
            </div>
            <div className='content__items  testimonial__item'>
                <h3 >Muhaji Abdi</h3>
                <h4>abdi@gmail.com</h4>
                <p>With the launching of the developed website, it has proven easier to know the available services that the company can offer</p>
            </div>




        </Carousel>
    )
}

export default testimonial