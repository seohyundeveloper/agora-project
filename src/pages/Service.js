import {useNavigate} from 'react-router-dom';
import React from 'react';
import Mybottons from '../components/Mybuttons';
import '../styles/Service.scss';
import discovery from '../util/imgs/image-23.png';
import design from '../util/imgs/image-24.png';
import development from '../util/imgs/image-25.png';
import advertising from '../util/imgs/image-26.png';
import analytic from '../util/imgs/image-28.png';

const Service = ( () => {
  const navigate = useNavigate();

  const goProject = () => {
    navigate("/projects", { replace: true })
  }

  const goContact = () => {
    navigate("/contact", {replace:true})
  }

  return(
    <>
    {/* Service-list */}
      <section className='service__explanation__wrapper'>
        <div className='explanation__box__left'>
          <div className='left__line'>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1656" viewBox="0 0 8 1656" fill="none">
              <path d="M4 1655.2C5.76731 1655.2 7.2 1653.77 7.2 1652C7.2 1650.23 5.76731 1648.8 4 1648.8C2.23269 1648.8 0.8 1650.23 0.8 1652C0.8 1653.77 2.23269 1655.2 4 1655.2ZM4.6 1652L4.60007 2.62269e-08L3.40007 -2.62269e-08L3.4 1652L4.6 1652Z" fill="black"/>
            </svg>
          </div>
          <div className='left__text-box'>
            <div className='left__text-box__up'>
              <span>OUR SERVICE,</span>
              <span>WHAT WE OFFER</span>
            </div>
            <div className='left__text-box__down'>
              Our company can help you with these.
            </div>
          </div>
        </div>
        <div className='explanation__box__right'>
          <span className='explanation__box-title'>Agora is skilled at . . </span>
          <ul className='explanation__box__list'>
            <li>
              <div className='box__txt'>
                <span>Branding / Marketing</span>
                <span>Our expert team crafts compelling brand identities, devises innovative marketing campaigns, and delivers measurable results.</span>
                <span>
                  <div>Get help with Branding / Marketing</div>
                  <div className='txt__arrow'>&gt;</div>
                </span>
              </div>
              <div className='box__num'>1</div>
            </li>
            <li>
              <div className='box__txt'>
                <span>Google Business set up</span>
                <span>By creating an engaging Google My Business profile to optimizing your online visibility with accurate information, we ensure your brand stands out in local searches.</span>
                <span>
                  <div>Get help with Google Business set up</div>
                  <div className='txt__arrow'>&gt;</div>
                </span>
              </div>
              <div className='box__num'>2</div>
            </li>
            <li>
              <div className='box__txt'>
                <span>Photo / Videography</span>
                <span>With an artistic eye and cutting-edge equipment, our team of skilled professionals will turn your vision into stunning visuals that leave a lasting impact and evoke emotions.</span>
                <span>
                  <div>Get help with Photo / Videography</div>
                  <div className='txt__arrow'>&gt;</div>
                </span>
              </div>
              <div className='box__num'>3</div>
            </li>
            <li>
              <div className='box__txt'>
                <span>SEO Set up</span>
                <span>We meticulously analyze your website, conduct in-depth keyword research, and implement data-driven strategies to boost your search engine rankings.</span>
                <span>
                  <div>Get help with SEO Set up</div>
                  <div className='txt__arrow'>&gt;</div>
                </span>
              </div>
              <div className='box__num'>4</div>
            </li>
            <li>
              <div className='box__txt'>
                <span>Web / App Design</span>
                <span>Our expert designers craft visually stunning and user-friendly interfaces that elevate your digital presence and enhance the user experience.</span>
                <span>
                  <div>Get help with Web / App Design</div>
                  <div className='txt__arrow'>&gt;</div>
                </span>
              </div>
              <div className='box__num'>5</div>
            </li>
            <li>
              <div className='box__txt'>
                <span>News / Ads</span>
                <span>We deliver timely and reliable news updates across various industries, keeping you up-to-date with the latest developments and trends.</span>
                <span>
                  <div>Get help with News / Ads</div>
                  <div className='txt__arrow'>&gt;</div>
                </span>
              </div>
              <div className='box__num'>6</div>
            </li>
          </ul>
        </div>
        <div className='explanation__box__btns'>
          <Mybottons text={'Contact Us'} onClick={goContact}/>
        </div>
      </section>
    {/*Service-list  */}
      <section className='working__process__wrapper'>
        <div className='working__process'>
          <span>Our Team’s</span>
          <span>Working Process</span>
        </div>
      </section>
    {/* working-process-items */}
      <section className='working__process-list__wrapper'>
        <div className='working__process-list__box'>
          <ul className='working__process-list__items'>
            <li>
              <div className='process-list__img'> 
                <img src={discovery} alt='discovery'/>
              </div>
              <div className='process-list__txt'>
                <div className='process-list__txt-up'>
                  <span>1</span>
                  <span>Discovery and Strategy</span>
                </div>
                <div className='process-list__txt-down'>
                  <ol>
                    <li>The manager leads the initial phase, understanding the client's requirements, goals, and target audience.</li>
                    <li>The marketer conducts market research and competitor analysis to identify opportunities and challenges.</li>
                    <li>The team collaborates to develop a comprehensive marketing strategy, including branding, content, and promotion plans.</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className='process-list__img'> 
                <img src={design} alt='design'/>
              </div>
              <div className='process-list__txt'>
                <div className='process-list__txt-up'>
                  <span className='text__num'>2</span>
                  <span>Design and Content Creation</span>
                </div>
                <div className='process-list__txt-down'>
                  <ol>
                    <li>Designers work on creating visually appealing and on-brand assets, including graphics, logos, and website layouts.</li>
                    <li>Photographers/videographers capture high-quality images and videos that align with the brand's messaging and vision.</li>
                    <li>Content creators craft engaging and compelling copy for websites, social media, blog posts, and other marketing materials.</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className='process-list__img'> 
                <img src={development} alt='development'/>
              </div>
              <div className='process-list__txt'>
                <div className='process-list__txt-up'>
                  <span className='text__num'>3</span>
                  <span>Development and Implementation</span>
                </div>
                <div className='process-list__txt-down'>
                  <ol>
                    <li>Developers take the approved designs and turn them into functional websites, applications.</li>
                    <li>The team ensures that the website is responsive, user-friendly, and optimized for search engines (SEO).</li>
                    <li>Managers oversee the project timeline, ensuring smooth communication between team members and clients.</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className='process-list__img'> 
                <img src={advertising} alt='advertising'/>
              </div>
              <div className='process-list__txt'>
                <div className='process-list__txt-up'>
                  <span className='text__num'>4</span>
                  <span>
                    <div>Advertising and Promotion</div>
                    <div>Social Media and Content Distribution</div>  
                  </span>
                </div>
                <div className='process-list__txt-down'>
                  <ol>
                    <li>Marketers execute targeted advertising campaigns across various platforms, such as social media, search engines.</li>
                    <li>The team monitors campaign performance, making data-driven decisions to optimize ad spend and improve results.</li>
                    <li>Photographers/videographers contribute visual content, and the team ensures consistency in branding and messaging.</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className='process-list__img'> 
                <img src={analytic} alt='analytic'/>
              </div>
              <div className='process-list__txt'>
                <div className='process-list__txt-up'>
                  <span className='text__num'>5</span>
                  <span>Analystics and Reporting</span>
                </div>
                <div className='process-list__txt-down'>
                  <ol>
                    <li>Managers and marketers analyze data from various marketing channels to measure the effectiveness of campaigns.</li>
                    <li> The team prepares comprehensive reports, highlighting key performance indicators (KPIs) and providing insights for future improvements.</li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>  
        </div>      
      </section>
      <div className='process-list__last'></div>
      <div className='process__btns'>
        <Mybottons text={'See our Projects'} onClick={goProject}/>
      </div> 
    </>
  )
});

export default Service;