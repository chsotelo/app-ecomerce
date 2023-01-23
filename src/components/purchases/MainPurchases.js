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
  InputContainerForEmail,
} from './../../styles/generalComponents';
import Spinner from '../spinner/Spinner';

const MainPurchases = () => {
  const firestore = useFirestore();
  const { addressOfUser } = useContext(AppContext);
  const [email, setEmail] = useState(addressOfUser ? addressOfUser.email : null);
  const [listOfBuys, setListOfBuys] = useStateIfMounted([]);
  const [localLoading, setLocalLoading] = useState(false);
  // console.log(listOfBuys);

  const functionToSearch = async () => {
    setLocalLoading(true);
    if (listOfBuys.length === 0 && email) {
      await firestore
        .collection('purchases')
        .where('email', '==', email)
        .get()
        .then((result) => {
          if (result.empty) {
            console.log('No hay compras hechas.');
            setListOfBuys([]);
          } else {
            const buys = result.docs?.map((doc) => {
              return doc.data();
            });
            const items = [];
            buys.map((item) => {
              items.push(item);
            });
            const products = [];
            items.map((product) => {
              product.listOfWish?.map((wish) => {
                products?.push(wish);
              });
            });
            setListOfBuys(products);
          }
          setLocalLoading(false);
        })
        .catch((error) => {
          setLocalLoading(false);
          throw new Error(error);
        });
    }
    setLocalLoading(false);
  };
  useEffect(() => {
    functionToSearch();
  }, [email]);

  const changeEmail = (e) => {
    e.preventDefault();
    setEmail(document.getElementById('emailOfSearch').value);
  };

  if (localLoading) {
    return <Spinner title={'Bucando tus compras'} />;
  }

  return (
    <main>
      {!email ? (
        <>
          <Wrapper wrapper20 margin="40px auto 0 auto" width="500px">
            <InputContainerForEmail>
              <label htmlFor="emailOfSearch">Ingresa tu correo</label>
              <Input type="email" id="emailOfSearch" />
            </InputContainerForEmail>
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
          {listOfBuys.length !== 0 ? (
            listOfBuys.map((product) => {
              return <CardPurchase key={product.uid} {...product} />;
            })
          ) : (
            <p>No hay compras hechas.</p>
          )}
        </Wrapper>
      )}
    </main>
  );
};

export default MainPurchases;
