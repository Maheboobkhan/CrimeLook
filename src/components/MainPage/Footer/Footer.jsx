import React from 'react'
import "../Footer/Footer.css";
import { CiLinkedin, CiFacebook, } from "react-icons/ci";
import { PiGoogleLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <span>Support</span>
            <a href="https://crimelook.in/" target='_blank'>
              <li>Crime look</li>
            </a>
            <a href='https://springstrategies.in/' target='_blank'>
              <li>Spring S Technology</li>
            </a>
            <a>
              <li>Centenarian</li>
            </a>
          </ul>
        </div>
        <div className="footer-content important-link">
          <ul>
            <span>Important links</span>
            <a href='https://www.aajtak.in/' target='_blank'>
              <li>Aaj Tak</li>
            </a>
            <a href='https://www.bhaskar.com/' target='_blank'>
              <li>Dainik Bhaskar</li>
            </a>
            <a href='https://crimelook.in' target='_blank'>
              <li>Crime look</li>
            </a>
          </ul>
        </div>
        <div className="footer-content socialmedia">
          <ul>
            <span>Social media</span>
            <div className="socialmedia-icon">
              <a href="">
                <li>
                  <a href='https://www.facebook.com/SpringSTechnologies/' target='_blank'><CiFacebook className='footer-icons' size={35} /></a>
                </li>
              </a>
              <a>
                <li>
                  <a href='https://www.linkedin.com/in/springstech/' target='_blank'><CiLinkedin className='footer-icons' size={35} /></a>
                </li>
              </a>
              <a>
                <li>
                <a href='https://www.springstrategies.in/' target='_blank'><PiGoogleLogoLight className='footer-icons' size={35} /></a>
                </li>
              </a>
            </div>
          </ul>
        </div>

        <div className="footer-content privacy">
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
          <a href="https://springstrategies.in" target="_blank">
            SPRING S TECHNOLOGIES | ISO 9001:2008
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
