import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const NavbarStyled = styled.nav`
  position: fixed;
  z-index: 2000;
  bottom: 0;
  width: 100%;
  background: ${props => props.theme.backgroundColor};
  filter: drop-shadow(0px -2px 2px rgba(13, 27, 30, 0.25));

  @media(min-width:1200px) {
    display: none;
  }
`

export const ContentsContainer = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`

//Options

export const NavLinkStyled = styled(NavLink)`
  display: block;

  svg {
    margin: 10px
  }
`
