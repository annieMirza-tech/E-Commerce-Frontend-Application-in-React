import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
