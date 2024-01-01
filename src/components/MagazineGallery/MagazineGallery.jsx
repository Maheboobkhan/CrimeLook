import React, {useEffect, useState} from 'react'
import Modal from '../ModelToShowImage/Model';
import "../MagazineGallery/MagazineGallery.css";
import Navbar from '../MainPage/Navbar/Navbar';
import Footer from '../MainPage/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
        import Image0 from "../MagazineGallery/GalleryImage/1.png";
        import Image1 from "../MagazineGallery/GalleryImage/2.png";
        import Image2 from "../MagazineGallery/GalleryImage/3.png";
        import Image3 from "../MagazineGallery/GalleryImage/4.png";
        import Image4 from "../MagazineGallery/GalleryImage/5.png";
        import Image5 from "../MagazineGallery/GalleryImage/6.png";
        import Image6 from "../MagazineGallery/GalleryImage/7.png";
        import Image7 from "../MagazineGallery/GalleryImage/8.png";
        import Image8 from "../MagazineGallery/GalleryImage/9.png";
        import Image9 from "../MagazineGallery/GalleryImage/10.png";
        import Image10 from "../MagazineGallery/GalleryImage/11.png";
        import Image11 from "../MagazineGallery/GalleryImage/12.png";
        import Image12 from "../MagazineGallery/GalleryImage/13.png";
        import Image13 from "../MagazineGallery/GalleryImage/14.png";
        import Image14 from "../MagazineGallery/GalleryImage/15.png";
        import Image15 from "../MagazineGallery/GalleryImage/16.png";
        import Image16 from "../MagazineGallery/GalleryImage/17.png";
        import Image17 from "../MagazineGallery/GalleryImage/18.png";
        import Image18 from "../MagazineGallery/GalleryImage/19.png";
        import Image19 from "../MagazineGallery/GalleryImage/20.png";
        import Image20 from "../MagazineGallery/GalleryImage/21.png";
        import Image21 from "../MagazineGallery/GalleryImage/22.png";
        import Image22 from "../MagazineGallery/GalleryImage/23.png";
        import Image23 from "../MagazineGallery/GalleryImage/24.png";
        import Image24 from "../MagazineGallery/GalleryImage/25.png";
        import Image25 from "../MagazineGallery/GalleryImage/26.png";
        import Image26 from "../MagazineGallery/GalleryImage/27.png";
        import Image27 from "../MagazineGallery/GalleryImage/28.png";
        import Image28 from "../MagazineGallery/GalleryImage/29.png";
        import Image29 from "../MagazineGallery/GalleryImage/30.png";
        import Image30 from "../MagazineGallery/GalleryImage/31.png";
        import Image31 from "../MagazineGallery/GalleryImage/32.png";
        import Image32 from "../MagazineGallery/GalleryImage/33.png";
        import Image33 from "../MagazineGallery/GalleryImage/34.png";
        import Image34 from "../MagazineGallery/GalleryImage/35.png";
        import Image35 from "../MagazineGallery/GalleryImage/36.png";
        import Image36 from "../MagazineGallery/GalleryImage/37.png";
        import Image37 from "../MagazineGallery/GalleryImage/38.png";
        import Image38 from "../MagazineGallery/GalleryImage/39.png";
        import Image39 from "../MagazineGallery/GalleryImage/40.png";
        import Image40 from "../MagazineGallery/GalleryImage/41.png";
        import Image41 from "../MagazineGallery/GalleryImage/42.png";
        import Image42 from "../MagazineGallery/GalleryImage/43.png";
        import Image43 from "../MagazineGallery/GalleryImage/44.png";

const MagazineGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    useEffect(()=>{
        AOS.init({duration: 1000, once: true})
    }, [])

    const closeModal = () => {
      setSelectedImage(null);
  };

    const images = [
      Image0, Image1, Image2, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image13,Image14,Image15,Image16,Image17,Image18,Image19,Image20,Image21,Image22,Image23,Image24,Image25,Image26,Image27,Image28,Image29,Image30,Image31,Image32,Image33,Image34,Image35,Image36,Image37,Image38,Image39,Image40,Image41,Image42,Image43,
  ];

  console.log("img: "+images);

  return (
    <div>
        <Navbar />
    <div className='magazine-gallery-container' data-aos="zoom-in">
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