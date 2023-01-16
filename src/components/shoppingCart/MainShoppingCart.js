import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom'
import {AppContext} from '../../App'
import SelectedProduct from './SelectedProduct'
import { Button, ButtonContainer } from './../../styles/generalComponents'
import { Wrapper } from './../../styles/generalStyles'
import { TitleText, TitleContainer, TextBodySmall } from './../../styles/generalComponents'

const MainShoppingCart = () => {
  const {listOfWish} = useContext(AppContext)
  useEffect(()=> {

  },[listOfWish])
  return (
    <main>
      <Wrapper wrapper20 margin="40px auto 0 auto" width="500px">
        <TitleContainer bottomDesktop20>
          <TitleText>Tu carrito</TitleText>
        </TitleContainer>
        {listOfWish.length === 0?
          <TextBodySmall>No tienes ningun producto seleccionado</TextBodySmall>:
          <>
            <ul>
              {
                listOfWish.map(product => {
                  return <SelectedProduct key={product.uid} {...product}/>
                })
              }
            </ul>
            <ButtonContainer>
              <Link to={"/shipping/my-address"}>
                <Button>Comprar todo</Button>
              </Link>
            </ButtonContainer>
          </>
        }
      </Wrapper>
    </main>
  );
}

export default MainShoppingCart;
