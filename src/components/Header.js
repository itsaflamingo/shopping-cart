import React, {useEffect, useState} from 'react';
import shoppingCart from '../images/shopping-cart.png'
import Cart from './Cart'

export default function Header(props) {

    const [closeCart, setCloseCart] = useState(true);
    const {total, newTotal, cart, navHome} = props;

  return (
      <div id='shop-header'>
        <h2>Shop</h2>
        <div id='buttons'>
        <button onClick={navHome}>Home</button>
        <div id='cart-icon' style={{
                backgroundImage: `url(${shoppingCart})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }} onClick={() => setCloseCart(!closeCart)}>
                <div id='cart-quantity'>{cart.length}</div>
            </div>
        </div>
        {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} total={total} newTotal={newTotal} />}
      </div>
  );
}