import React, {useState, useEffect} from 'react';

export default function Counter(props) {

    const {newTotal, item} = props;
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
      setQuantity(item.quantity)
    }, [])

    useEffect(() => {
      updateItem(item)
    }, [quantity])

    const increaseQuantity = (num) => {
      setQuantity(num + 1)
      newTotal(parseFloat(item.price), true);
    };
        
    const decreaseQuantity = (num) => {
      if(num <= 0) return;
      setQuantity(num - 1);
      newTotal(parseFloat(item.price), false);
    };
        
    const updateQuantity = (e) => setQuantity(e.target.value);
    const updateItem = (item) => item.quantity = quantity;
    
    return(
        <div className='counter'>
            <input className='item-counter' type='input'
                onChange={(e) => updateQuantity(e)} 
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