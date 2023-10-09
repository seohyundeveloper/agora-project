import '../styles/Project.scss';
import React from 'react';
import Photography from '../components/Photography';
import Videography from '../components/Videography';
import Branding from '../components/Branding';
import News from '../components/News';
import Googlesetup from '../components/Googlesetup';
import Slidetextbanner from '../components/Slidetextbanner';
import { useState } from 'react';

const Projects = ( () => {
  const [content, setContent] = useState('Photography');

  const handleClick = (e) => {
    const { outerText } = e.target;
    setContent(outerText);
  } 

  return(
    <>
    {/*  project menu */}
      <section className='project__wrapper'>
        <div className='project__list__box'>
          <div className='project__list__title'>
            <div className='list__title-up'>What we have done</div>
            <div className='list__title-down'>Projects</div>
          </div>
          <div className='project__menu__category'>
            <ul>
              <li onClick={handleClick}>Photography</li>
              <li onClick={handleClick}>Videography</li>
              <li onClick={handleClick}>Branding</li>
              <li onClick={handleClick}>News/Ads</li>
              <li onClick={handleClick}>Google Business set up</li>
            </ul>
          </div>
        </div>
      </section>
      {/* project detail */}
      <div>
        {
          ( () => {
            switch(content) {
              case "Photography":
                return <Photography />;
              case "Videography":
                return <Videography />;  
              case "Branding":
                return <Branding />;  
              case "News/Ads":
                return <News />;
              case "Google Business set up":
                return <Googlesetup />
              default :
              return <Photography />;
            }
          })()
        }
      </div>
      <div className='slide__border'>
        <Slidetextbanner />
      </div>
    </>
  )
});

export default Projects;