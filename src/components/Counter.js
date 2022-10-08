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

    const increaseQuantity = () => {
      setQuantity(quantity + 1)
      newTotal(parseFloat(item.price), true);
    };
        
    const decreaseQuantity = () => {
      if(quantity <= 0) return;
      setQuantity(quantity - 1);
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
                onClick={() => increaseQuantity()}>+</button>
              <button className='remove' 
                onClick={() => decreaseQuantity()}>-</button>
            </div>
        </div>
    ) 
}