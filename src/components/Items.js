import React, {useState} from 'react';
import Cart from './Cart'
import Item from './Item';

function Items(props) {

  const [closeCart, setCloseCart] = useState(true);
  const [cart, setCart] = useState([]);

  const [item, setItem] = useState({price: 0});
  const [total, setTotal] = useState(0);

  const addToCart = (e, item) => setCart(cart.concat(item)) 

  return (
    <div className="items">
            {props.items.map((item) => {
                return (
                  <div key={item.id}>
                    <Item item={item} addToCart={addToCart} setCloseCart={setCloseCart} />
                  </div>
                )
            })}
            {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} total={total} />}
    </div>
  );
}

export default Items;
