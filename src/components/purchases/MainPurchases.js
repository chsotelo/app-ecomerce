/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import { AppContext } from '../../App';
import { useFirestore } from 'reactfire';
import CardPurchase from './CardPurchase';
import { Wrapper } from './../../styles/generalStyles';
import {
  TitleText,
  TitleContainer,
  Button,
  InputContainer,
  ButtonContainer,
  Input,
} from './../../styles/generalComponents';

const MainPurchases = () => {
  const firestore = useFirestore();
  const { addressOfUser } = useContext(AppContext);
  const [email, setEmail] = useState(addressOfUser ? addressOfUser.email : null);
  const [listOfBuys, setListOfBuys] = useStateIfMounted([]);
  // console.log(listOfBuys);

  // useEffect(async () => {
  //   if (listOfBuys.length === 0 && email) {
  //     console.log('Buscando compras...');
  //     await firestore
  //       .collection('purchases')
  //       .where('email', '==', email)
  //       .get()
  //       .then((result) => {
  //         if (result.empty) {
  //           console.log('No hay compras hechas.');
  //           setListOfBuys([]);
  //         } else {
  //           const buys = result.docs?.map((doc) => {
  //             return doc.data();
  //           });
  //           const items = [];
  //           buys.map((item) => {
  //             items.push(item);
  //           });
  //           const products = [];
  //           items.map((product) => {
  //             product.listOfWish?.map((wish) => {
  //               products?.push(wish);
  //             });
  //           });
  //           setListOfBuys(products);
  //         }
  //       });
  //   }
  // }, [email]);

  const changeEmail = (e) => {
    e.preventDefault();
    setEmail(document.getElementById('emailOfSearch').value);
  };

  return (
    <main>
      {!email ? (
        <>
          <Wrapper wrapper20 margin="40px auto 0 auto" width="500px">
            <InputContainer>
              <label htmlFor="emailOfSearch">Ingresa tu correo</label>
              <Input type="email" id="emailOfSearch" />
            </InputContainer>
            <ButtonContainer>
              <Button type="button" onClick={changeEmail}>
                Buscar compras
              </Button>
            </ButtonContainer>
          </Wrapper>
        </>
      ) : (
        <Wrapper wrapper20 margin="40px auto 0 auto" width="500px">
          <TitleContainer bottomDesktop20>
            <TitleText>Tus compras</TitleText>
          </TitleContainer>
          {listOfBuys.length !== 0 &&
            listOfBuys.map((product) => {
              return <CardPurchase key={product.uid} {...product} />;
            })}
        </Wrapper>
      )}
    </main>
  );
};

export default MainPurchases;
