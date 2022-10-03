import React, {useState} from 'react';
import Cart from './Cart'
import Item from './Item';

function Items(props) {

  const [closeCart, setCloseCart] = useState(true);
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const addToCart = (item) => setCart(cart.concat(item)) 

  const newTotal = (price) => setTotal(total + price);

  return (
    <div className="items">
            {props.items.map((item) => {
                return (
                  <div key={item.id}>
                    <Item item={item} addToCart={addToCart} setCloseCart={setCloseCart} />
                  </div>
                )
            })}
            {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} total={total} newTotal={newTotal} />}
    </div>
  );
}

export default Items;
