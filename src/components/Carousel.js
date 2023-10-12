import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Carousel = (() =>{
  return (
    <div>
      <Swiper modules={[Autoplay]}
              rewind={true}
              slidesPerView={4} 
              loop={true} 
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className='MyTextSwiper'
              spaceBetween={50}
              onSlideChange={() => {}}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
               <div className='partner__list'>
                  <h3>outtake</h3>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>SOODA</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>Spain Vibe Tour</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>West Pacific</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>MAPO</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>Cornerstone<br/>College</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>GIGU</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>LET EAT GO</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='partner__list'>
                  <h3>Byeol Bam</h3>
                </div>
              </SwiperSlide>
      </Swiper>
    </div>
  )
})

export default Carousel;