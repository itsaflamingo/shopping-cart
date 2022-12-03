import React from 'react'

export default function Search(props) {
    const { onChangeHandler } = props;
    return(
        <div id='search-input'>
            <input type='text' 
            onChange={(e) => onChangeHandler(e)}></input>
        </div>
    )
}
