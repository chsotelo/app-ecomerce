import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import SummaryPucharse from './../general/SummaryPucharse';
import CardAddress from './CardAddress';
import { Wrapper } from './../../styles/generalStyles';
import {
  TitleContainer,
  TextBodyLarge,
  Button,
  ButtonContainer,
  Checkbox,
} from './../../styles/generalComponents';

const MainShippingAdress = () => {
  const history = useHistory();
  const {
    listOfWish,
    idOfBuy,
    setIdOfBuy,
    numberOfArticles,
    setNumberOfArticles,
    subTotalPrice,
    setSubTotalPrice,
    discount,
    setDiscount,
    addressOfUser,
  } = useContext(AppContext);
  const [buyId, setBuyId] = useState(uuidv4());

  useEffect(() => {
    var subTotal = 0;
    var articles = 0;
    var disc = 0;
    listOfWish.map((item) => {
      subTotal = subTotal + (item.price + 0.9) * item.quantity;
      articles = articles + item.quantity;
      if (item.discount) {
        disc = disc + ((item.price + 0.9) * item.quantity * Math.abs(item.discount)) / 100;
      }
    });
    setSubTotalPrice(Math.round(subTotal));
    setNumberOfArticles(Math.round(articles));
    setDiscount(Math.round(disc));
    setIdOfBuy(uuidv4());
  }, [listOfWish]);

  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <TitleContainer bottomDesktop20>
          <TextBodyLarge>Dirección de envio</TextBodyLarge>
        </TitleContainer>
        <form>
          <fieldset>{addressOfUser == null ? <></> : <CardAddress {...addressOfUser} />}</fieldset>
        </form>
        <ButtonContainer center>
          <Link to="/shipping/add-address">
            <Button secondary small>
              agregar una dirección
            </Button>
          </Link>
        </ButtonContainer>
        <SummaryPucharse
          numberOfArticles={numberOfArticles}
          idOfBuy={idOfBuy}
          subTotalPrice={subTotalPrice}
          discount={discount}
        />
        <ButtonContainer>
          <Link to={'/shipping/my-credit-card'}>
            <Button>Continuar</Button>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </main>
  );
};

export default MainShippingAdress;
