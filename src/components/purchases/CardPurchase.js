import React from 'react';
import { ProductContainer } from './../shoppingCart/styles/sSelectedProduct'

const CardPurchase = ({photoUrl, title, price, quantity}) => {
  return (
    <ProductContainer>
      <img src={photoUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p className="price">PEN <span>{price}.90</span></p>
        <p className="count">Cantidad: <span>{quantity}</span></p>
      </div>
    </ProductContainer>
  );
}

export default CardPurchase;
