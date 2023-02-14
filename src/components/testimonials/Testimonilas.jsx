import React, { Component } from 'react'
import Slide from './SlideData'
import './Testimonials.css'
import Slider from 'react-slick'

export default class testiMonilas extends Component {

  render() {
    const settings = {
      dots:true,
      infinite:true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll:1
    };

    return (
      <div>

        <Slider {...settings}>
          <div className="t-wrapper">
            <div className="t-name">
              What our customer are saying
            </div>
          </div>

          <div >
            <Slide />
          </div>

        </Slider>
      </div>
    );
  }

}
