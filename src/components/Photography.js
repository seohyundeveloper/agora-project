import { useNavigate } from 'react-router-dom';
import '../styles/Project.scss';
import Mybottons from './Mybuttons';
import React from 'react';

const Photography = ( () => {
  const navigate = useNavigate();

  const goContact = () => {
    navigate("/contact", {replace:true})
  }
  
  return (
    <>
    {/* project detail */}
      <section className='project__detail__wrapper'>
        <div className='project__detail__box'>
          <span className='detail__title'>Delhi 6 Indian bistro</span>
          <div className='detail__sub-title'>
            <span>Before, they..</span>
            <span className='move__items'>So we did..</span>
          </div>
          <div className='detail__list'>
            <ul>
              <li>Disconnected from trends</li>
              <li>Created online content strategy</li>
              <li>Failed to engage with audience</li>
              <li>Curate a mix of visually appealing images & Videos</li>
              <li>Fell into an echo chamber</li>
            </ul>
          </div>
        </div>
      </section>
    {/* project detail explanation */}
      <section className='project__detail__explanation'>
        <div className='detail__exeplanation-up'>
          <div className='detail__up-left'>
            <div className='detil__up-left__title'>And this happened</div>
            <span>Increased brand loyalty and customer retention</span>
            <span>Enormous growth in ordering cocktails & catering service</span>
          </div>
          <div className='detail__up-right'>
            <span>82.46%</span>
            <span>growth of followers</span>
          </div>
        </div>
        <div className='detail__middle-title'>
          <p>Want to see full story?</p>
          <ul className='detail__middle-list'>
            <li>Prior to commencing our role as a social marketer for Delhi 6 Indian bistro, their digital presence was inadvertently disconnected from the latest trends and failed to engage with the restaurant's target audience effectively. It had fallen into an echo chamber, recycling similar types of posts without adapting to the dynamic social media landscape. </li>
            <li>When we embarked on the task of managing their social media presence, we wanted to create a content strategy that aligns with the defined objectives and resonates with the target audience. Curate a mix of visually appealing images and engaging videos that highlight the premium cocktails and unique ambiance, and needless to say, their authentic indian quisine.</li>
            <li>As a result, our data-driven approach has allowed us to continuously refine our strategies that optimize reach, engagement, and return on investment for the restaurant. The insights gained from social media analytics have steered our campaigns, ensuring that our content resonates with our target audience, resulting in increased brand loyalty and customer retention.</li>    
          </ul>
        </div>
        <div className='btn__wrapper'>
          <Mybottons text={'Contact Us'} onClick={goContact}/>
        </div>
      </section>
    </>
  )
})

export default Photography;