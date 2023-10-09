import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import iconbitcoin from '../util/icons/icon-bitcoin-card.svg';
import lineup from '../util/icons/line-up.svg';
import linebottom from '../util/icons/line-bottom.svg';
import share from '../util/icons/icon-share.svg';
import googles from '../util/icons/icon-google-1.svg';
import camera from '../util/icons/icon-camera.svg';
import pencil from '../util/icons/icon-design-pencil.svg';
import group from '../util/icons/group.svg';
import Mybottons from '../components/Mybuttons';
import peopleimg from '../util/imgs/image-16.png';
import SlideTextBanner from '../components/Slidetextbanner';

const env = process.env;

const Mainpage = ( () => {
  return (
    <main>
      <section className="main__section__1">
        <video muted autoPlay loop>
          <source src='/assets/imgs-main/main-video.mp4'
                  width={1280} height={670} 
                  alt="mainbanner" 
                  type="video/mp4" />
        </video>
      </section>
      <section className="main__section__2">
        <div className="main__description">
          <div className="main__text">
            <span className="main__text-title">
              <div>Welcome to</div>
              <div>AGORA PRODUCTION</div>
            </span>
            <span className="main__text-explain">Agora is a public open space 
                  used for assemblies and markets in ancient Greek. 
                  Just like agora, we wanted to create an “open space” 
                  platform for all people.</span>
          </div>
          <div className="main__imgs">
            <img src={env.PUBLIC_URL + '/assets/imgs-main/main_img1.png'} 
                width={'465px'} 
                alt="streetimgs"/>
            <img src={env.PUBLIC_URL + '/assets/imgs-main/main_square.png'} 
                width={'317px'} 
                className="main__imgs__squre-img"
                alt="square" />
          </div>
        </div>
        <div className="main__last-text">
          <img src={lineup} alt='lineup' />
          <div className="main__last-text__space">AGORA AS OPEN SPACE</div>  
        </div>  
      </section>
      <section className="main__section__3">
        <div className="left__text">Our Services</div>
        <div className="right__text">Discover our marketing company, 
          delivering creative solutions to over 70 clients 
          and partners. From digital marketing to brand 
          development, our passionate team crafts tailored 
          strategies for maximum impact and ROI
        </div>
      </section>
      <section className="main__section__4">
        <img src={linebottom} 
             className='main__line-bottom'
             alt='linebottom' />
       
        <div className='main__figure'>
          <div className='main__figure__item'>
            <span className='item__title'>+ 70</span>
            <span className='item__people'>Clients</span>
          </div>
          <div className='main__figure__item'>
            <span className='item__title'>+ 10</span>
            <span className='item__people'>Partners</span>
          </div>
        </div>
        <div className='main__icon__wrapper'>
          <div className='main__icons__box'>
            <div className='main__icon__items-left'>
              <img src={share} alt='share'/>
              <span className='icon__item__title'>Branding / Marketing</span>
              <span className='icon__item__explain'>Branding defines identity, marketing shares to world</span>
            </div>
            <div className='main__icon__items-left'>
              <img src={googles} alt='googles'/>
              <span className='icon__item__title'>Google Business set up</span>
              <span className='icon__item__explain'>Online presence with our Google Business set up</span>
            </div>
          </div>
          <div className='main__icons__box'>
            <div className='main__icon__items-left'>
                <img src={camera} alt='camera'/>
                <span className='icon__item__title'>Photo / Videography</span>
                <span className='icon__item__explain'>Expert photo/videography services for your marketing</span>
            </div>
            <div className='main__icon__items-left'>
                <img src={iconbitcoin} alt='iconbitcoin'/>
                <span className='icon__item__title'>SEO set up</span>
                <span className='icon__item__explain'>Boost online visibility with our professional SEO set up</span>
            </div>
          </div>
          <div className='main__icons__box'>
            <div className='main__icon__items-left'>
                <img src={pencil} alt='pencil'/>
                <span className='icon__item__title'>Web / App Design</span>
                <span className='icon__item__explain'>Transform your vision into reality with our design</span>
            </div>
            <div className='main__icon__items-left'>
                <img src={group} alt='group'/>
                <span className='icon__item__title'>News / Ads</span>
                <span className='icon__item__explain'>Stay informed with our compelling news and ads </span>
            </div>
          </div>
        </div>
        <div className='main__fourth__btns'>
         <Mybottons text={'Find more about service'} />
        </div>
      </section>
      <SlideTextBanner />
      {/* <section className="main__section__5">
        <div className='main__fifth__left'>
          <div className='main__fifth__text-box'>
            <span className='left__title'>Partners of</span>
            <span className='left__subtitle'>AGORA</span>
          </div>
        </div>
        <div className='main__fifth__right'>
          <Carousel />
        </div>
      </section> */}
      <section className="main__section__6">
        <div className='main_article__wrapper'>
          <div className='main__article__title'>
            <span>Hear from</span>
            <span>AGORA&#39;s CLIENTS</span>
            <span>& PARTNERS</span>
          </div>
          <div className='main__article__explain'>
            <span>
              Join Agora crew, unlock unparalleled growth with 
              innovative marketing solutions. We will help you 
              the best with visionary thoughts, strategies, and designs.
            </span>
          </div>
        </div>
        <div className='main__article__circle-up'>
          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="55" viewBox="0 0 110 55" fill="none">
            <path d="M108 55C108 25.7289 84.2711 2 55 2C25.7289 2 2 25.7289 2 55" stroke="black" strokeWidth="2.3"/>
          </svg>
          <span>Agora</span>
        </div>
      </section>
      <section className="main__section__7">
        <div className='main__article__circle-bottom'>
          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="55" viewBox="0 0 110 55" fill="none">
            <path d="M2 -9.26681e-06C2 29.2711 25.7289 53 55 53C84.2711 53 108 29.2711 108 0" stroke="white" strokeWidth="2.3"/>
          </svg>
          <span>Production</span>
        </div>
        <Swiper
             modules={[Autoplay]}
             rewind={true}
             slidesPerView={3} 
             loop={true} 
             autoplay={{ delay: 5000, disableOnInteraction: false }}
             className='MySwiper'
             spaceBetween={37}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='main__wrap'>
          <div className='main__slide__box-logo'>
            <span className='float__imgs'>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="#767676">
                <circle cx="58" cy="58" r="58" fill="#767676"/>
              </svg>
            </span>
            <span className='float__txt'>Vibe</span>
          </div>
          <div className='main__slide__box-text'>
            “I can't say enough good things about Agora production. With their strategic guidance and engaging content, we've witnessed a steady growth in our follower base, and our posts now receive much higher levels of interaction.”
          </div>
          <div className='main__slide__box-verb1'>
            <span>Daniel Samuel Flowrence,</span>
            <span>Spain Vibe Tour</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main__wrap'>
          <div className='main__slide__box-logo'>
            <span className='float__back__imgs'>
              <img src={env.PUBLIC_URL + '/assets/imgs-main/image-36.png'} alt='outtake' />
            </span>
          </div>
          <div className='main__slide__box-text'>
          “Agora Canada demonstrates a meticulously planning and executing visual communication strategies. As a dedicated partner, we remain steadfast in our pursuit of optimal solutions, consistently progressing with an unwavering commitment to efficiency and systematization.”
          </div>
          <div className='main__slide__box-verb2'>
            <span>Jusung Hyung,</span>
            <span>outtake</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main__wrap'>
          <div className='main__slide__box-logo'>
            <span className='float__imgs'>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="#767676">
                <circle cx="58" cy="58" r="58" fill="#767676"/>
              </svg>
            </span>
            <span className='float__txt'>KIM</span>
          </div>
          <div className='main__slide__box-text'>
          “It was my honor to work with this wonderful company! The preview video in my album results from his passion and deep research. 
           I am very glad to introduce his enthusiasm to you guys. I know that he will do his best for his fantastic clients!”
          </div>
          <div className='main__slide__box-verb1'>
            <span>Jiyun Kim,</span>
            <span>Pianist</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main__wrap'>
          <div className='main__slide__box-logo'>
            <span className='float__imgs'>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="#767676">
                <circle cx="58" cy="58" r="58" fill="#767676"/>
              </svg>
            </span>
            <span className='float__txt'>KIM</span>
          </div>
          <div className='main__slide__box-text'>
          “It was my honor to work with this wonderful company! The preview video in my album results from his passion and deep research. 
           I am very glad to introduce his enthusiasm to you guys. I know that he will do his best for his fantastic clients!”
          </div>
          <div className='main__slide__box-verb1'>
            <span>Jiyun Kim,</span>
            <span>Pianist</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

     {/* <div className='main__slide__box'>
          <ul>
            <li>
              <div className='main__slide__box-logo'>
                <span className='float__imgs'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="#767676">
                    <circle cx="58" cy="58" r="58" fill="#767676"/>
                  </svg>
                </span>
                <span className='float__txt'>Vibe</span>
              </div>
              <div className='main__slide__box-text'>
                “I can't say enough good things about Agora production. With their strategic guidance and engaging content, we've witnessed a steady growth in our follower base, and our posts now receive much higher levels of interaction.”
              </div>
              <div className='main__slide__box-verb'>
                <span>Daniel Samuel Flowrence,</span>
                <span>Spain Vibe Tour</span>
              </div>
            </li>
            <li>
              <div className='main__slide__box-logo'>
                <span className='float__back__imgs'>
                  <img src={env.PUBLIC_URL + '/assets/imgs-main/image-36.png'} alt='outtake' />
                </span>
              </div>
              <div className='main__slide__box-text'>
              “Agora Canada demonstrates a meticulously planning and executing visual communication strategies. As a dedicated partner, we remain steadfast in our pursuit of optimal solutions, consistently progressing with an unwavering commitment to efficiency and systematization.”
              </div>
              <div className='main__slide__box-verb'>
                <span>Jusung Hyung,</span>
                <span>outtake</span>
              </div>
            </li>
          </ul>
        </div> */}



      </section>
      <section className="main__section__8">
        <article className='main__article__contact'>
          <div className='main__contact__title'>
            <span>Get in touch with</span>
            <span>AGORA PRODUCTION</span>
          </div>
          <div className='main__contact__explain'>
            Tell us a little bit about your 
            project / company / concern. <br />
            We&#39;ll be in touch shortly.
          </div>
          <div className='main__contact__forms'>
            <label>Name</label>
            <input type='text' />
          </div>
          <div className='main__contact__forms'>
            <label>E-mail</label>
            <input type='text' />
          </div>
          <div className='main__contact__forms'>
            <label>Phone</label>
            <input type='text' />
          </div>
          <div className='main__contact__forms'>
            <label>Please add details or relevant questions</label>
            <textarea />
          </div>
          <div>
            <Mybottons text={'Get Free Consultation'}/>
          </div>
        </article>
        <div className='main__contact__pic'>
          <img src={peopleimg} alt='peopleimg' width={390} height={1309}/>
        </div>
      </section>
    </main> 
  )
})

export default Mainpage;