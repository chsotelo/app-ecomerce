/* eslint-disable no-unreachable */
import React, { useContext, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './themes/GlobalStyles';
import theme from './themes/Theme';
import ExternalLayout from './components/layouts/ExternalLayout';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductsCategory from './pages/ProductsCategory';
import Product from './pages/Product';
import ShippingAdress from './pages/ShippingAdress';
import ShippingCreditCard from './pages/ShippingCreditCard';
import ShippingBuy from './pages/ShippingBuy';
import AddAdress from './pages/AddAdress';
import AddCreditCard from './pages/AddCreditCard';
import ListOfRoutes from './pages/objects/ListOfRoutes';
import ListSecondary from './pages/objects/ListSecondary';
import ExternalLayoutRoute from './components/layouts/ExternalLayoutRoute';
import AddProducts from './pages/AddProducts';
import Purchases from './pages/Purchases';
import firebase from 'firebase/app';
import MainSpinner from './components/spinner/MainSpinner';
import Swal from 'sweetalert2';

const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

export default function App() {
  const [listOfWish, setListOfWish] = useState([]);
  const [addressOfUser, setAddressOfUser] = useState(null);
  const [idOfBuy, setIdOfBuy] = useState(null);
  const [numberOfArticles, setNumberOfArticles] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dataOfCard, setDataOfCard] = useState(null);

  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser || null);
  const [dataOfUser, setDataOfUser] = useState(null);
  const [loading, setLoading] = useState({ status: true, title: null });

  const recoverDataOfUser = async (db, user) => {
    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      console.log('Usuario no encontrado!');
    } else {
      return doc.data();
    }
  };

  useEffect(() => {
    !currentUser &&
      firebase.auth().onAuthStateChanged(async (user) => {
        setLoading({ status: true, title: null });
        user ? setCurrentUser(user) : setCurrentUser(null);
        if (user) {
          const recoverUser = await recoverDataOfUser(firebase.firestore(), user);
          console.log('Recover', recoverUser);
          setDataOfUser(recoverUser);
          recoverUser?.card && setListOfWish(recoverUser.card);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: 'success',
            title: 'Sesion iniciada correctamente!',
          });
        }
        setLoading({ status: false, title: null });
      });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebase.auth(), currentUser, dataOfUser]);

  useEffect(() => {
    if (dataOfUser) {
      const db = firebase.firestore();
      const userRef = db.collection('users').doc(dataOfUser.uid);
      userRef
        .update(
          {
            card: listOfWish,
          },
          { merge: true },
        )
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
        });
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfWish]);

  const productValue = {
    listOfWish,
    setListOfWish,
    addressOfUser,
    setAddressOfUser,
    idOfBuy,
    setIdOfBuy,
    numberOfArticles,
    setNumberOfArticles,
    subTotalPrice,
    setSubTotalPrice,
    discount,
    setDiscount,
    dataOfCard,
    setDataOfCard,
    currentUser,
    setCurrentUser,
    dataOfUser,
    setDataOfUser,
    loading,
    setLoading,
  };
  if ((loading.status && !currentUser) || loading.status) {
    return <MainSpinner title={loading.title ?? 'CARGANDO DATOS!'} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider value={productValue}>
        <GlobalStyles />
        <ExternalLayout>
          <Switch>
            {dataOfUser?.typeOfUser === 'admin' && (
              <Route exact path={'/addProducts'} component={AddProducts} />
            )}
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/login'} component={Home} />
            <Route exact path={'/logout'} component={Home} />
            <Route exact path={'/my-cart'} component={ShoppingCart} />
            <Route exact path={'/category/:category'} component={ProductsCategory} />

            <Route exact path={'/product/:id'} component={Product} />
            {listOfWish.length !== 0 && (
              <>
                <Route exact path={'/shipping/my-address'} component={ShippingAdress} />
                <Route exact path={'/shipping/my-credit-card'} component={ShippingCreditCard} />
                <Route exact path={'/shipping/buy'} component={ShippingBuy} />
                <Route exact path={'/shipping/add-address'} component={AddAdress} />
                <Route exact path={'/shipping/add-credit-card'} component={AddCreditCard} />
              </>
            )}

            <Route exact path={'/purchases'} component={Purchases} />
            <Redirect from="*" to="/404" />
          </Switch>
        </ExternalLayout>
      </Provider>
    </ThemeProvider>
  );
}

export { Consumer as AppConsumer, AppContext };
