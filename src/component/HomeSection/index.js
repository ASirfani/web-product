import React from 'react';
import './index.css';
import TemplateCard from '../TemplateCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSection = ({title}) => {
  const sliderSettings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 0.25,
    swipeToSlide: false,
    slidesToShow: 1,
    focusOnSelect: true,
  };

  return (
    <div className="newproducts">
      <div className='section-title'>
        <h3>{title ? title: "Section"}</h3>
      </div>
      <div className='container '>
        <Slider {...sliderSettings}>
          <div >
            <div className='sliders'>
              <TemplateCard />
              <TemplateCard />
              <TemplateCard />
              <TemplateCard />
            </div>

          </div>
          <div >
            <div className='sliders'>
              <TemplateCard />
              <TemplateCard />
              <TemplateCard />
              <TemplateCard />
            </div>

          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSection;
