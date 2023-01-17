import React from 'react';
import Options from './Options';
import { Wrapper } from './../../../styles/generalStyles';
import { ContentsContainer, NavbarStyled } from './styles/sNavbar';
import { ReactComponent as HomeSVG } from './../../../icons/menu/home.svg';
import { ReactComponent as ShoppingCartHomeSVG } from './../../../icons/menu/shoppingCart.svg';
import { ReactComponent as PurchaseSVG } from './../../../icons/menu/purchase.svg';
import { ReactComponent as ProfileSVG } from './../../../icons/menu/profile.svg';

const listOptionsMenu = [
  {
    id: 'home',
    icon: <HomeSVG className="icon" />,
    link: '/',
  },
  {
    id: 'purchase',
    icon: <PurchaseSVG className="icon" />,
    link: '/purchase',
  },
  {
    id: 'shoppingCart',
    icon: <ShoppingCartHomeSVG className="icon" />,
    link: '/my-cart',
  },
  {
    id: 'profile',
    icon: <ProfileSVG className="icon" />,
    link: '/login',
  },
];

const Navbar = () => {
  return (
    <NavbarStyled>
      <Wrapper>
        <ContentsContainer>
          {listOptionsMenu.map((option) => (
            <Options key={option.id} {...option} />
          ))}
        </ContentsContainer>
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
