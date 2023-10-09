import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';

const Carousel = (() =>{
  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear"
  }
  return (
    <>
      <Slider {...settings}>
            <div className="slick__text">
              <h3>outtake</h3>
            </div>
            <div className="slick__text">
              <h3>SOODA</h3>
            </div>
            <div className="slick__text">
              <h3>Spain Vibe Tour</h3>
            </div>
            <div className="slick__text">
              <h3>West Pacific</h3>
            </div>
            <div className="slick__text">
              <h3>Map</h3>
            </div>
            <div className="slick__text">
              <h3>MAPO</h3>
            </div>
            <div className="slick__text">
              <h3>Cornerstone College</h3>
            </div>
            <div className="slick__text">
              <h3>GIGU</h3>
            </div>
            <div className="slick__text"> 
              <h3>LET EAT GO</h3>
            </div>
            <div className="slick__text">
              <h3>Byeol Bam</h3>
            </div>
      </Slider>
    </>
  )
})

export default Carousel;