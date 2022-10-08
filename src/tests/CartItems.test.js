import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import CartItems from '../components/CartItems'
import Counter from '../components/Counter'
import Header from '../components/Header'

describe('CartItems component', () => {
    const item = [{
            image: 'url1',
            title: 'name1',
            price: 'price1',
            id: 1,
            quantity: 1   
        }, {
            image: 'url2',
            title: 'name2',
            price: 'price2',
            id: 2,
            quantity: 1      
        }]
    const counterItem = [{
        image: 'url1',
        title: 'name1',
        price: 'price1',
        id: 1   
    }];
    const setCloseCart = jest.fn()
    const newTotal = jest.fn();
    const navHome = jest.fn();
    const total = 0;
    it('Item name and price render correctly', () => {
        render(
            <Router>
                <Header navHome={navHome} cart={item} newTotal={newTotal} total={total} />
            </Router>)

        const button = screen.getByTestId('cart-icon');

        userEvent.click(button);

        const name = screen.getByText('name1')
        const name2 = screen.getByText('name2')
        const price1 = screen.getByText('$price1')
        const price2 = screen.getByText('$price2')

        expect(name).toBeInTheDocument()
        expect(name2).toBeInTheDocument()
        expect(price1).toBeInTheDocument()
        expect(price2).toBeInTheDocument()
    })
    it('Cart item quantity input starts at 1', () => {
        render(
            <Router>
                <Header navHome={navHome} cart={item} newTotal={newTotal} total={total} />
                <Counter item={counterItem} newTotal={newTotal} />
            </Router>)
        const button = screen.getByTestId('cart-icon');
        
        userEvent.click(button);
        
        const input = screen.getAllByDisplayValue('1');
        expect(input[0]).toBeInTheDocument();
    })
    it('Cart item quantity increases by right amount when + button clicked', () => {
        render(
            <Router>
                <Header navHome={navHome} cart={item} newTotal={newTotal} total={total} />
                <CartItems item={item} newTotal={newTotal} />
            </Router>)

        const button = screen.getByTestId('cart-icon');
            
        userEvent.click(button);
        
        const add = screen.getAllByRole('button', {name: '+'})

        userEvent.click(add[0]);
        userEvent.click(add[0]);

        const input = screen.getAllByDisplayValue('3');
        expect(input[0]).toBeInTheDocument();
    })
    it('Cart item quantity decreases by right amount when - button clicked', () => {
        render(
            <Router>
                <Header navHome={navHome} cart={item} newTotal={newTotal} total={total} />
                <CartItems item={item} newTotal={newTotal} />
            </Router>)

        const button = screen.getByTestId('cart-icon');
        
        userEvent.click(button);
        
        const sub = screen.getAllByRole('button', {name: '-'})

        userEvent.click(sub[0]);
        userEvent.click(sub[0]);
        userEvent.click(sub[0]);

        const input = screen.getAllByDisplayValue('0');
        expect(input[0]).toBeInTheDocument();
    })
    it('Cart item quantity does not reduce below 0 when - button clicked', () => {
        render(
            <Router>
                <Header navHome={navHome} cart={item} newTotal={newTotal} total={total} />
                <CartItems item={item} newTotal={newTotal} />
            </Router>)

        const button = screen.getByTestId('cart-icon');
    
        userEvent.click(button);
        
        const sub = screen.getAllByRole('button', {name: '-'})

        userEvent.click(sub[0]);
        userEvent.click(sub[0]);

        const notInput = screen.queryByDisplayValue('-1');
        const input = screen.getAllByDisplayValue('0');
        expect(notInput).toBeNull();
        expect(input[0]).toBeInTheDocument();
    })
})