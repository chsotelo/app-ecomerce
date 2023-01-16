import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import { useFirestore } from 'reactfire';
import SummaryPucharse from './../general/SummaryPucharse';
import { Wrapper } from './../../styles/generalStyles';
import {
  TitleContainer,
  TextBodyLarge,
  Button,
  ButtonContainer,
} from './../../styles/generalComponents';
import { sendDataOfBuy } from './algorithms/sendDataOfBuy';
import MainSpinner from '../spinner/MainSpinner';

const MainShippingBuy = () => {
  const firestore = useFirestore();
  const history = useHistory();
  const {
    idOfBuy,
    numberOfArticles,
    subTotalPrice,
    discount,
    listOfWish,
    addressOfUser,
    dataOfCard,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const readyToBuy = async () => {
    setLoading(true);
    await sendDataOfBuy(firestore, listOfWish, addressOfUser, dataOfCard, idOfBuy);
    setLoading(false);
    history.push('/purchases');
  };

  if (loading) return <MainSpinner />;

  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <TitleContainer>
          <TextBodyLarge>Pagar</TextBodyLarge>
        </TitleContainer>
        <SummaryPucharse
          numberOfArticles={numberOfArticles}
          subTotalPrice={subTotalPrice}
          idOfBuy={idOfBuy}
          discount={discount}
        />
        <ButtonContainer>
          <Button onClick={readyToBuy}>Realizar compra</Button>
        </ButtonContainer>
      </Wrapper>
    </main>
  );
};

export default MainShippingBuy;
