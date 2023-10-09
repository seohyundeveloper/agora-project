import React from 'react';
import '../styles/Google.scss';
import Mybottons from './Mybuttons';

const Googlesetup = ( () => {
  return (
    <div className='google__wrapper'>
      <section className='google__topic-box'>
        <div className='google__topic-box__title'>
          <p>West Pacific Service LTD</p>
          <div className='google__topic-box__subtitle'>
            <ul>
              <li>Our team recognized..</li>
              <li>So we did..</li>
            </ul>
          </div>
          <div className='google__topic-box__content'>
            <div className='google__topic-box__left'>
              <span>The construction company, West Pacific Service LTD, found itself trapped in a digital conundrum for years.</span>
              <span>The elusive Google account lockout left them without access to essential online tools, hindering their ability to showcase their expertise and services to potential clients.</span>
            </div>
            <div className='google__topic-box__right'>
               We managed to succeed in restoring the construction company's Google My Business access in a week.
            </div>
          </div>
        </div>
      </section>
      <section className='google__explanation-box'>
      <p>And this happened</p>
      <div className='google__explanation-box__list'>
        <ul>
          <li>The collaboration had not only resolved the long-standing issue but also fostered a lasting partnership built on trust and shared determination..</li>
          <li>Now our partener, West Pacific Service  finally gained the key to unlock the full potential of their digital presence.</li>
        </ul>
      </div>
      <div className='google__story-box'>
        <span className='google__story-box__title'>Want to see full story?</span>
        <div className='google__story-box__content'>
          <ul>
            <li>For years, the construction company found itself trapped in a digital conundrum. Despite their best efforts, they were unable to verify their business on Google My Business. The elusive Google account lockout left them without access to essential online tools, hindering their ability to showcase their expertise and services to potential clients.</li>
            <li>Despite countless attempts to regain access, the construction company's efforts seemed to lead nowhere. Google's verification process remained a roadblock, and they were left with a sinking feeling of helplessness as the years went by.</li>
            <li>Hope was reignited when they stumbled upon our team Agora. We managed to succeed in restoring the construction company's Google My Business access. Now our partener, West Pacific Service  finally gained the key to unlock the full potential of their digital presence.</li>
            <li>The collaboration had not only resolved the long-standing issue but also fostered a lasting partnership built on trust and shared determination.</li>
          </ul>
        </div>
      </div>
    </section>
    <div className='google__btns'>
        <Mybottons text={'Contact Us'}/>
    </div>
    </div>
  )
})

export default Googlesetup;