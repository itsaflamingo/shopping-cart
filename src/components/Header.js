import React, { useState } from 'react';
import shoppingCart from '../images/shopping-cart.png'
import Cart from './Cart'
import home from '../images/home.png'
import Search  from './Search';

export default function Header(props) {

    const [closeCart, setCloseCart] = useState(true);
    const [openSearch, setOpenSearch] = useState(true);
    const { total, newTotal, cart, navHome, onChangeHandler } = props;

  return (
      <div id='shop-header'>
        <h2>Fake Shop</h2>
        <div id='buttons'>
        <Search setOpenSearch={setOpenSearch} openSearch={openSearch} onChangeHandler={onChangeHandler} />
        <div id='home-icon' data-testid='home-icon' onClick={navHome} style={{
                backgroundImage: `url(${home})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}></div>
        <div id='cart-icon' data-testid='cart-icon' style={{
                backgroundImage: `url(${shoppingCart})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }} 
              onClick={() => setCloseCart(!closeCart)}>
                <div id='cart-quantity'>{cart.length}</div>
            </div>
        </div>
        {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} total={total} newTotal={newTotal} />}
      </div>
  );
}