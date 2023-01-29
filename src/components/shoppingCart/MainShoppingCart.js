import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import firebase from 'firebase/app';
import SelectedProduct from './SelectedProduct';
import { Button, ButtonContainer } from './../../styles/generalComponents';
import { Wrapper } from './../../styles/generalStyles';
import { TitleText, TitleContainer, TextBodySmall } from './../../styles/generalComponents';
import Swal from 'sweetalert2';
import { handleGoogleLogin } from '../general/algorithms/handleGoogleLogin';

const MainShoppingCart = () => {
  const { listOfWish, dataOfUser, setLoading } = useContext(AppContext);
  useEffect(() => {}, [listOfWish]);
  return (
    <main>
      <Wrapper wrapper20 margin="40px auto 0 auto" width="500px">
        <TitleContainer bottomDesktop20>
          <TitleText>Tu carrito</TitleText>
        </TitleContainer>
        {listOfWish.length === 0 ? (
          <TextBodySmall>No tienes ningun producto seleccionado</TextBodySmall>
        ) : (
          <>
            <ul>
              {listOfWish.map((product) => {
                return <SelectedProduct key={product.uid} {...product} />;
              })}
            </ul>
            <ButtonContainer>
              <Link to={dataOfUser ? '/shipping/my-address' : null}>
                <Button
                  onClick={
                    !dataOfUser
                      ? async () => {
                          const { value: accept } = await Swal.fire({
                            title: 'Iniciar sesión con para continuar',
                            input: 'checkbox',
                            inputValue: 1,
                            inputPlaceholder: 'Aceptar términos y condiciones',
                            iconHtml:
                              '<img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" height="60" width="60"/>',
                            confirmButtonText:
                              'Iniciar Sesión con google <i class="fa fa-arrow-right"></i>',
                            inputValidator: (result) => {
                              return !result && 'Necesitas aceptar los términos y condiciones';
                            },
                          });
                          if (accept) {
                            handleGoogleLogin({ dataOfUser, setLoading, firebase });
                          }
                        }
                      : null
                  }
                >
                  Comprar todo
                </Button>
              </Link>
            </ButtonContainer>
          </>
        )}
      </Wrapper>
    </main>
  );
};

export default MainShoppingCart;
