import React, { useEffect } from 'react'
import "../Magazine/Magazine.css";
import {Link} from 'react-router-dom'
import CoverMagazine from "../Magazine/cover.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Magzine = () => {
  useEffect(()=>{
    AOS.init({duration: 1000, once:true})
  },[])
  return (
    <div className='magazine-container'>
        <div className="magzine-heading" data-aos="fade-up-left">
          <h1>MAGAZINE</h1>
          <div></div>
        </div>
        <div className='magazine-cover' data-aos="fade-up-right">
          <img src={CoverMagazine} />
          <Link to='/magazines' style={{textDecoration: 'none'}}><p className='view-all-magazine'>View All Magazine</p></Link>
        </div>
    </div>
  )
}

export default Magzine