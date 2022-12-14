import React from 'react';
import CartItems from './CartItems';

export default function AddToCart(props) {

  const {items, newTotal, total} = props;
  return (
    <div id='cart' role='cart' aria-describedby="modal">
      <div id='cart-header'>
        <h3>Shopping Cart</h3>
      </div>
      {items.map((item) => {
        return(
          <div key={item.id}>
          <CartItems item={item} newTotal = {newTotal} />
          </div>
        )
      })}
      <div id='total' aria-label='total'>Total: ${total}</div>
      <button id='checkout'>Checkout</button>
    </div>
  );
}