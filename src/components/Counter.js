import React, {useState, useEffect} from 'react';

export default function Counter(props) {

    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        props.newTotal(props.item.price);
    }, [quantity])

        const increaseQuantity = (num) => setQuantity(num + 1);
        
        const decreaseQuantity = (num) => {
          if(num === 0) return;
          setQuantity(num - 1);
        };
        
        const updateObj = (item) => item.quantity = quantity;
        
    
    return(
        <div className='counter'>
            <input className='item-counter' 
                  onChange={() => updateObj(props.item)} 
                  value={quantity} />
            <div className='item-quantity'>
              <button id='add' 
                      onClick={() => increaseQuantity(quantity)}>+</button>
              <button id='remove' 
                      onClick={() => decreaseQuantity(quantity)}>-</button>
            </div>
        </div>
    ) 
}