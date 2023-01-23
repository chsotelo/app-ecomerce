import React from 'react';
import Options from './Options';
import { Wrapper } from './../../../styles/generalStyles';
import { ContentsContainer, NavbarStyled } from './styles/sNavbar';
import { ReactComponent as HomeSVG } from './../../../icons/menu/home.svg';
import { ReactComponent as ShoppingCartHomeSVG } from './../../../icons/menu/shoppingCart.svg';
import { ReactComponent as PurchaseSVG } from './../../../icons/menu/purchase.svg';
import { ReactComponent as ProfileSVG } from './../../../icons/menu/profile.svg';
import { ReactComponent as AdminSVG } from './../../../icons/menu/admin.svg';
import { useContext } from 'react';
import { AppContext } from '../../../App';

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
  const { dataOfUser } = useContext(AppContext);

  if (dataOfUser?.typeOfUser === 'admin') {
    if (!listOptionsMenu.find((option) => option.id === 'addProducts')) {
      listOptionsMenu.push({
        id: 'addProducts',
        icon: <AdminSVG className="icon" />,
        link: '/admin-route',
      });
    }
  }
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
