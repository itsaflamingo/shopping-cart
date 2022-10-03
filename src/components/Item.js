import React from 'react'

export default function Item(props) {
    const item = props.item;
    const addToCart = props.addToCart;
    const setCloseCart = props.setCloseCart;

    return(
        <div className='item'
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
}
