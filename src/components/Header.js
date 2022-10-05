import React, {useEffect, useState} from 'react';
import shoppingCart from '../images/shopping-cart.png'
import Cart from './Cart'
import home from '../images/home.png'
import search from '../images/search.png'
import Search  from './Search';

export default function Header(props) {

    const [closeCart, setCloseCart] = useState(true);
    const [openSearch, setOpenSearch] = useState(false);
    const {total, newTotal, cart, navHome} = props;

  return (
      <div id='shop-header'>
        <h2>Shop</h2>
        <div id='buttons'>
        <div id='search' style={{
                backgroundImage: `url(${search})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}></div>
        <div id='to-home' onClick={navHome} style={{
                backgroundImage: `url(${home})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}></div>
        <div id='cart-icon' style={{
                backgroundImage: `url(${shoppingCart})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }} onClick={() => setCloseCart(!closeCart)}>
                <div id='cart-quantity'>{cart.length}</div>
            </div>
        </div>
        {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} total={total} newTotal={newTotal} />}
        {openSearch && <Search />}
      </div>
  );
}