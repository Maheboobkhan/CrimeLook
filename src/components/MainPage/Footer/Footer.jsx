import React from 'react'
import "../Footer/Footer.css";
import { CiLinkedin, CiFacebook, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-main">
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
        <div className="footer-content important-link">
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
                  <CiFacebook className='footer-icons' size={35} />
                </li>
              </a>
              <a>
                <li>
                  <CiLinkedin className='footer-icons' size={35} />
                </li>
              </a>
              <a>
                <li>
                  <CiTwitter className='footer-icons' size={35} />
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
          <a href="https://springstrategies.in/public_html/" target="_blank">
            SPRING S TECHNOLOGIES | ISO 9001:2008
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
