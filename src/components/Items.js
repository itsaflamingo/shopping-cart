import React, {useState, useEffect} from 'react';
import Cart from './Cart'

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
                    <div className='item' 
                          key={item.id} 
                          onClick={() => setCloseCart(false)}>
                        <div className='image' style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                          }}>
                            <button onClick={e => addToCart(e, item)}>Add to Cart</button>
                          </div>
                        <div className='item-info'>
                          <p>{item.title}</p>
                          <p>${item.price}</p>
                        </div>
                    </div>
                )
            })}
            {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} total={total} />}
    </div>
  );
}

export default Items;
