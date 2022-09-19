import React from 'react';

function Items(props) {

  return (
    <div className="items">
            {props.items.map((item) => {
                return (
                    <div className='item' key={item.id}>
                        <p>{item.name}</p>
                    </div>
                )
            })}
    </div>
  );
}

export default Items;
