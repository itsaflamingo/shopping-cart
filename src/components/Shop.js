import React, {useState, useEffect} from 'react';
import '../styles/Shop.css';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import Header from './Header';

function Shop() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat(item))
    setTotal(((total + item.price)* 100)/100);
  }; 

  useEffect(() => {
    loadShop();
  }, [])

  const loadShop = async () => {
    setItems(filterProducts(await shopItems()));
  } 

  const shopItems = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data;
  }

  const filterProducts = (products) => {
    return products.filter(product => 
      product.category === `women's clothing` || 
      product.category === `men's clothing`);
  }

  const newTotal = (price, isAdd) => {
    if(total === undefined) return;
    if(isAdd === true) {
      return setTotal(((total + price)* 100)/100)
    };

    return setTotal((total - price).toFixed(2));
  };

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
