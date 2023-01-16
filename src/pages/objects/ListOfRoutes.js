import Home from './../Home'
import ShoppingCart from './../ShoppingCart'

const ListOfRoutes = [
  {
    path: '/',
    component: Home,
    isHeaderPrincipal: true,
  },
  {
    path: '/my-cart',
    component: ShoppingCart,
    isHeaderPrincipal: true,
  },
]

export default ListOfRoutes
