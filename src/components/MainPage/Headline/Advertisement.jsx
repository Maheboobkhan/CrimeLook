import React from 'react';
import '../Headline/Headline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Advertisement from "../Headline/advertisement.png";

const AdvertisementCard = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])
  return (
    <div className="advertisement-card" data-aos="fade-left"
    data-aos-anchor-placement="center-center">
      <h2>Advertisement</h2>
      <img src={Advertisement} />
      {/* <img src={Advertisement} /> */}
      {/* <button>Shop Now</button> */}
    </div>
  );
};

export default AdvertisementCard;