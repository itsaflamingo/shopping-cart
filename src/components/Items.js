import React from 'react';

function Items(props) {

    console.log(props)

  return (
    <div className="Items">
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
