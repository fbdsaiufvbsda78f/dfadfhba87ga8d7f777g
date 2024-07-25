import React from 'react';
import './Basket.css';

function Basket({basket, setBasket}) {
  const price = basket.map ((item) => [item.price])
  const sumbasket = price.reduce(function(sum, elem) {
    return sum + Number(elem);
  }, 0)
  return (
    <div className="Basket">
        <h1>Корзина</h1>
        {basket.map((item) => {
          return <div class='tov' key={item.id}>
              <div class='exp'></div>
              <p>{item.header}</p>
              <p>{item.price} руб</p>
              <button onClick={() => setBasket(basket.filter(value => value.id !== item.id))}>Удалить</button>
          </div>
        })}
        <div class='sum'>
          <h3>Общая стоимость:</h3>
          <div>{sumbasket} руб.</div>
          <button>Офомить заказ</button>
        </div>
    </div>
  );
}

export default Basket;