/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import Article from './../general/Article';
import { useStateIfMounted } from 'use-state-if-mounted';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useFirestore } from 'reactfire';
import { recoverProducts } from '../home/algorithms/recoverProducts';
import { Wrapper } from './../../styles/generalStyles';
import { TitleText, TitleContainer, ListArticlesContainer } from './../../styles/generalComponents';
import { DetailsTextStyled, CoverPageContainer } from './styles/sMainProductsCategory';
import CategoriesDesktop from '../general/CategoriesDesktop';

const MainProductsCategory = () => {
  const firestore = useFirestore();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch('/category/:category');
  const nameCategoryRoute = match.params.category.concat(location.hash);
  const [listOfProducts, setListOfProducts] = useStateIfMounted([]);

  const renderSwitchCategory = (nameCategoryRoute) => {
    switch (nameCategoryRoute) {
      case 'headphones':
        return 'auriculares';
      case 'speakers':
        return 'altavoces';
      case 'reproductors':
        return 'reproductores';
      case 'laptops':
        return 'laptops';
      case 'controllers':
        return 'controladores';
      case 'smarthphones':
        return 'smarthphones';
      case 'professional':
        return 'profesional';
    }
  };

  const renderSwitchProducts = (nameCategoryRoute) => {
    switch (nameCategoryRoute) {
      case 'headphones':
        return 'Auriculares';
      case 'speakers':
        return 'Altavoz';
      case 'reproductors':
        return 'Reproductor';
      case 'laptops':
        return 'Laptop';
      case 'controllers':
        return 'Controlador';
      case 'smarthphones':
        return 'Smarthphone';
      case 'professional':
        return 'Profesional';
    }
  };

  const recoverDataProducts = async () => {
    let disponibleProducts = await recoverProducts(
      firestore,
      renderSwitchProducts(nameCategoryRoute),
      null,
      18,
    );
    setListOfProducts([]);
    if (disponibleProducts) {
      disponibleProducts.map((product) => {
        if (!listOfProducts.includes(product)) {
          setListOfProducts((prevState) => [...prevState, product]);
        }
      });
    }
  };
  useEffect(() => {
    recoverDataProducts();
  }, [nameCategoryRoute]);

  return (
    <main>
      <CategoriesDesktop />
      <CoverPageContainer background={renderSwitchCategory(nameCategoryRoute)}>
        <h2>{renderSwitchCategory(nameCategoryRoute)}</h2>
      </CoverPageContainer>
      <Wrapper categoryNotLineBottom>
        <TitleContainer>
          <TitleText></TitleText>
        </TitleContainer>
        <DetailsTextStyled as="p">
          <span>{listOfProducts.length}</span> Resultados en{' '}
          {renderSwitchCategory(nameCategoryRoute)}
        </DetailsTextStyled>
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
      </Wrapper>
    </main>
  );
};

export default MainProductsCategory;
