import React, {useEffect} from 'react'
import "../Footer/Footer.css";
import { CiLinkedin, CiFacebook, CiTwitter } from "react-icons/ci";
import AOS from "aos";
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(()=>{
    AOS.init({duration: 300})
  }, [])
  return (
    <div className="footer-main" data-aos="zoom-in">
      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <span>Support</span>
            <a href="https://crimelook.in/">
              <li>crime look</li>
            </a>
            <a>
              <li>Spring S Technology</li>
            </a>
            <a>
              <li>centenarian</li>
            </a>
          </ul>
        </div>
        <div className="footer-content">
          <ul>
            <span>important links</span>
            <a>
              <li>till today</li>
            </a>
            <a>
              <li>daily newspaper</li>
            </a>
            <a>
              <li>crime look</li>
            </a>
          </ul>
        </div>
        <div className="footer-content socialmedia">
          <ul>
            <span>social media</span>
            <div className="socialmedia-icon">
              <a href="">
                <li>
                  <CiFacebook size={35} />
                </li>
              </a>
              <a>
                <li>
                  <CiLinkedin size={35} />
                </li>
              </a>
              <a>
                <li>
                  <CiTwitter size={35} />
                </li>
              </a>
            </div>
          </ul>
        </div>

        <div className="footer-content">
          <ul>
            <span>Privacy Policy</span>
            <li>
              All rights of this website are reserved, copying any part is a
              crime!
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-container">
        <div>
          <span>Copyright © 2013</span>
          <a href="https://crimelook.in/" target="_blank">Crime Look</a>
        </div>
        <div>
          <span>Designed & Maintained by</span>
          <a href="https://springstrategies.in/public_html/" target="_blank">
            SPRING S TECHNOLOGIES | ISO 9001:2008
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
