import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Cart from '../components/Cart'
import CartItems from '../components/CartItems'
import Header from '../components/Header'
import Counter from '../components/Counter'

// renders html correctly - snapshot
describe('Cart component', () => {
    const setCloseCart = jest.fn()
    const navHome = jest.fn()
    const items = [
        {
            image: 'url1',
            title: 'name1',
            price: '10',
            id: 1,
            quantity: 1   },
        {
            image: 'url2',
            title: 'name2',
            price: '10',
            id: 2,
            quantity: 1   },
        {
            image: 'url3',
            title: 'name3',
            price: '10',
            id: 3,
            quantity: 1   }
    ]
    const item = {
        image: 'url1',
        title: 'name1',
        price: '10',
        id: 1,
        quantity: 1   }
    const newTotal = jest.fn();
    const total = 0;
    it('Renders cart on page', () => {
        const {container} = render(
            <Router>
                <Cart items={items} setCloseCart={setCloseCart} newTotal={newTotal} total={total} />
            </Router>) 
            
            expect(container).toMatchSnapshot();
    })
    it('Cart total starts at 0', () => {
        render(
            <Router>
                <Cart items={items} setCloseCart={setCloseCart} newTotal={newTotal} total={total} />
                <CartItems item={item} newTotal={newTotal} />
            </Router>) 
        
        const input = screen.getByLabelText('total');
        expect(input.innerHTML).toBe('Total: $0');
    })
    it('Cart total increases by correct amount when number of cart items increases', () => {
        let thisTotal = 0;
        items.forEach(item => {
            thisTotal = thisTotal + parseInt(item.price);
        })
        render(
            <Router>
                <Header navHome={navHome} cart={items} newTotal={newTotal} total={thisTotal} />
                <CartItems item={item} newTotal={newTotal} />
            </Router>) 

        const button = screen.getByTestId('cart-icon');
        
        userEvent.click(button);
        
        const input = screen.getByLabelText('total');
        expect(input.innerHTML).toBe(`Total: $30`);
    })
    it('Cart total decreases by correct amount when - is clicked', () => {
        let thisTotal = 0;
        thisTotal = thisTotal + parseInt(item.price * item.quantity);

        render(
            <Router>
                <Header navHome={navHome} cart={items} newTotal={newTotal} total={thisTotal} />
                <CartItems item={item} newTotal={newTotal} />
                <Counter item={item} newTotal={newTotal} />
            </Router>) 

        const cartBtn = screen.getByTestId('cart-icon');
        userEvent.click(cartBtn);

        const btn = screen.getAllByRole('button', {  name: /\-/i })
        userEvent.click(btn[0]);

        const input = screen.getByLabelText('total');
        expect(input.innerHTML).toBe(`Total: $0`);
    })
    it('Cart total increases by correct amount when + is clicked', () => {
        let thisTotal = 0;
        thisTotal = thisTotal + parseInt(item.price * item.quantity);
        
        render(
            <Router>
                <Header navHome={navHome} cart={items} newTotal={newTotal} total={thisTotal} />
                <CartItems item={item} newTotal={newTotal} />
                <Counter item={item} newTotal={newTotal} />
            </Router>) 

        const cartBtn = screen.getByTestId('cart-icon');
        userEvent.click(cartBtn);

        const btn = screen.getAllByRole('button', {  name: /\+/i })
        userEvent.click(btn[0]);

        const input = screen.getByLabelText('total');
        expect(input.innerHTML).toBe(`Total: $20`);
    })
    test.todo('Cart total increases by correct amount when item is added to cart')
    test.todo('when item quantity is changed, total price is changed')
    test.todo('when new item is added, total price is changed')
    test.todo('total price calculation is correct')
})
