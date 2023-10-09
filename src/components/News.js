import React from 'react';
import '../styles/News.scss';
import Mybottons from './Mybuttons';

const News = ( () => {
  return (
   <div className='news__wrapper'>
    <section className='news__topic-box'>
      <div className='news__topic-box__title'>
        <p>Agora Daily</p>
        <div className='news__topic-box__subtitle'>
          <ul>
            <li>Our team recognized..</li>
            <li>So we did..</li>
          </ul>
        </div>
      </div>
      <div className='news__topic-box__content'>
        <div className='news__topic-box__left'>The need to bridge the language barrier and ensure that diverse immigrant communities could stay informed about important news in their native languages.</div>
        <div className='news__topic-box__right'>
          <span>Set out on a mission to become a reliable source of highlighted and pressing news delivered conveniently to those who faced language barriers. </span>
          <span>Assembled a diverse team of multilingual professionals who shared a passion for empowering communities through information.</span>
        </div>
      </div>
    </section>
    <section className='news__explanation-box'>
      <p>And this happened</p>
      <div className='news__explanation-box__list'>
        <ul>
          <li>Became a go-to resource for those seeking timely and relevant news updates.</li>
          <li>Became an integral part of the daily lives of immigrants across Canada.</li>
        </ul>
      </div>
      <div className='news__story-box'>
        <span className='news__story-box__title'>Want to see full story?</span>
        <div className='news__story-box__content'>
          <ul>
            <li>In the multicultural landscape of Canada, the Agora Company recognized the need to bridge the language barrier and ensure that diverse immigrant communities could stay informed about important news in their native languages. With a deep commitment to inclusivity and accessibility, Agora set out on a mission to become a reliable source of highlighted and pressing news delivered conveniently to those who faced language barriers. </li>
            <li>Understanding the challenges faced by immigrants in keeping up-to-date with local news, Agora assembled a diverse team of multilingual professionals who shared a passion for empowering communities through information. With a focus on essential news topics, they diligently curated concise and relevant summaries to keep their audience well-informed without overwhelming them with excessive information.</li>
            <li>In a world filled with an overwhelming amount of information, Agora took on the responsibility of sifting through news sources and curating only the most crucial and pressing headlines. By focusing on topics that directly impacted their audience's lives, Agora became a go-to resource for those seeking timely and relevant news updates.</li>
            <li>With our dedication to providing highlighted and essential news updates, Agora became an integral part of the daily lives of immigrants across Canada. Our platform not only informs but also empowers and connected communities.</li>
          </ul>
        </div>
      </div>
    </section>
    <div className='news__btns'>
        <Mybottons text={'Contact Us'}/>
    </div>
   </div>
  )
})

export default News;