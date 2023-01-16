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
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider value={productValue}>
        <GlobalStyles />
        <ExternalLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
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
            <Route exact path={'/addProducts'} component={AddProducts} />
            <Route exact path={'/purchases'} component={Purchases} />
            <Redirect from="*" to="/404" />
          </Switch>
        </ExternalLayout>
      </Provider>
    </ThemeProvider>
  );
}

export { Consumer as AppConsumer, AppContext };
