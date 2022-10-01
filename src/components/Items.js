import React, {useState, useEffect} from 'react';
import Cart from './Cart'

function Items(props) {

  const [closeCart, setCloseCart] = useState(true);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState();

  useEffect(() => {
    setQuantity(0);
  }, [item])

  const addToCart = (e, item) => setCart(cart.concat(item)) 

  const updateQuantity = () => {
    const increaseQuantity = (e, item, num) => {
      if(item.quantity !== 0) setQuantity(item.quantity);
      setQuantity(num+1);
      updateObj(e, item);
    };
    
    const decreaseQuantity = (e, item, num) => {
      if(item.quantity === 0) return;
      setQuantity(item.quantity);
      setQuantity(num-1);
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
      setItem(item);
      console.log(item)
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
            {!closeCart && <Cart items={cart} setCloseCart={setCloseCart} updateQuantity={updateQuantity} quantity={quantity} updateObj={updateObj} />}
    </div>
  );
}

export default Items;
