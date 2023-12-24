import React, {useEffect} from 'react'
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
    useEffect(()=>{
        AOS.init({duration: 1000})
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
        <img src={Image9} alt='image' />
        <img src={Image10} alt='image' />
        <img src={Image11} alt='image' />
        <img src={Image12} alt='image' />
        <img src={Image13} alt='image' />
        <img src={Image14} alt='image' />
        <img src={Image15} alt='image' />
        <img src={Image16} alt='image' />
        <img src={Image17} alt='image' />
        <img src={Image18} alt='image' />
        <img src={Image19} alt='image' />
        <img src={Image20} alt='image' />
        <img src={Image21} alt='image' />
        <img src={Image22} alt='image' />
        <img src={Image23} alt='image' />
        <img src={Image24} alt='image' />
        <img src={Image25} alt='image' />
        <img src={Image26} alt='image' />
        <img src={Image27} alt='image' />
        <img src={Image28} alt='image' />
        <img src={Image29} alt='image' />
        <img src={Image30} alt='image' />
        <img src={Image31} alt='image' />
        <img src={Image32} alt='image' />
        <img src={Image33} alt='image' />
        <img src={Image34} alt='image' />
        <img src={Image35} alt='image' />
        <img src={Image36} alt='image' />
        <img src={Image37} alt='image' />
        <img src={Image38} alt='image' />
        <img src={Image39} alt='image' />
        <img src={Image40} alt='image' />
        <img src={Image41} alt='image' />
        <img src={Image42} alt='image' />
        <img src={Image43} alt='image' />
    </div>
    <Footer />
    </div>
  )
}

export default MagazineGallery