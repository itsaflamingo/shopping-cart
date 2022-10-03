import React, {useState} from 'react';
import Cart from './Cart'
import Item from './Item';

function Items(props) {

  const {addToCart} = props;

  return (
    <div className="items">
            {props.items.map((item) => {
                return (
                  <div key={item.id}>
                    <Item item={item} addToCart={addToCart} />
                  </div>
                )
            })}
    </div>
  );
}

export default Items;
