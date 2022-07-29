import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from '../../image/slider1.png'
import Slider2 from '../../image/slider2.jpg'
import Slider3 from '../../image/slider3.png'

import Slider4 from '../../image/slider4.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Portfolio() {
  return (
    <div>Portfolio
        <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   spaceBetween={10}
   slidesPerView={3}
   navigation
   pagination={{ clickable: true }}
   scrollbar={{ draggable: true }}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={Slider1} width={'200px'} height={"200px"}/>
      </SwiperSlide>
      <SwiperSlide>
       <img src={Slider2} width={'200px'} height={"200px"}/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={Slider3} width={'200px'} height={"200px"}/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={Slider4}width={'200px'} height={"200px"} />
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default Portfolio