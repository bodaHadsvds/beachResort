import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer-center'>
      
   <div className='footer-info'>
          <p>Developed by Abdelrahman Mustafa</p>
          <p>© Beach Resort 2024</p>
        </div>
        <ul className='social-links'>
          <li>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
       
       
  

     
      </div>
    </footer>
  );
}

export default Footer;