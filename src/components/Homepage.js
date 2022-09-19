import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

function Homepage() {
  const nav = useNavigate();

  const navToShop = () => {
    nav('/shop')
  }

  return (
    <div className="App">
          <h2>Homepage</h2>
          <button onClick={navToShop}>Shop</button>
    </div>
  );
}

export default Homepage;
