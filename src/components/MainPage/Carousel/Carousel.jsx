import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../Carousel/Carousel.css"
import AOS from "aos";
import 'aos/dist/aos.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  useEffect(()=>{
    AOS.init({duration: 300})
  }, [])
  return (
    <>
      <Swiper data-aos="zoom-in"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay={{   // Autoplay configuration
          delay: 2500,  // Delay between transitions in milliseconds
          disableOnInteraction: false  // Autoplay will not be disabled after user interactions
        }}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
