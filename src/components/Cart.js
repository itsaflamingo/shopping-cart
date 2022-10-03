import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import Counter from './Counter'
import CartItems from './CartItems';

export default function AddToCart(props) {

  return (
    <div id='cart' role='cart' aria-describedby="modal">
      <div>
        <h3>Shopping Cart</h3>
        <button>Close</button>
      </div>
      {props.items.map((item) => {
        return(
          <div key={item.id}>
          <CartItems item={item} />
          </div>
        )
      })}
      <div id='total'>Total: ${props.total}</div>

    </div>
  );
}