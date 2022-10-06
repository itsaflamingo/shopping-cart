import React, {useState, useEffect} from 'react';

export default function Counter(props) {

    const [quantity, setQuantity] = useState(1);
    const {newTotal, item} = props;

    useEffect(() => {
        newTotal(item.price);
    }, [quantity])

    const increaseQuantity = (num) => setQuantity(num + 1);
        
    const decreaseQuantity = (num) => {
      if(num === 0) return;
      setQuantity(num - 1);
    };
        
    const updateObj = (item) => item.quantity = quantity;
    
    return(
        <div className='counter'>
            <input className='item-counter' type='input'
                onChange={() => updateObj(item)} 
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