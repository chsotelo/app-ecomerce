/* eslint-disable no-unreachable */
import React, { useContext, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './themes/GlobalStyles';
import theme from './themes/Theme';
import axios from 'axios';
import ExternalLayout from './components/layouts/ExternalLayout';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductsCategory from './pages/ProductsCategory';
import Product from './pages/Product';
import Purchases from './pages/Purchases';
import firebase from 'firebase/app';
import MainSpinner from './components/spinner/MainSpinner';
import Swal from 'sweetalert2';
import NotFound from './components/notFound/MainNotFound';
import { RoutesAdmin } from './routes/RoutesAdmin';
import AddProducts from './pages/AddProducts';
import { recoverDataOfUser } from './algorithms/recoverDataOfUser';
import { updateListOfWish } from './algorithms/updateListOfWish';
import ShippingAdress from './pages/ShippingAdress';
import ShippingCreditCard from './pages/ShippingCreditCard';
import ShippingBuy from './pages/ShippingBuy';
import AddAdress from './pages/AddAdress';
import AddCreditCard from './pages/AddCreditCard';
import { recoverDataOfDollar } from './algorithms/recoverDataOfDollar';

const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

const requestDataOfDollar = async ({ db, dataOfUser, setDataOfDollar }) => {
  const dataRequest = await recoverDataOfDollar({ db, dataOfUser });
  setDataOfDollar(dataRequest);
};

export default function App() {
  const db = firebase.firestore();
  const [listOfWish, setListOfWish] = useState([]);
  const [addressOfUser, setAddressOfUser] = useState(null);
  const [idOfBuy, setIdOfBuy] = useState(null);
  const [numberOfArticles, setNumberOfArticles] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dataOfCard, setDataOfCard] = useState(null);
  const [dataOfDollar, setDataOfDollar] = useState(null);
  const [checked, setChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser || null);
  const [dataOfUser, setDataOfUser] = useState(null);
  const [loading, setLoading] = useState({ status: true, title: null });
  const [allProdutsLocal, setAllProductsLocal] = useState(null);
  const [productSelectedForEdit, setProductSelectedForEdit] = useState(null);
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    dataOfUser && updateListOfWish({ listOfWish, dataOfUser, db });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfWish, dataOfUser]);

  useEffect(() => {
    !currentUser &&
      !dataOfUser &&
      firebase.auth().onAuthStateChanged(async (user) => {
        setLoading({ status: true, title: null });
        user ? setCurrentUser(user) : setCurrentUser(null);
        if (user) {
          const recoverUser = await recoverDataOfUser(db, user);

          // console.log(recoverUser);
          setDataOfUser(recoverUser);
          setAddressOfUser(recoverUser?.address ?? null);
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
  }, [currentUser, dataOfUser]);

  useEffect(() => {
    !dataOfDollar && requestDataOfDollar({ db, dataOfUser, setDataOfDollar });
    console.log(dataOfDollar);
  }, [dataOfDollar, dataOfUser]);

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
    allProdutsLocal,
    setAllProductsLocal,
    productSelectedForEdit,
    setProductSelectedForEdit,
    pathName,
    setPathName,
    dataOfDollar,
    checked,
    setChecked,
  };
  if ((loading.status && !currentUser) || loading.status) {
    return <MainSpinner title={loading.title ?? 'Cargando datos!'} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider value={productValue}>
        <GlobalStyles />
        <ExternalLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/login'} component={Home} />
            <Route exact path={'/logout'} component={Home} />
            <Route exact path={'/my-cart'} component={ShoppingCart} />
            <Route exact path={'/category/:category'} component={ProductsCategory} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route exact path={'/purchases'} component={Purchases} />
            <Route exact path={'/addProducts'} component={AddProducts} />
            <Route exact path={'/shipping/my-address'} component={ShippingAdress} />
            <Route exact path={'/shipping/my-credit-card'} component={ShippingCreditCard} />
            <Route exact path={'/shipping/buy'} component={ShippingBuy} />
            <Route exact path={'/shipping/add-address'} component={AddAdress} />
            <Route exact path={'/shipping/add-credit-card'} component={AddCreditCard} />
            {dataOfUser?.typeOfUser === 'admin' && <RoutesAdmin />}

            <Route path={'*'} component={NotFound} />
          </Switch>
        </ExternalLayout>
      </Provider>
    </ThemeProvider>
  );
}

export { Consumer as AppConsumer, AppContext };
