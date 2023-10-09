import Carousel from "./Carousel";
import React from 'react';

const SlideTextBanner = ( () => {
  return (
    <>
     <section className="main__section__5">
        <div className='main__fifth__left'>
          <div className='main__fifth__text-box'>
            <span className='left__title'>Partners of</span>
            <span className='left__subtitle'>AGORA</span>
          </div>
        </div>
        <div className='main__fifth__right'>
          <Carousel />
        </div>
      </section>
    </>
  )
})

export default SlideTextBanner;