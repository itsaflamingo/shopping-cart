import React, {useState, useEffect} from 'react';
import Cart from './Cart'

function Items(props) {

  const [closeCart, setCloseCart] = useState(true);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState();

  useEffect(() => {
    setQuantity(1);
  }, [item])

  const addToCart = (e, item) => setCart(cart.concat(item)) 

  const updateQuantity = () => {
    const increaseQuantity = (e, item) => {
      setItem(item);
      setQuantity(quantity+1);
      // problem. If it is included, have to click 2x for new num. 
      updateObj(e, item);
      console.log(quantity)
    };
    
    const decreaseQuantity = (e, item) => {
      if(item.quantity === 0) return;
      setQuantity(item.quantity);
      setQuantity(quantity-1);
      updateObj(e, item);
    };
    
    return {
      increaseQuantity,
      decreaseQuantity,
    }
  }

  const updateObj = (e, item) => {
    if(e === undefined) return;
      item.quantity = quantity;
  }

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
            {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} updateQuantity={updateQuantity} quantity={quantity} updateObj={updateObj} />}
    </div>
  );
}

export default Items;