import React, {useState} from 'react';
import '../Headline/Headline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Advertisement from "../Headline/advertisement.png";
import Modal from '../../ModelToShowImage/Model';

const AdvertisementCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [Advertisement];
    useEffect(()=>{
        AOS.init({duration: 1000, once: true})
    },[])

    const closeModal = () => {
      setSelectedImage(null);
  };
  return (
    <>
    <div className="advertisement-card" data-aos="fade-left"
    data-aos-anchor-placement="center-center">
      <h2>Advertisement</h2>
      {images.map((ele)=>{
        return <img src={ele} alt='advertisement' onClick={() => setSelectedImage(ele)} />
      })}
    </div>
    {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </>
  );
};

export default AdvertisementCard;