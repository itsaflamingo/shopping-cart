import React from 'react'
import search from '../images/search.png'
import SearchInput from './SearchInput'

export default function Search(props) {

    const {setOpenSearch, openSearch} = props;

    return(
        <div id='search-container'>
            <div id='search' style={{
                backgroundImage: `url(${search})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => setOpenSearch(!openSearch)}></div>
            {!openSearch && <SearchInput />}
        </div>
    )
}
