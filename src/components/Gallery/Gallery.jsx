import React, {useEffect} from 'react'
import "../Gallery/Gallery.css";
import Navbar from '../MainPage/Navbar/Navbar';
import Footer from '../MainPage/Footer/Footer';
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
    useEffect(()=>{
        AOS.init({duration: 1000, once:true})
    }, [])
  return (
    <div>
        <Navbar />
    <div className='gallery-container' data-aos="zoom-in">
        <img src={Image0} alt='image' />
        <img src={Image1} alt='image' />
        <img src={Image2} alt='image' />
        <img src={Image3} alt='image' />
        <img src={Image4} alt='image' />
        <img src={Image5} alt='image' />
        <img src={Image6} alt='image' />
        <img src={Image7} alt='image' />
        <img src={Image8} alt='image' />
    </div>
    <Footer />
    </div>
  )
}

export default MagazineGallery