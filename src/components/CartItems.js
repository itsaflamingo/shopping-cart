import React from 'react';
import Counter from './Counter'


export default function CartItems(props) {

    const {item, newTotal} = props;

  return (
          <div className='cart-item'>
            <div className='cart-picture'
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className='cart-item-info'>
                <h4 className='item-name'>{item.title}</h4>
                <h4 className='price'>${item.price}</h4>
                <Counter item={item} newTotal={newTotal} />
            </div>
          </div>
  );
}
