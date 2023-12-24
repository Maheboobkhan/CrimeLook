import React, { useEffect, useState } from 'react';
import '../News/NewsVideo.css';
import Thumbnail from "../News/thumbnail.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function NewsVideo() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])
  const [isVideoVisible, setVideoVisible] = useState(false);

  const embedUrl = "https://www.youtube.com/embed/V4PDFQZLeBA?si=Y5BuJ1tgIS97z_Ic?autoplay=1";

  const toggleVideo = () => {
    setVideoVisible(true);
  };

  return (
    <div className='news-container'>
      <div className="news-heading" data-aos="fade-up-right">
          <h1>NEWS</h1>
          <div></div>
        </div>
    <div className="youtube-video" onClick={toggleVideo}>
      {/* {!isVideoVisible && (
        <>
          <div className="play-button"></div>
          <img
            src={Thumbnail}
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
        </>
      )} */}

      (
        <iframe data-aos="fade-up-left"
          title="Embedded YouTube Video"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      )
    </div>
    </div>
  );
}

export default NewsVideo;
