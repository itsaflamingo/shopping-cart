import React, {useState, useEffect} from 'react';
import Cart from './Cart'

function Items(props) {

  const [closeCart, setCloseCart] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (e, item) => {
    setCart(cart.concat(item)) 
  }
  
  return (
    <div className="items">
            {props.items.map((item) => {
                return (
                    <div className='item' key={item.id} 
                    onClick={() => setCloseCart(false)}>
                        <p>{item.name}</p>
                        <button onClick={e => addToCart(e, item)}>Add to Cart</button>
                    </div>
                )
            })}
            {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} />}
    </div>
  );
}

export default Items;
