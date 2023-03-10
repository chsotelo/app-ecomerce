import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CardPage, Wrapper } from './../../styles/generalStyles';
import {
  TitleContainer,
  TextBodyLarge,
  Button,
  ButtonContainer,
  DetailsProduct,
  Input,
  ErrorMessageInput,
  InputContainer,
} from './../../styles/generalComponents';
import { CVVValidator, creditCardValidator, nameValidator } from './objects/formValidators';
import { CardPageContainer, ContainerInCard } from './styles/sMainAddCreditCard';
import Spinner from '../spinner/Spinner';

const MainAddCreditCard = () => {
  const history = useHistory();
  const { setDataOfCard, setChecked } = useContext(AppContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setDataOfCard(data);
    history.push('/shipping/my-credit-card');
  };

  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <CardPage>
          <CardPageContainer>
            <div>
              <p className="title">Visa Classic Card</p>
              <span className="numberCard">4557 XXXX XXXX XXXX</span>
              <div className="container-date">
                <p className="nameDateCard">VALIDO HASTA</p>
                <p className="dateCard">12/24</p>
              </div>
              <p className="nameCard">C. ARIAS</p>
            </div>
            <img src="" alt="" />
          </CardPageContainer>
        </CardPage>
        <TitleContainer bottomDesktop20>
          <TextBodyLarge>Ingresa información de tu tarjeta bancaria</TextBodyLarge>
        </TitleContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name" id="name">
              Nombre registrado en la tarjeta
            </label>
            <Input type="text" name="name" {...register('name', nameValidator)} />
            <ErrorMessageInput>{errors?.name?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="creditCardNumber" id="creditCardNumber">
              Número de tarjeta
            </label>
            <Input
              type="text"
              name="creditCardNumber"
              {...register('creditCardNumber', creditCardValidator)}
            />
            <ErrorMessageInput>{errors?.creditCardNumber?.message}</ErrorMessageInput>
          </InputContainer>
          <ContainerInCard>
            <InputContainer>
              <label htmlFor="CVV" id="CVV">
                CVV
              </label>
              <Input type="text" name="CVV" {...register('CVV', CVVValidator)} />
              <ErrorMessageInput>{errors?.CVV?.message}</ErrorMessageInput>
            </InputContainer>
            <InputContainer>
              <label htmlFor="mount" id="mount">
                Fecha de expiración
              </label>
              <div>
                <Input type="month" name="mount" min="2021-05-19" />
              </div>
            </InputContainer>
          </ContainerInCard>
          <ButtonContainer>
            <Button type="submit">Continuar</Button>
          </ButtonContainer>
        </form>
      </Wrapper>
    </main>
  );
};

export default MainAddCreditCard;
