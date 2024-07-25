import React from 'react';
import './Product.css';

function Product({id, header, image, price, basket, setBasket}) {
  return (
    <div className="Product" key={id}>
      <div></div>
      <h1>{header}</h1>
      <p>{`${price} руб`}</p>
      {
        (() => {
          const index = basket.findIndex(value => value.id === id);
          if (index === -1) {
            return (
              <button onClick={() => setBasket([...basket, {id,header,price }])}>В корзину</button>
            );
          } else {
            const newBasket = basket.filter(value => value.id !== id);
            return (
              <button onClick={() => setBasket(newBasket)}>Удалить из корзины</button>
            );
          }
        })()
      }
    </div>
  );
}

export default Product;