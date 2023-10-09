import React from 'react';
import '../styles/Branding.scss';
import Mybottons from './Mybuttons';

const Branding = ( () => {
  return (
  <div className='brand__wrapper'>
    <section className='brand__topic-box'>
      <div className='brand__topic-box__title'>
        <p>SOODA</p>
        <div className='brand__topic-box__subtitle'>
          <ul>
            <li>Before, they..</li>
            <li>So we did..</li>
          </ul>
        </div>
      </div>
      <div className='brand__topic-box__content'>
        <ul>
          <li>Needed to carve a unique identity that resonated with the younger generation</li>
          <li>To capture the essence of a young vibe, we have embraced neon colors as the restaurant's theme</li>
          <li>Had difficulties to advertise new food or signature food by simply reposting photos posted by customers</li>
          <li>The trendy photography for signature menu also help them build their brand image.</li>
        </ul>
      </div>
    </section>
    <section className='brand__explanation-box'>
      <p>And this happened</p>
      <div className='brand__explanation-box__list'>
        <div className='brand__explanation-box__category'>
          <span>Social media influencers and young food enthusiasts flocked to Sooda due to young branding</span>
          <span>Since our advertisement was introduced, the number of customers visiting us after looking at Instagram has increased</span>
        </div>
        <div className='brand__explanation-box__num'>
          <span>171.65%</span>
          <span>growth of followers</span>
        </div>
      </div>
      <div className='brand__story-box'>
        <span className='brand__story-box__title'>Want to see full story?</span>
        <div className='brand__story-box__content'>
          <ul>
            <li>Upon understanding Sooda's unique culinary vision and target audience, our team recognized the need to carve a unique identity that resonated with the younger generation. Driven by a passion to be perceived as trendsetters in the culinary world, we set out on a creative journey to establish "Sooda" as the ultimate destination for a young and vibrant dining experience.</li>
            <li>To capture the essence of a young vibe, we have embraced neon colors as the restaurant's theme. Neon hues of electric blue, vibrant pink, and luminescent green adorned the walls, infusing the space with a captivating energy.</li>
            <li>The trendy photography for signature menu also help them build their brand image. As a result, social media influencers and young food enthusiasts flocked to "Sooda" to experience its immersive ambiance and the creative brilliance of its menu.</li>
          </ul>
        </div>
      </div>
    </section>
    <div className='brand__btns'>
        <Mybottons text={'Contact Us'}/>
    </div>
  </div>
  )
})

export default Branding;