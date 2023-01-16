import React from 'react';
import { NavLinkStyled } from './styles/sNavbar'

const Options = ({ icon, link }) => {
  return (
    <li>
      <NavLinkStyled exact to={link} activeClassName="iconActive" >
        {icon}
        <span></span>
      </NavLinkStyled>
    </li>
  );
}

export default Options;
