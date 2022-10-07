import React from 'react'

export default function Item(props) {

    const {item, addToCart} = props;

    return(
        <div className='item' aria-label='item'>
            <div className='image' style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}>
                <button id='add-to-cart'
                        onClick={() => addToCart(item)}>
                        Add to Cart</button>
              </div>
            <div className='item-info'>
              <p className='title'>{item.title}</p>
              <p>${item.price}</p>
            </div>
        </div>
    )
}
