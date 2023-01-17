import React from 'react';
import { Link } from 'react-router-dom';
import Options from './navbar/Options';
import { HeaderContainer, FlexContainer, MenuDesktopContainer } from './styles/sHeader';
import { Wrapper } from './../../styles/generalStyles';
import { ReactComponent as LogoSVG } from './../../icons/brand/logo.svg';
import { ReactComponent as HomeSVG } from './../../icons/menu/home.svg';
import { ReactComponent as ShoppingCartSVG } from './../../icons/menu/shoppingCart.svg';
import { ReactComponent as PurchaseSVG } from './../../icons/menu/purchase.svg';
import { ReactComponent as ProfileSVG } from './../../icons/menu/profile.svg';

const listOptionsMenu = [
  {
    id: 'home',
    icon: <HomeSVG className="icon" />,
    link: '/',
  },
  {
    id: 'shoppingCart',
    icon: <ShoppingCartSVG className="icon" />,
    link: '/my-cart',
  },
  {
    id: 'purchase',
    icon: <PurchaseSVG className="icon" />,
    link: '/purchases',
  },
  {
    id: 'profile',
    icon: <ProfileSVG className="icon" />,
    link: '/login',
  },
];

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Wrapper>
          <FlexContainer>
            <Link to="/">
              <LogoSVG className="logoIcon" />
            </Link>
            <MenuDesktopContainer className="noMobile">
              {listOptionsMenu.map((option) => (
                <Options key={option.id} {...option} />
              ))}
            </MenuDesktopContainer>
          </FlexContainer>
        </Wrapper>
      </HeaderContainer>
    </header>
  );
};

export default Header;
