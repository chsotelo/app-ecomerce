import React, {useContext, useState} from 'react';
import { AppContext } from '../../App';
import { Link } from 'react-router-dom'
import SummaryPucharse from './../general/SummaryPucharse'
import CardCreditCard from './CardCreditCard'
import { Wrapper } from './../../styles/generalStyles'
import { TitleContainer, TextBodyLarge, Button, ButtonContainer,
         DetailsProduct as DetailsCustomer, TextBodySmall, Checkbox } from './../../styles/generalComponents'
import { PromotionSecurityContainer } from './styles/sShipping'
import { ReactComponent as SecuritySVG } from './../../icons/others/security.svg'

const MainShippingCreditCard = () => {
  const {idOfBuy, numberOfArticles, subTotalPrice, discount, dataOfCard} =  useContext(AppContext) 
  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <TitleContainer>
          <TextBodyLarge>Selecciona un método de pago</TextBodyLarge>
        </TitleContainer>
        <form>
          <fieldset>
            {
              (dataOfCard == null) ? <></> :
              <CardCreditCard {...dataOfCard} />
            }
          </fieldset>
        </form>
        <ButtonContainer center>
          <Link to="/shipping/add-credit-card">
            <Button secondary small>Agregar tarjetas</Button>
          </Link>
        </ButtonContainer>
        <PromotionSecurityContainer>
          <SecuritySVG />
          <p>Seguridad 100% verificada</p>
        </PromotionSecurityContainer>
        <SummaryPucharse numberOfArticles={numberOfArticles} subTotalPrice={subTotalPrice} idOfBuy={idOfBuy} discount={discount}/>
        <ButtonContainer>
          <Link to="/shipping/buy">
            <Button>Continuar</Button>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </main>
  );
}

export default MainShippingCreditCard;
