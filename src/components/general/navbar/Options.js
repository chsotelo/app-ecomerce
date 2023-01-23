import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { NavLinkStyled } from './styles/sNavbar';
import firebase from 'firebase/app';
import { AppContext } from '../../../App';

const Options = ({ icon, link, id }) => {
  const { setLoading, setCurrentUser, dataOfUser, setDataOfUser } = useContext(AppContext);

  const handleGoogleLogin = () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
          const user = await result.user;
          const data = {
            displayName: user.displayName,
            email: user.email,
            createdAt: user.metadata.createdAt,
            listOfLogins: user.metadata.lastLoginAt,
            photoURL: user.photoURL.replace('s96-c', 's400-c'),
          };
          await sendDataUserFromGoogle(data, user.uid, () => firebase.firestore());
          //recargar la pagina
          // window.location.reload();
          //navegar al directorio raiz
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          // ...
          console.error(errorCode, errorMessage, email, credential);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const sendDataUserFromGoogle = async (data, uid, db) => {
    try {
      const { displayName, email, photoURL } = data;
      const userRef = await db().collection('users').doc(uid);
      const doc = await userRef.get();
      if (!doc.exists) {
        await userRef.set(
          {
            username: displayName,
            email,
            photoURL,
            uid,
          },
          { merge: true },
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

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
        to={link !== '/login' ? link : ''}
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
                  handleGoogleLogin();
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
