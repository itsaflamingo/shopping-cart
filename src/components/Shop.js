import React, {useState, useEffect} from 'react';
import '../styles/Shop.css';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import Header from './Header';

function Shop() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart(cart.concat(item)); 

  useEffect(() => {
    shopItems()
  }, [])

  const newTotal = (price) => {
    if(total === undefined) return;
    setTotal(((total + price)* 100)/100);
  };

  const shopItems = () => {
    fetch('https://fakestoreapi.com/products?limit=8')
            .then(res=>res.json())
            .then(json=>setItems(json))
  }

  const nav = useNavigate();

  const navHome = () => {
    nav('/')
  }

  return (
    <div id="shop">
      <Header navHome={navHome} cart={cart} newTotal={newTotal} total={total} />
      <Items items={items} addToCart={addToCart} /> 
    </div>
  );
}

export default Shop;
