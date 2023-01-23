import { Route } from 'react-router-dom';
import AddProducts from '../pages/AddProducts';
import Admin from '../pages/AdminPage';
import EditProductSelected from '../pages/EditProductSelected';
import ProductsEdit from '../pages/ProductsEdit';

export const RoutesAdmin = () => {
  return (
    <>
      <Route exact path={'/admin-route'} component={Admin} />
      <Route exact path={'/addProducts'} component={AddProducts} />
      <Route exact path={'/editProducts'} component={ProductsEdit} />
      <Route exact path={'/editProductSelected'} component={EditProductSelected} />
    </>
  );
};
