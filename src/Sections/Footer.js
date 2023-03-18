import React from 'react'
import FooterImg from '../imgs/gallery/gall3_h-stretch.jpg'
const Footer = () => {
  return (
    <footer>
        <div className='f-container'>
          <img src={FooterImg} alt='' width='280px' height='400px' style={{borderRadius: '10px', margin: '15px'}} />
          <div className='footer-r-side'>
            <div className='contactUs'>
              <span>You want To Contact Us</span>
              <button className='contactBtn'>Email</button>
            </div>
            <div className='links'>
              <ul className='link-list'>
                <span className='link-header'>Partnership</span>
                <li>Websites</li>
                <li>Social media</li>
                <li>Branding</li>
              </ul>
              <ul className='link-list'>
                <span className='link-header'>About</span>
                <li>Our projects</li>
                <li>Careers</li>
              </ul>
              <ul className='link-list'>
                <span className='link-header'>support</span>
                <li>Support Request</li>
                <li>Contact</li>
              </ul>
          </div>
          <div className='copyright'>
                <p>All rights reserved 2023</p>
                <div className='social-media'>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
