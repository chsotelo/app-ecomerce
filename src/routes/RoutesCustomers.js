import { Route } from 'react-router-dom';
import AddAdress from '../pages/AddAdress';
import AddCreditCard from '../pages/AddCreditCard';
import ShippingAdress from '../pages/ShippingAdress';
import ShippingBuy from '../pages/ShippingBuy';
import ShippingCreditCard from '../pages/ShippingCreditCard';

export const RoutesCustomers = () => {
  return (
    <>
      <Route exact path={'/shipping/my-address'} component={ShippingAdress} />
      <Route exact path={'/shipping/my-credit-card'} component={ShippingCreditCard} />
      <Route exact path={'/shipping/buy'} component={ShippingBuy} />
      <Route exact path={'/shipping/add-address'} component={AddAdress} />
      <Route exact path={'/shipping/add-credit-card'} component={AddCreditCard} />
    </>
  );
};
