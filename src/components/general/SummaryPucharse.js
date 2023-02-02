import React from 'react';
import {
  TitleContainer,
  TextBodyLarge,
  DetailsProduct,
  TextBodySmall,
} from './../../styles/generalComponents';
import {
  TextBodySmallStyled,
  DetailsProductStyled,
  DetailsContainer,
} from './styles/sSummaryPucharse.js';

const SummaryPucharse = ({ numberOfArticles, subTotalPrice, discount, idOfBuy }) => {
  return (
    <div>
      <TitleContainer bottom15 bottomDesktop20>
        <TextBodyLarge>Resumen de la compra</TextBodyLarge>
      </TitleContainer>
      <DetailsContainer>
        <DetailsProduct detailsPrices>
          <TextBodySmallStyled wMediumDetailsPrice>Identificador de compra</TextBodySmallStyled>
          <TextBodySmallStyled wMediumDetailsPrice>{idOfBuy}</TextBodySmallStyled>
        </DetailsProduct>
        <DetailsProduct detailsPrices>
          <TextBodySmallStyled wMediumDetailsPrice>
            Subtotal{' '}
            <span>({numberOfArticles === 1 ? '1 artículo' : `${numberOfArticles} artículos`})</span>
          </TextBodySmallStyled>
          <TextBodySmallStyled wMediumDetailsPrice>PEN {subTotalPrice}.90</TextBodySmallStyled>
        </DetailsProduct>
        <DetailsProduct detailsPrices>
          <TextBodySmallStyled>Descuento</TextBodySmallStyled>
          <TextBodySmallStyled>
            PEN <span>{discount}</span>
          </TextBodySmallStyled>
        </DetailsProduct>
        <DetailsProduct detailsPrices>
          <TextBodySmallStyled>Costo de envío</TextBodySmallStyled>
          <TextBodySmallStyled>
            <span>Gratis</span>
          </TextBodySmallStyled>
        </DetailsProduct>
        <DetailsProductStyled detailsPrices wboldDetailsPrice>
          <TextBodySmallStyled>Total</TextBodySmallStyled>
          <TextBodySmallStyled>PEN {subTotalPrice - discount}.90</TextBodySmallStyled>
        </DetailsProductStyled>
      </DetailsContainer>
    </div>
  );
};

export default SummaryPucharse;
