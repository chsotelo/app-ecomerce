import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendProducts } from './algorithms/sendProduct';
import { Wrapper } from './../../styles/generalStyles';
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
} from './../../styles/generalComponents';
import { TextBodyLargeStyled } from './../product/styles/sMainProduct';
import Swal from 'sweetalert2';

const MainAddProducts = () => {
  const firestore = useFirestore();
  const storage = useStorage();
  const { register, handleSubmit, errors } = useForm();
  const [imageOfProduct, setImageOfProduct] = useState(null);

  const onSubmit = async (data) => {
    if (imageOfProduct) {
      await sendProducts(storage, firestore, data, imageOfProduct);
      document.getElementById('productSendForm').reset();
      setImageOfProduct(null);
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
    }
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    const imageOfProduct = document.getElementById('productImage');
    imageOfProduct.value = null;
    e = imageOfProduct.click();
    imageOfProduct.addEventListener('change', async (e) => {
      setImageOfProduct(e.target.files[0]);
    });
  };

  return (
    <main>
      <Wrapper margin="40px auto 80px auto" width="500px">
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
            <label htmlFor="description" id="description">
              Descripción
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
          <InputContainer>
            <label htmlFor="category" id="category">
              Categoria del producto
            </label>
            <Select
              name="category"
              {...register('category', { required: { value: true, message: 'Campo requerido*' } })}
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
              {...register('discount', { required: { value: true, message: 'Campo requerido*' } })}
            />
          </InputContainer>
          <TextBodyLargeStyled as="h4">Detalles</TextBodyLargeStyled>
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
          <InputContainer>
            <label htmlFor="prodcutImage" id="productImageLabel">
              Imagen del producto
            </label>
            <Input
              type="file"
              accept="image/*"
              id="productImage"
              name="image"
              style={{ display: 'none' }}
            />
            <ButtonContainer>
              <Button secondary small type="button" onClick={handleImageClick}>
                Añadir Imagen
              </Button>
            </ButtonContainer>
          </InputContainer>
          <Button type="submit">Subir producto</Button>
        </form>
      </Wrapper>
    </main>
  );
};

export default MainAddProducts;
