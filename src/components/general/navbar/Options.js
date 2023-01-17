import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { NavLinkStyled } from './styles/sNavbar';
import firebase from 'firebase/app';
import 'firebase/auth';

const Options = ({ icon, link, id }) => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result);
      // Utilizar los datos del usuario para iniciar sesión en tu aplicación
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li>
      <NavLinkStyled
        exact
        to={link !== '/login' ? link : ''}
        onClick={
          link !== '/login'
            ? null
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
                  handleGoogleLogin();
                  // Swal.fire('You agreed with T&C :)');
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
