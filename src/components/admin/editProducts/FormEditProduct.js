import React, {
  useContext,
  // useEffect,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { updateProduct } from './algorithms/updateProduct';
import { Wrapper } from '../../../styles/generalStyles';
import { useFirestore, useStorage } from 'reactfire';
import {
  Input,
  InputContainer,
  ErrorMessageInput,
  // TitleContainer,
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
import { AppContext } from '../../../App';
import { MessageContainer, TitleContainerEdit, WrapperDuplex } from './styles/sFormEditProduct';
import { Link } from 'react-router-dom';
import { handleImageClick } from './algorithms/handleImageClick';

export const FormEditProduct = () => {
  const firestore = useFirestore();
  const storage = useStorage();
  const { setProductSelectedForEdit, productSelectedForEdit: productSelected } =
    useContext(AppContext);
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      title: productSelected?.title,
      stock: productSelected?.stock,
      description: productSelected?.description,
      category: productSelected?.category,
      price: productSelected?.price,
      discount: productSelected?.discount,
      mark: productSelected?.mark,
      color: productSelected?.color,
      weight: productSelected?.weight,
    },
  });
  const [imageOfProduct, setImageOfProduct] = useState(null);
  const [imageLocal, setImageLocal] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);

  const onCancel = ({ setProductSelectedForEdit }) => {
    setProductSelectedForEdit(null);
  };

  const onSubmit = async (data) => {
    document.getElementById('productSendForm').reset();
    reset();
    const uuid = productSelected?.uid;
    await updateProduct(storage, firestore, data, imageOfProduct, setLocalLoading, uuid);
    setImageOfProduct(null);
    setProductSelectedForEdit(null);
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
      title: 'Actualizado Correctamente!',
    });
    setLocalLoading(false);
  };

  return (
    <main>
      {localLoading ? (
        <Spinner title={'Editando tu producto ...'} />
      ) : productSelected ? (
        <Wrapper margin="40px auto 80px auto" width="900px">
          <TitleContainerEdit>
            <TextBodyLarge>Editar el producto</TextBodyLarge>
            <Link to={'editProducts'}>
              <Button
                secundary
                onClick={() => {
                  onCancel({ setProductSelectedForEdit });
                }}
              >
                cancelar editar
              </Button>
            </Link>
          </TitleContainerEdit>
          <form id="productSendForm" onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label htmlFor="title" id="title">
                Nombre del producto
              </label>
              <Input
                type="text"
                name="title"
                defaultValue={productSelected?.title}
                {...register('title', { required: { value: true, message: 'Campo requerido*' } })}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="description" id="description">
                Descripción
              </label>
              <TextArea
                type="text"
                name="description"
                defaultValue={productSelected?.description}
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
                  defaultValue={productSelected?.stock}
                  {...register('stock', {
                    required: { value: true, message: 'Campo requerido*' },
                  })}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="category" id="category">
                  Categoria del producto
                </label>
                <Select
                  name="category"
                  defaultValue={productSelected?.category}
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
                  defaultValue={productSelected?.price}
                  {...register('price', {
                    required: { value: true, message: 'Campo requerido*' },
                  })}
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
                  defaultValue={productSelected?.discount}
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
                  defaultValue={productSelected?.mark}
                  {...register('mark', {
                    required: { value: true, message: 'Campo requerido*' },
                  })}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="color" id="color">
                  Color
                </label>
                <Input
                  type="text"
                  name="color"
                  defaultValue={productSelected?.color}
                  {...register('color')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="weight" id="weight">
                  Peso
                </label>
                <Input
                  type="text"
                  name="weight"
                  defaultValue={productSelected?.weight}
                  {...register('weight')}
                />
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
                  Actualizar Imagen
                </Button>
              </ButtonContainer>
            </InputContainer>
            <WrapperDuplex>
              {!imageOfProduct && (
                <img src={productSelected?.photoUrl} alt={productSelected?.title} />
              )}
              {imageOfProduct && <img src={imageLocal} alt={productSelected?.title} />}
            </WrapperDuplex>
            <Button type="submit">Editar producto</Button>
          </form>
        </Wrapper>
      ) : (
        <MessageContainer>
          <h3>Selecciona algun producto para editar</h3>
          <Link to={'editProducts'}>
            <Button secundary>Volver</Button>
          </Link>
        </MessageContainer>
      )}
    </main>
  );
};
