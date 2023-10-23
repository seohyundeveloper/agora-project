import '../styles/Ourteam.scss';
import React from 'react';
import teambanner from '../util/imgs/image-18.png';
import danny from '../util/imgs/image-37.png';
import chloe from '../util/imgs/image-31.png';
import noah from '../util/imgs/image-34.png';
import peopleback from '../util/imgs/peopleback.png';
import kim from '../util/imgs/image-39.png';
import jen from '../util/imgs/image-33.png';
import park from '../util/imgs/image-32.png';
import ju from '../util/imgs/ju.png';


const Ourteam = ( () => {
  return(
    <>
    <div className='team__wrapper'> 
      <img src={teambanner} alt='teambanner' 
           className='team__top__banner-mobile'
           width={1280} height={268}/>
      <section className='team__introduce'>
        <div className='team__introduce__title'>
          <span>OUR TEAM,</span>
          <span>COMPANY PRIDE</span>
        </div>
        <div className='team__introduce__explain'>
          Our team comprises visionary thinkers, 
          strategists, designers, each brining their own creative flair 
          that synergizes the power of innovation.
        </div>
        <div className='team__introduce__line'>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="190" viewBox="0 0 8 257" fill="none">
            <path d="M4 0.8C2.23269 0.8 0.8 2.23269 0.8 4C0.8 5.76731 2.23269 7.2 4 7.2C5.76731 7.2 7.2 5.76731 7.2 4C7.2 2.23269 5.76731 0.8 4 0.8ZM3.4 4L3.39999 257L4.59999 257L4.6 4L3.4 4Z" fill="#8A8A8A"/>
          </svg>
        </div>
      </section>
      <section className='team__ceo__say'>
        <div className='team__ceo__term'>
          <span>“ Creativity is the untamed imagination by a focused vision. “</span>
          <span>- Danny Hwang, CEO</span>
        </div>
      </section>
      <section className='team__picture__wrapper'>
        <div className="team__picture__box">
          <div className='team__picture__title'>
            <div className='team__picture__text-1'>
              <span>Introducing</span>
              <span>Our Teammate</span>
            </div>
            <div className='team__picture__text-2'>
              <span>2019</span>
              <span>Vancouver</span>
              <span>Canada</span>
            </div>
          </div>
        </div>
        <div className="team__picture__list-box">
          <div className="team__picture__float-1">2001</div>
          <div className="team__picture__float-2">11</div>
          <div className="team__picture__float-3">08</div>
          <ul className="team__picture__list">
            <li>
              <div className="img-list__image">
                <img src={danny} alt="danny" />
              </div>
              <div className="img-list__text">
                <span className="img-list__text-up">Danny Hwang</span>
                <span className="img-list__text-down">
                  <div>CEO</div>
                  <div>Founder</div>
                </span>
              </div>
            </li>
            <li>
              <div className="img-list__image">
                <img src={chloe} alt="chloe" />
              </div>
              <div className="img-list__text">
                <span>Spain Branch Director</span>
                <span className="img-list__text__back">Chloe Kwon</span>
              </div>
            </li>
            <li>
              <div className="img-list__image">
                <img src={noah} alt="noah" />
              </div>
              <div className="img-list__text">
                <span className="img-list__text-up">Noah Yun</span>
                <span className="img-list__text-down">
                  <div>UX UI Designe</div>
                  <div>Product Designer</div>
                </span>
              </div>
            </li>
            <li>
              <div className="img-list__image">
                <div>
                  <img src={peopleback} alt="peopleback" className="back__picture"/>
                </div>
              </div>
              <div className="exception__img">
                <img src={kim} alt="kim" className="front__picture"/>
              </div>
              <div className='front__picture__text'>
                <span>Developer</span>
                <span className='front__picture__text-right'>
                  <div>Sangwook Yun</div>
                  <div>Hendrik Kim</div>
                </span>
              </div>
            </li>
            <li>
              <div className="img-list__image">
                <img src={jen} alt="jen" />
              </div>
              <div className="img-list__text">
                <span className='img-list__text-back'>Jen Kwon</span>
              </div>
            </li>
          </ul>
          <div className="picture__list__add">
            <ul className="picture__list__add__list">
              <li>
                <div className="add__list-text">
                  <span className="add__list-text__back">GeunBeom Park</span>
                </div>
                <div className="add__list-img">
                    <img src={park} alt="park" />
                </div>
              </li>
              <li>
                <div className="add__list-text">
                  <div className="add__list-text__align">
                    <span className="add__list-text__align-back">Jusung Hyung</span>
                    <div className="add__list-text__align-down">
                      <span>Photographer</span>
                      <span>Videographer</span>
                    </div>                   
                  </div>
                </div>
                <div className="add__list-img">
                  <img src={ju} alt="ju" />
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </div>
    
    </>
  )
});

export default Ourteam;