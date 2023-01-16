import React, {useContext} from 'react';
import {AppContext} from '../../App'
import article from './../general/article.jpg'
import { ProductContainer } from './styles/sSelectedProduct'
import { ReactComponent as DeleteSVG } from './../../icons/others/delete.svg'

const SelectedProduct = ({photoUrl, title, price, quantity, uid}) => {
  
  const {listOfWish, setListOfWish} = useContext(AppContext)

  const handleDeleteProduct = (e) => {
    e.preventDefault()
    const localListOfWish = []
    listOfWish.map(product => {
      if(product.uid !== uid){
        localListOfWish.push(product)
      }
    })
    setListOfWish(localListOfWish)
  }
  return (
    <ProductContainer>
      <img src={photoUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p className="price">PEN <span>{price}.90</span></p>
        <p className="count">Cantidad: <span>{quantity}</span></p>
      </div>
      <DeleteSVG className="icon" onClick={handleDeleteProduct}/>
    </ProductContainer>
  );
}

export default SelectedProduct;
