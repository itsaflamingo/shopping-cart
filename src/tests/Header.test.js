import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Header from '../components/Header'
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe('Header component', () => {
    const navHome = jest.fn();
    const newTotal = jest.fn();
    const cart = [{id: '1'}];
    const total = 0;
    it('renders correct heading', () => {
        render(
            <Router>
                <Header navHome={navHome} cart={cart} newTotal={newTotal} total={total} />
            </Router>)
        expect(screen.getByRole('heading').textContent).toMatch(/Shop/i)
    })
    it('Goes to home page when home icon clicked', () => {
        const {asFragment} = render(
            <Router>
                <Header navHome={navHome} cart={cart} newTotal={newTotal} total={total}/>
            </Router>)
        const firstRender = asFragment();
        const button = screen.getByTestId('home-icon');
        act(() => {
            userEvent.click(button);
        })
        expect(firstRender).toMatchSnapshot();
    })
    it('Opens to cart when cart icon clicked', () => {
        const {asFragment} = render(
            <Router>
                <Header navHome={navHome} cart={cart} newTotal={newTotal} total={total}/>
            </Router>)
        const firstRender = asFragment();
        const button = screen.getByTestId('cart-icon');
        act(() => {
            userEvent.click(button);
        })
        expect(firstRender).toMatchSnapshot();
    })
    it('Cart number is 0 without items.', () => {
        const thisCart = [];
        render(
            <Router>
                <Header navHome={navHome} cart={thisCart} newTotal={newTotal} total={total}/>
            </Router>)
        
        const quantity = screen.queryByText('0');
        expect(quantity.innerHTML).toMatch(/0/i)
    })
    it('Cart display reflects number of items in cart array', () => {
        const thisCart = [{
                id: '1',
            }, {
                id: '2',
            }, {
                id: '3',
            }, {
                id: '4',
            }, {
                id: '5',
            }];
        render(
            <Router>
                <Header navHome={navHome} cart={thisCart} newTotal={newTotal} total={total}/>
            </Router>)
        
        const quantity = screen.queryByText('5');
        expect(quantity.innerHTML).toMatch(/5/i);
    })
} )
