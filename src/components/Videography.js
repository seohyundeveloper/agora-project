import '../styles/Project.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mybottons from './Mybuttons';

const Videography = ( () => {

  const navigate = useNavigate();

  const goContact = () => {
    navigate("/contact", {replace:true})
  }

  return (
   <div>
      <section className='project__detail__wrapper'>
        <div className='project__detail__box'>
          <span className='detail__title'>Pianist Jiyun Kim Music Video</span>
          <div className='detail__sub-title'>
            <span>Before, they..</span>
            <span className='move__items'>So we did..</span>
          </div>
          <div className='detail__list'>
            <ul>
              <li>unknown pianist in Canada</li>
              <li>Created a music video that would showcase the essence of her artistry</li>
              <li className='detail__exception'>Didn&#39;t have Canadian audiance</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='project__detail__explanation'>
      <div className='detail__exeplanation-up'>
       <div className='video__box'>
        <div className='video__title'>And this happened</div>
          <div className='video__subtitle'>
            <span>Official selection of composers and pianists in the fields of general and popular music</span>
            <span>preparing for second album, gaining popularity among Canadians</span>
          </div>
       </div>
      </div>
      <div className='detail__middle-title'>
        <p>Want to see full story?</p>
        <ul className='detail__middle-list'>
          <li>Prior to commencing our role as a social marketer for Delhi 6 Indian bistro, their digital presence was inadvertently disconnected from the latest trends and failed to engage with the restaurant's target audience effectively. It had fallen into an echo chamber, recycling similar types of posts without adapting to the dynamic social media landscape.</li>
          <li>When we embarked on the task of managing their social media presence, we wanted to create a content strategy that aligns with the defined objectives and resonates with the target audience. Curate a mix of visually appealing images and engaging videos that highlight the premium cocktails and unique ambiance, and needless to say, their authentic indian quisine.</li>
          <li>As a result, our data-driven approach has allowed us to continuously refine our strategies that optimize reach, engagement, and return on investment for the restaurant. The insights gained from social media analytics have steered our campaigns, ensuring that our content resonates with our target audience, resulting in increased brand loyalty and customer retention.</li>    
        </ul>
      </div>
      <div className='btn__wrapper'>
        <Mybottons text={'Contact Us'} onClick={goContact}/>
      </div>
    </section>
  </div>
  )
})

export default Videography;