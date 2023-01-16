/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';
import { useMatchRouteProductData } from './algorithms/useMatchRouteProductData';
import OtherSection from './../general/OtherSection';
import Article from './../general/Article';
import CategoriesDesktop from './../general/CategoriesDesktop';
import Spinner from './../spinner/MainSpinner';
import { ListArticlesContainer } from './../../styles/generalComponents';
import { LinkStyled } from './../home/styles/sMainHome';
import { Wrapper } from './../../styles/generalStyles';
import {
  ImageProductContainer,
  TitleTextStyled,
  TextAppreciationsStyled,
  PriceContainer,
  CountContainer,
  InputStyled,
  ButtonsContainer,
  TextBodyLargeStyled,
  TextDescriptionContainer,
  OtherDetailsContainer,
  GridOnlyDesktop,
} from './styles/sMainProduct';
import { TextBodySmall, Button, DetailsProduct } from './../../styles/generalComponents';
import { recoverProducts } from '../home/algorithms/recoverProducts';
import { useFirestore } from 'reactfire';

const MainProduct = () => {
  const { listOfWish, setListOfWish } = useContext(AppContext);
  const firestore = useFirestore();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch('/product/:id');
  const [otherSimilarProducts, setOtherSimilarProducts] = useStateIfMounted(null);
  const [productInfo, setProductInfo] = useStateIfMounted(null);
  const [quantity, setQuantity] = useState(1);
  const nameProductRoute = match.params.id.concat(location.hash);
  const [productData, loading, error] = useMatchRouteProductData('products', nameProductRoute);

  useEffect(async () => {
    if (productData && productData.length !== 0) {
      setProductInfo(productData[0]);
      setOtherSimilarProducts(await recoverProducts(firestore, productData[0].category));
    }
  }, [productData, listOfWish]);

  if (loading) return <Spinner />;
  if (error) {
    return false;
  }

  const handleAddToCar = (e) => {
    const product = productInfo;
    product.quantity = quantity;
    setListOfWish([...listOfWish, product]);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <main>
      <CategoriesDesktop />
      <GridOnlyDesktop>
        <ImageProductContainer>
          <img src={productInfo && productInfo.photoUrl} alt="Product" />
        </ImageProductContainer>
        <div>
          <Wrapper category margin="0" width="auto">
            <TitleTextStyled>{productInfo && productInfo.title}</TitleTextStyled>
            <TextAppreciationsStyled as="p">
              <span>10</span> calificaciones - <span>4.5</span> puntos
            </TextAppreciationsStyled>
            <PriceContainer>
              <TextBodySmall>
                Precio: <span>PEN {productInfo && productInfo.price}</span>
                <span className="priceDecimal">.90</span>
              </TextBodySmall>
            </PriceContainer>
            <CountContainer>
              <TextBodySmall>Cantidad: </TextBodySmall>
              <InputStyled
                onChange={handleChangeQuantity}
                height="28px"
                type="number"
                placeholder="1"
              />
            </CountContainer>
            <ButtonsContainer>
              <Button tertiary onClick={handleAddToCar}>
                Agregar al carrito
              </Button>
              <Link to="/my-cart">
                <Button small left onClick={handleAddToCar}>
                  comprar
                </Button>
              </Link>
            </ButtonsContainer>
          </Wrapper>
          <Wrapper category margin="50px 0 0 0" width="auto">
            <TextBodyLargeStyled as="h2">Información del producto</TextBodyLargeStyled>
            <TextDescriptionContainer>
              <TextBodySmall>{productInfo && productInfo.description}</TextBodySmall>
            </TextDescriptionContainer>
            <TextBodyLargeStyled as="h3">Detalles</TextBodyLargeStyled>
            <OtherDetailsContainer>
              <DetailsProduct>
                <p>
                  Marca: <span>{productInfo && productInfo.mark}</span>
                </p>
              </DetailsProduct>
              {productInfo && productInfo.color && (
                <DetailsProduct>
                  <p>
                    Color: <span>{productInfo.color}</span>
                  </p>
                </DetailsProduct>
              )}
              {productInfo && productInfo.weight && (
                <DetailsProduct>
                  <p>
                    Peso del artículo: <span>{productInfo.weight} kg.</span>
                  </p>
                </DetailsProduct>
              )}
            </OtherDetailsContainer>
          </Wrapper>
        </div>
      </GridOnlyDesktop>
      {otherSimilarProducts && (
        <OtherSection titleSection="Productos similares">
          <ListArticlesContainer>
            {otherSimilarProducts.map((product) => {
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
          <LinkStyled to="/">Vér más productos</LinkStyled>
        </OtherSection>
      )}
    </main>
  );
};

export default MainProduct;
