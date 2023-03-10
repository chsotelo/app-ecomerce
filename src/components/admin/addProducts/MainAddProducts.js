import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendProducts } from './algorithms/sendProduct';
import { Wrapper } from '../../../styles/generalStyles';
import { useFirestore, useStorage } from 'reactfire';
import {
  Input,
  InputContainer,
  ErrorMessageInput,
  TitleContainer,
  TextBodyLarge,
  TextArea,
  Button,
  ButtonContainer,
  Select,
  Option,
} from '../../../styles/generalComponents';
import { TextBodyLargeStyled } from '../../product/styles/sMainProduct';
import Swal from 'sweetalert2';
import Spinner from '../../spinner/Spinner';
import { WrapperDuplex } from './style/sMainAddProducts';
import { handleImageClick } from './algorithms/handleImageClick';

const MainAddProducts = () => {
  const firestore = useFirestore();
  const storage = useStorage();
  const { register, handleSubmit, errors, reset } = useForm();
  const [imageOfProduct, setImageOfProduct] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const [imageLocal, setImageLocal] = useState(null);

  const onSubmit = async (data) => {
    if (imageOfProduct) {
      document.getElementById('productSendForm').reset();
      reset();
      setImageOfProduct(null);
      await sendProducts(storage, firestore, data, imageOfProduct, setLocalLoading);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Guardado Correctamente!',
      });
      setLocalLoading(false);
    }
  };

  return (
    <main>
      {localLoading ? (
        <Spinner title={'Subiendo tu producto ...'} />
      ) : (
        <Wrapper margin="40px auto 80px auto" width="900px">
          <TitleContainer bottomDesktop20>
            <TextBodyLarge>Agrega un nuevo producto</TextBodyLarge>
          </TitleContainer>
          <form id="productSendForm" onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label htmlFor="title" id="title">
                Nombre del producto
              </label>
              <Input
                type="text"
                name="title"
                {...register('title', { required: { value: true, message: 'Campo requerido*' } })}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="description" id="description">
                Descripci??n
              </label>
              <TextArea
                type="text"
                name="description"
                {...register('description', {
                  required: { value: true, message: 'Campo requerido*' },
                })}
              />
              <ErrorMessageInput>
                {errors && errors.description && (
                  <p style={{ color: 'red' }}>{errors.description.message}</p>
                )}
              </ErrorMessageInput>
            </InputContainer>
            <WrapperDuplex>
              <InputContainer>
                <label htmlFor="stock" id="stock">
                  Stock
                </label>
                <Input
                  type="number"
                  name="stock"
                  {...register('stock', { required: { value: true, message: 'Campo requerido*' } })}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="category" id="category">
                  Categoria del producto
                </label>
                <Select
                  name="category"
                  {...register('category', {
                    required: { value: true, message: 'Campo requerido*' },
                  })}
                >
                  <Option value="Auriculares">Auriculares</Option>
                  <Option value="Altavoz">Altavoz</Option>
                  <Option value="Reproductor">Reproductor de sonido</Option>
                  <Option value="Laptop">Laptops</Option>
                  <Option value="Controlador">Controladores</Option>
                  <Option value="Smarthphone">Smarthphones</Option>
                  <Option value="Profesional">Profesional</Option>
                </Select>
              </InputContainer>
              <InputContainer>
                <label htmlFor="price" id="price">
                  Precio (PEN)
                </label>
                <Input
                  type="number"
                  name="price"
                  {...register('price', { required: { value: true, message: 'Campo requerido*' } })}
                />
                <ErrorMessageInput>
                  {errors && errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                </ErrorMessageInput>
              </InputContainer>
              <InputContainer>
                <label htmlFor="discount" id="discount">
                  Descuento (%)
                </label>
                <Input
                  type="number"
                  name="discount"
                  {...register('discount', {
                    required: { value: true, message: 'Campo requerido*' },
                  })}
                />
              </InputContainer>
            </WrapperDuplex>
            <TextBodyLargeStyled as="h4">Detalles</TextBodyLargeStyled>
            <WrapperDuplex>
              <InputContainer>
                <label htmlFor="mark" id="mark">
                  Marca
                </label>
                <Input
                  type="text"
                  name="mark"
                  {...register('mark', { required: { value: true, message: 'Campo requerido*' } })}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="color" id="color">
                  Color
                </label>
                <Input type="text" name="color" {...register('color')} />
              </InputContainer>
              <InputContainer>
                <label htmlFor="weight" id="weight">
                  Peso
                </label>
                <Input type="text" name="weight" {...register('weight')} />
              </InputContainer>
            </WrapperDuplex>
            <InputContainer>
              <label htmlFor="prodcutImage" id="productImageLabel">
                Imagen del producto
              </label>
              <Input
                type="file"
                accept="image/*"
                id="productImage"
                name="image"
                onChange={(e) => {
                  setImageLocal(null);
                  const objectUrl = URL.createObjectURL(e.target.files[0]);
                  setImageLocal(objectUrl);
                }}
                style={{ display: 'none' }}
              />
              <ButtonContainer>
                <Button
                  secondary
                  small
                  type="button"
                  onClick={(e) => handleImageClick(e, setImageOfProduct)}
                >
                  A??adir Imagen
                </Button>
              </ButtonContainer>
              {imageOfProduct && <img src={imageLocal} alt={'Imagen'} />}
            </InputContainer>
            <Button type="submit">Subir producto</Button>
          </form>
        </Wrapper>
      )}
    </main>
  );
};

export default MainAddProducts;
