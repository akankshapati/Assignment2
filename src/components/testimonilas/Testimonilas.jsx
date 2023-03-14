import { useState } from 'react'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Testimonilas.css"
import { data } from "./data.js"
import element from "../images/element.png"
import Card from './Card'


const Testimonilas = () => {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    dots: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        },
      },
      {
        breakpoint: 800,
        settings: {

        },
      },
    ],
  }
  return (
    <div className='container flex customers'>
      <div className="customers-data flex">
        <div className="dots top">
          <img src={element} alt="Bg-Dots" />
        </div>

        <h2 className="title">What our customer are saying</h2>
        <div className="cust-review">
          
          <Slider ref={setSliderRef} {...sliderSettings}>
            {data.map((val, index) => {
              return(
                <Card 
                key={val.id}
                img={val.img}
                title={val.title}
                position={val.position}
                review={val.review}
                />
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="dots bot">
        <img src={element} alt="Bg-Dots" />
      </div>
      <div className='controls'>
            <button onClick={sliderRef?.slickPrev}>
              <FaArrowLeft />
            </button>
            <button onClick={sliderRef?.slickNext}>
              <FaArrowRight />
            </button>
          </div>
    </div>
      
  );
};


export default Testimonilas

