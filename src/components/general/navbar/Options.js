import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NavLinkStyled } from './styles/sNavbar';
import firebase from 'firebase/app';
import { AppContext } from '../../../App';
import { useParams } from 'react-router-dom';
import { handleGoogleLogin } from '../algorithms/handleGoogleLogin';

const Options = ({ icon, link, id }) => {
  const { setLoading, setCurrentUser, dataOfUser, setDataOfUser, currentUser, pathName } =
    useContext(AppContext);

  const closeSession = async () => {
    try {
      await firebase.auth().signOut();
      setDataOfUser(null);
      setCurrentUser(null);
      setLoading(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li>
      <NavLinkStyled
        exact
        to={link !== '/login' ? link : pathName}
        onClick={
          link !== '/login'
            ? null
            : dataOfUser
            ? async () => {
                const { value: accept } = await Swal.fire({
                  title: 'CERRAR SESIÓN',
                  input: 'checkbox',
                  inputValue: 1,
                  inputPlaceholder: 'Estoy seguro de cerrar sesión',
                  confirmButtonText: 'Cerrar sesión <i class="fa fa-arrow-right"></i>',
                  inputValidator: (result) => {
                    return !result && 'Aceptar para cerrar sesión';
                  },
                });

                if (accept) {
                  closeSession();
                }
              }
            : async () => {
                const { value: accept } = await Swal.fire({
                  title: 'Inicio de sesión',
                  input: 'checkbox',
                  inputValue: 1,
                  inputPlaceholder: 'Aceptar términos y condiciones',
                  confirmButtonText: 'Iniciar Sesión con google <i class="fa fa-arrow-right"></i>',
                  inputValidator: (result) => {
                    return !result && 'Necesitas aceptar los términos y condiciones';
                  },
                });

                if (accept) {
                  handleGoogleLogin({ dataOfUser, setLoading, firebase });
                }
              }
        }
        activeClassName={link !== '/login' ? 'iconActive' : ''}
      >
        {icon}
        <span></span>
      </NavLinkStyled>
    </li>
  );
};

export default Options;
