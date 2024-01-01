import React, { useEffect, useState } from 'react'
import "../Magazine/Magazine.css";
import {Link} from 'react-router-dom'
import CoverMagazine from "../Magazine/cover.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../ModelToShowImage/Model';

const images = [CoverMagazine]

const Magzine = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(()=>{
    AOS.init({duration: 1000, once:true})
  },[])


  const closeModal = () => {
    setSelectedImage(null);
};
  return (
    <div className='magazine-container'>
        <div className="magzine-heading" data-aos="fade-up-left">
          <h1>MAGAZINE</h1>
          <div></div>
        </div>
        <div className='magazine-cover' data-aos="fade-up-right">
          {images.map((ele)=>{
            return <img src={ele} onClick={() => setSelectedImage(ele)} />
          })}
          <Link to='/magazines' style={{textDecoration: 'none'}}><p className='view-all-magazine'>View All Magazine</p></Link>
        </div>
        {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  )
}

export default Magzine