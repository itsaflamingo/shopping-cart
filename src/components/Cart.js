import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import {itemsMade} from './shop-items';


function AddToCart(props) {

  const [quantity, setQuantity] = useState(0);

  const updateQuantity = () => {
    const increaseQuantity = (e, num) => {
      setQuantity(num+1)
      console.log(quantity)
      updateObj(e)
    }
    const decreaseQuantity = (num) => setQuantity(num-1);
    const updateObj = (e) => {
      if(e === undefined) return;
      const name = e.target.name;
      console.log(e.target.name);
      itemsMade.forEach(item => {
        if(item.name === name) {
          item.quantity = quantity;
        }
        else {
          return;
        }
        console.log(item)
      })
    }

    return {
      increaseQuantity,
      decreaseQuantity,
      updateObj
    }
  }

  return (
    <div id='cart' role='cart' aria-describedby="modal">
      <div>
        <h3>Shopping Cart</h3>
        <button>Close</button>
      </div>
      {props.items.map((item) => {
        return(
          <div className='cart-item' key={item.id}>
            <div className='picture' id='cart-picture'></div>
            <h3 className='item-name'>{item.name}</h3>
            <h4 className='price'>{item.price}</h4>
            <div id='item-counter'>{item.quantity}</div>
            <div id='plus-minus-item'>
              <button id='add' name={item.name} onClick={(e) => updateQuantity().increaseQuantity(e, quantity)}>+</button>
              <button id='remove' onClick={() => updateQuantity().decreaseQuantity(quantity)}>-</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default AddToCart;
