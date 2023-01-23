import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Options from './navbar/Options';
import { HeaderContainer, FlexContainer, MenuDesktopContainer } from './styles/sHeader';
import { Wrapper } from './../../styles/generalStyles';
import { ReactComponent as LogoSVG } from './../../icons/brand/logo.svg';
import { ReactComponent as HomeSVG } from './../../icons/menu/home.svg';
import { ReactComponent as ShoppingCartSVG } from './../../icons/menu/shoppingCart.svg';
import { ReactComponent as PurchaseSVG } from './../../icons/menu/purchase.svg';
import { ReactComponent as ProfileSVG } from './../../icons/menu/profile.svg';
import { ReactComponent as AdminSVG } from './../../icons/menu/admin.svg';
import { AppContext } from '../../App';

let listOptionsMenu = [
  {
    id: 'home',
    icon: <HomeSVG className="icon" />,
    link: '/',
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
  {
    id: 'shoppingCart',
    icon: <ShoppingCartSVG className="icon" />,
    link: '/my-cart',
  },
];

const Header = () => {
  const { dataOfUser, listOfWish } = useContext(AppContext);

  if (dataOfUser?.typeOfUser === 'admin') {
    //agregar un nuevo elemento al array en el inicio si no existe
    if (!listOptionsMenu.find((option) => option.id === 'addProducts')) {
      listOptionsMenu.unshift({
        id: 'addProducts',
        icon: <AdminSVG className="icon" />,
        link: '/admin-route',
      });
    }
  }

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
              <span className="counnter-cart">{listOfWish.length}</span>
            </MenuDesktopContainer>
          </FlexContainer>
        </Wrapper>
      </HeaderContainer>
    </header>
  );
};

export default Header;
