import React, { useState, useEffect } from 'react';
import '../styles/Shop.css';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import Header from './Header';

function Shop() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const addToCart = (item) => {
    let isDouble = false;
    cart.forEach((thisItem) => {
      if(thisItem.id === item.id) {
        isDouble = true;
        item.quantity = item.quantity + 1;
        return;
      }
    })
    if(isDouble === false) {
      setCart(cart.concat(item))
      setTotal(((total + parseFloat(item.price))* 100)/100);
    }}; 
  
  useEffect(() => {
    if(searchItem === '') loadShop();
    loadNewShop();
  }, [searchItem])

  useEffect(() => {
    loadShop();
  }, []);

  const loadShop = async () => setItems(filterProducts(await shopItems()));
  const loadNewShop = async () => setItems(filterProductBySearch(items));

  const shopItems = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    data.map((item) =>  item.quantity = 1);
    return data;
  }

  const filterProducts = (products) => {
    return products.filter(product => 
      product.category === `women's clothing` || 
      product.category === `men's clothing`);
  }

  const filterProductBySearch = (items) => {
    return items.filter(item => {
      const Item = item.title.toLowerCase();
      return Item.includes(searchItem);
    });
  }

  const newTotal = (price, isAdd) => {
    if(total === undefined) return setTotal(parseInt(0));
    if(isAdd === true) {
      return setTotal(((total + price)* 100)/100);
    };
    return setTotal(parseFloat((total - price).toFixed(2)));
  };

  const nav = useNavigate();

  const navHome = () => nav('/');

  const onChangeHandler = (e) => {
    setSearchItem(e.target.value);
  }

  return (
    <div id="shop">
      <Header navHome={navHome} cart={cart} newTotal={newTotal} total={total} onChangeHandler={onChangeHandler}/>
      <Items items={items} addToCart={addToCart} /> 
    </div>
  );
}

export default Shop;
