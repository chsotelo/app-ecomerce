import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper } from './../../styles/generalStyles';
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
import {
  nameValidator,
  lastNameValidator,
  phoneNumberValidator,
  addressValidator,
  cityValidator,
  stateValidator,
  postalCodeValidator,
  emailValidator,
} from './objects/formValidators';
import { useFirestore } from 'reactfire';

const MainAddAdress = () => {
  const history = useHistory();
  const firestore = useFirestore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { setAddressOfUser, dataOfUser } = useContext(AppContext);

  const onSubmit = (data) => {
    setAddressOfUser(data);
    if (dataOfUser) {
      //si existe enviar a la base de datos
      firestore
        .collection('users')
        .doc(dataOfUser.uid)
        .set(
          {
            address: data,
          },
          { merge: true },
        )
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch((error) => {
          console.log('Error writing document: ', error);
          throw new Error(error);
        });
    }
    history.push('/shipping/my-address');
  };

  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <TitleContainer bottomDesktop20>
          <TextBodyLarge>Agrega una dirección de envio</TextBodyLarge>
        </TitleContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name" id="name">
              Nombres completos
            </label>
            <Input type="text" name="name" {...register('name', nameValidator)} />
            <ErrorMessageInput>{errors?.name?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="lastName" id="lastName">
              Apellidos
            </label>
            <Input type="text" name="lastName" {...register('lastName', lastNameValidator)} />
            <ErrorMessageInput>{errors?.lastName?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="email" id="email">
              Correo electrónico
            </label>
            <Input type="text" name="email" {...register('email', emailValidator)} />
            <ErrorMessageInput>{errors?.email?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="phoneNumber" id="phoneNumber">
              Número telefónico
            </label>
            <Input
              type="text"
              name="phoneNumber"
              {...register('phoneNumber', phoneNumberValidator)}
            />
            <ErrorMessageInput>{errors?.phoneNumber?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="address" id="address">
              Dirección
            </label>
            <Input type="text" name="address" {...register('address', addressValidator)} />
            <ErrorMessageInput>{errors?.address?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="city" id="city">
              Ciudad
            </label>
            <Input type="text" name="city" {...register('city', cityValidator)} />
            <ErrorMessageInput>{errors?.city?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="state" id="state">
              Estado / departamento
            </label>
            <Input type="text" name="state" {...register('state', stateValidator)} />
            <ErrorMessageInput>{errors?.state?.message}</ErrorMessageInput>
          </InputContainer>
          <InputContainer>
            <label htmlFor="postalCode" id="postalCode">
              Código postal
            </label>
            <Input type="text" name="postalCode" {...register('postalCode', postalCodeValidator)} />
            <ErrorMessageInput>{errors?.postalCode?.message}</ErrorMessageInput>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">Usar esta dirección</Button>
          </ButtonContainer>
        </form>
      </Wrapper>
    </main>
  );
};

export default MainAddAdress;
