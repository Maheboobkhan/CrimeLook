import React, {useEffect, useState} from 'react'
import "../Gallery/Gallery.css";
import Navbar from '../MainPage/Navbar/Navbar';
import Footer from '../MainPage/Footer/Footer';
import Modal from '../ModelToShowImage/Model';
import AOS from 'aos';
import 'aos/dist/aos.css';
        import Image0 from "../Gallery/GalleryImage/1.jpg";
        import Image1 from "../Gallery/GalleryImage/2.jpg";
        import Image2 from "../Gallery/GalleryImage/3.jpg";
        import Image3 from "../Gallery/GalleryImage/4.jpg";
        import Image4 from "../Gallery/GalleryImage/5.jpg";
        import Image5 from "../Gallery/GalleryImage/6.jpg";
        import Image6 from "../Gallery/GalleryImage/7.jpg";
        import Image7 from "../Gallery/GalleryImage/8.jpg";
        import Image8 from "../Gallery/GalleryImage/9.jpg";

const MagazineGallery = () => {
  const images = [Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]
  const [selectedImage, setSelectedImage] = useState(null);
    useEffect(()=>{
        AOS.init({duration: 1000, once:true})
    }, [])


    const closeModal = () => {
      setSelectedImage(null);
  };
  return (
    <div>
        <Navbar />
    <div className='gallery-container' data-aos="zoom-in">
      {images.map((ele)=>{
        return <img src={ele} alt='image' onClick={() => setSelectedImage(ele)} />
      })}
    </div>
    <Footer />
    {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  )
}

export default MagazineGallery