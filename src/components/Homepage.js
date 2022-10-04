import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Carousel from './Carousel'

function Homepage() {
  const nav = useNavigate();

  const navToShop = () => {
    nav('/shop')
  }

  return (
    <div className="App">
          <Carousel navToShop={navToShop} />
    </div>
  );
}

export default Homepage;
