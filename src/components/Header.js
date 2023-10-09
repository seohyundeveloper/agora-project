import React from 'react';
import { Link } from 'react-router-dom';
const env = process.env;


const Header = (()=> {
  return (
    <>
      <header className="header__wrapper">
        <ul className="nav__wrapper">
          <li><Link to={"/ourteam"}>Our Team</Link></li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
          <li className="nav__logos">
            <Link to={"/"}>
              <img src={env.PUBLIC_URL + '/assets/imgs-main/agora_logo_1.png'} width={'170px'} alt="logo"/>
            </Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </header>
    </>
  )
})

export default Header;