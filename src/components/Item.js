import React from 'react'

export default function Item(props) {

    const {item, addToCart} = props;

    return(
        <div className='item'>
            <div className='image' style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            <div className='item-info'>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
        </div>
    )
}
