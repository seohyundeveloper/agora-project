import React from 'react';
import logo2 from '../util/icons/agoralogo-2.png';
import logo1 from '../util/icons/agoralogo-1.png';
import insta from '../util/icons/insta.svg';
import facebook from '../util/icons/facebook.svg';

const Footer = ( () => {
  return (
    <>
      <footer>
       <div className='footer__wrapper'>
        <div className="footer__up">
            <div className='footer__logos'>
              <img src={logo2} alt='footer-logo2' className='logo__imgs__1'/>
              <img src={logo1} alt='footer-logo1' className='logo__imgs__2'/>
            </div>
            <div className='footer__manu'> 
              <span>Our Team</span>
              <span>Service</span>
              <span>Project</span>
              <span>Contact us</span>
            </div>
            <div className='footer__icons'>
              <img src={insta} alt='insta'/>
              <img src={facebook} alt='facebook'/>
            </div>
          </div>
          <div className="footer__bottom"> 
            <div className='footer__right'>© 2023 by AGORA Production.</div>
            <div className='footer__term'>
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
            </div>
          </div>
       </div>
      </footer>
    </>
  )
})

export default Footer;