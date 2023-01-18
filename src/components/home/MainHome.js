/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import Section from './../general/Section';
import CategoriesCard from './CategoriesCard';
import Article from './../general/Article';
import listCategories from './categories';
import { useStateIfMounted } from 'use-state-if-mounted';
import {
  SubtitleTextSmall,
  TextBodySmall,
  TitleText,
  TitleContainer,
} from './../../styles/generalComponents';
import { ListArticlesContainer } from './../../styles/generalComponents';
import {
  CoverPageContainer,
  ListCategoriesContainer,
  LinkStyled,
  SectionDelivery,
  SectionMetodsPay,
} from './styles/sMainHome';
import { ReactComponent as DeliveryTruckSVG } from './../../icons/others/deliveryTruck.svg';
import { ReactComponent as VisaSVG } from './../../icons/othersLogos/visa.svg';
import { ReactComponent as MastercardSVG } from './../../icons/othersLogos/mastercard.svg';
import { ReactComponent as AmericanExpressSVG } from './../../icons/othersLogos/americanExpress.svg';

import { useFirestore } from 'reactfire';
import { recoverProducts } from './algorithms/recoverProducts';

import DegradeOneLetters from './../../images/degradeOneLetters.png';

const MainHome = () => {
  const firestore = useFirestore();
  const [listOfProducts, setListOfProducts] = useStateIfMounted([]);
  const [listOfMarkProducts, setListOfMarkProducts] = useStateIfMounted([]);

  const functionRecoversProducts = async () => {
    let disponibleProducts = await recoverProducts(firestore, null, 10000, null);
    let markDisponibleProducts = await recoverProducts(firestore, null, null, 'Beats');

    if (disponibleProducts) {
      disponibleProducts.map((product) => {
        if (!listOfProducts.includes(product)) {
          setListOfProducts((prevState) => [...prevState, product]);
        }
      });
    }

    if (markDisponibleProducts && listOfMarkProducts.length === 0) {
      markDisponibleProducts.map((product) => {
        if (!listOfMarkProducts.includes(product)) {
          setListOfMarkProducts((prevState) => [...prevState, product]);
        }
      });
    }
  };

  listOfProducts.length === 0 && functionRecoversProducts();
  // useEffect(() => {}, []);
  // console.log('render');

  //TODO para ver mas productos
  // const handleSeeMoreTopProduct = async (e) => {
  //   e.preventDefault();
  //   var price = 1000;
  //   listOfProducts.map((product) => {
  //     if (product.price < price) {
  //       price = product.price - 1;
  //     }
  //   });
  //   let newDisponibleProducts = await recoverProducts(firestore, null, price, null);
  //   if (newDisponibleProducts) {
  //     newDisponibleProducts.map((product) => {
  //       if (!listOfProducts.includes(product)) {
  //         setListOfProducts((prevState) => [...prevState, product]);
  //       }
  //     });
  //   }
  // };

  return (
    <main>
      <CoverPageContainer>
        <img src={DegradeOneLetters} alt="description image" />
      </CoverPageContainer>
      <Section titleSection="Categorías">
        <ListCategoriesContainer>
          {listCategories.map((category) => (
            <CategoriesCard key={category.id} {...category} />
          ))}
        </ListCategoriesContainer>
      </Section>
      <Section titleSection="Productos top">
        <ListArticlesContainer>
          {listOfProducts.map((product) => {
            return (
              <Article
                key={product.uid}
                title={product.title}
                img={product.photoUrl}
                price={product.price}
                stock={product.stock}
                mark={product.mark}
                color={product.color}
                weight={product.weight}
                productId={product.uid}
              />
            );
          })}
        </ListArticlesContainer>
        {/* <LinkStyled onClick={handleSeeMoreTopProduct}>Vér más productos</LinkStyled> */}
      </Section>
      {/* <SectionDelivery categorySecond margin="auto">
        <DeliveryTruckSVG />
        <div>
          <SubtitleTextSmall as="h3">Envios gratis a todo el Perú</SubtitleTextSmall>
          <TextBodySmall>Estes donde estes. Tu compra siempre llegará.</TextBodySmall>
        </div>
      </SectionDelivery> */}
      <Section titleSection="Productos Beats">
        <ListArticlesContainer>
          {listOfMarkProducts.map((product) => {
            return (
              <Article
                key={product.uid}
                title={product.title}
                img={product.photoUrl}
                price={product.price}
                stock={product.stock}
                mark={product.mark}
                color={product.color}
                weight={product.weight}
                productId={product.uid}
              />
            );
          })}
        </ListArticlesContainer>
      </Section>
      <SectionMetodsPay categorySecond margin="auto">
        <TitleContainer>
          <TitleText>Métodos de pago</TitleText>
        </TitleContainer>
        <div className="containerLogos">
          <VisaSVG />
          <MastercardSVG />
          <AmericanExpressSVG />
        </div>
      </SectionMetodsPay>
    </main>
  );
};

export default MainHome;
