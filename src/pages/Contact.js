import '../styles/Contact.scss';
import React from 'react';
import site from '../util/icons/site.svg';
import call from '../util/icons/call.svg';
import env from '../util/icons/env.svg';
import Mybottons from '../components/Mybuttons';

const Contact = ( () => {
  return(
    <>
    {/* contact title */}
      <section className="contact__title__wrapper">
        <div>Get in touch with us,</div>
        <div>AGORA PRODUCTION</div>
      </section>
    {/* contact method */}
      <section className='contact__method'>
        <div className='contact__method-title'>
          <span>Let us give you</span>
          <span>Quick Support</span>
          <span>Get in touch with us when you need any help</span>
        </div>
        <div className='contact__method-list'>
          <ul className='contact__method-type'>
            <li>
              <div className='list__box__locate'>
                <div className='list__imgs'>
                  <img src={site} alt='site'/>
                  <span>Visit Us</span>
                </div>
                <div className='list__txt'>
                  <span>7673 6th St, Burnaby, BC, Canada, V3N 3M8</span>
                  <span className='time'>8:00am - 5:00pm</span>
                </div>
              </div>
            </li>
            <li>
              <div className='list__imgs'>
                <img src={call} alt='call'/>
                <span>Call Us</span>
              </div>
              <div className='list__txt'>
                <span className='calls'>(778) 323-5976</span>
              </div>
            </li>
            <li>
              <div className='list__imgs'>
                <img src={env} alt='env'/>
                <span>Email Us</span>
              </div>
              <div className='list__txt'>
                <span className='emails'>info@agoraproduction.ca</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    {/* contact team */}
      <section className='contact__team__wrapper'>
        <div className='team__title'>
          <span className='item__1'>Get in touch with</span>
          <span className='item__2'>AGORA PRODUCTION</span>
          <span className='item__3'>How can we help you?</span>
        </div>
        <div className='team__category-list'>
          <ul>
            <li>Design</li>
            <li>Marketing</li>
            <li>Branding</li>
            <li>Photo/Videography</li>
            <li>News/Ad</li>
            <li>SEO Set up</li>
            <li>Google Business Set Up</li>
          </ul>
        </div>
        <div className='team__question'>
          <span>Tell us about your vision: Which challenges are you facing? What are your goals and expectations? What would success look like and how much are you planning to spend to get there? </span>
          <span></span>
        </div>
        <div>
          <ul className='team__form-list'>
            <li>
              <label>Name</label>
              <input type='text'/>
            </li>
            <li>
              <label>E-mail</label>
              <input type='text'/>
            </li>
            <li>
              <label>Phone</label>
              <input type='text'/>
            </li>
            <li>
              <label>Subject</label>
              <input type='text'/>
            </li>
            <li>
              <label>Please add details or relevant questions</label>
              <textarea />
            </li>
          </ul>
        </div>
        <div className='team__btns'>
          <Mybottons text={'Submit'}/>
        </div>
      </section>
    </>
  )
});

export default Contact;