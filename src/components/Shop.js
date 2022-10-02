import React, {useState, useEffect} from 'react';
import '../styles/Shop.css';
import { useNavigate } from 'react-router-dom';
import Items from './Items';

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    shopItems()
  }, [])

  const shopItems = () => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setItems(json))
  }

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
