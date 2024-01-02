import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SwiperCore from 'swiper'
import "../Carousel/Carousel.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import image1 from "../Carousel/CarouselImage/1.jpg"
import image2 from "../Carousel/CarouselImage/2.jpg"
import image3 from "../Carousel/CarouselImage/3.jpg"
import image4 from "../Carousel/CarouselImage/4.jpg"
import image5 from "../Carousel/CarouselImage/5.jpg"
import image6 from "../Carousel/CarouselImage/6.jpg"
import image7 from "../Carousel/CarouselImage/7.jpg"
import image8 from "../Carousel/CarouselImage/8.jpg"
import image9 from "../Carousel/CarouselImage/9.jpg"
import image10 from "../Carousel/CarouselImage/10.jpg"
import image11 from "../Carousel/CarouselImage/11.jpg"
import image12 from "../Carousel/CarouselImage/12.jpg"
import image13 from "../Carousel/CarouselImage/13.jpg"
import image14 from "../Carousel/CarouselImage/14.jpg"
import image15 from "../Carousel/CarouselImage/15.jpg"
import image16 from "../Carousel/CarouselImage/16.jpg"
import image17 from "../Carousel/CarouselImage/17.jpg"
import image18 from "../Carousel/CarouselImage/18.jpg"

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Carousel() {
  useEffect(()=>{
    AOS.init({duration: 300, once: true})
  }, [])

  const images = [
    image10,image11,image12,image13,image14,image15,image16,image17,image18, image1,image2,image3,image4,image5,image6,image7,image8,image9
  ]

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
        {images.map((ele)=>{
          return <SwiperSlide>
          <img data-aos='flip-left' src={ele} alt="Nature 1" />
        </SwiperSlide>  
        })}
      </Swiper>
    </>
  );
}