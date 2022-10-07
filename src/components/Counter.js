import React, {useState, useEffect} from 'react';

export default function Counter(props) {

    const [quantity, setQuantity] = useState(1);
    const {newTotal, item} = props;

    const increaseQuantity = (num) => {
      setQuantity(num + 1)
      newTotal(item.price, true);
    };
        
    const decreaseQuantity = (num) => {
      if(num <= 0) return;
      setQuantity(num - 1);
      newTotal(item.price, false);
    };
        
    const updateQuantity = (item) => setQuantity(item);
    
    return(
        <div className='counter'>
            <input className='item-counter' type='input'
                onChange={() => updateQuantity(item)} 
                value={quantity} />
            <div className='item-quantity'>
              <button className='add' 
                onClick={() => increaseQuantity(quantity)}>+</button>
              <button className='remove' 
                onClick={() => decreaseQuantity(quantity)}>-</button>
            </div>
        </div>
    ) 
}