import React, {useState} from 'react';
import '../styles/Shop.css';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import itemsArray from './shop-items'


function Shop() {
  const [items] = useState(itemsArray);

  const nav = useNavigate();

  const navHome = () => {
    nav('/')
  }

  return (
    <div className="shop">
      <h2>Shop</h2>
      <button onClick={navHome}>Home</button>
      <Items items={items} /> 
    </div>
  );
}

export default Shop;
