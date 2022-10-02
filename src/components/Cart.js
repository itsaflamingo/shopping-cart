import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './Items';


function AddToCart(props) {

  return (
    <div id='cart' role='cart' aria-describedby="modal">
      <div>
        <h3>Shopping Cart</h3>
        <button>Close</button>
      </div>
      {props.items.map((item) => {
        return(
          <div className='cart-item' key={item.id}>
            <div className='picture' id='cart-picture'
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <h3 className='item-name'>{item.name}</h3>
            <h4 className='price'>${item.price}</h4>
            <input id='item-counter' 
                  name = {item.name}
                  onChange={(e) => props.updateObj(e, item)} 
                  value={item.quantity} />
            <div id='item-quantity'>
              <button id='add' 
                      value={item.quantity} 
                      onClick={(e) => props.updateQuantity().increaseQuantity(e, item)}>+</button>
              <button id='remove' 
                      onClick={(e) => props.updateQuantity().decreaseQuantity(e, item, props.quantity)}>-</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default AddToCart;
