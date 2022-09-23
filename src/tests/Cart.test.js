import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Cart from '../components/Cart'

// renders html correctly - snapshot
describe('Cart component', () => {
    const setCloseCart = jest.fn()
    const items = [
        {
            image: 'url1',
            name: 'name1',
            price: 'price1',
            quantity: 0,
            id: 1   },
        {
            image: 'url2',
            name: 'name2',
            price: 'price2',
            quantity: 0,
            id: 2   },
        {
            image: 'url3',
            name: 'name3',
            price: 'price3',
            quantity: 0,
            id: 3   }
    ]
    it('Renders items on page', () => {
        const {container} = render(
            <Router>
                <Cart items={items} setCloseCart={setCloseCart} />
            </Router>) 
            
            expect(container).toMatchSnapshot();
    })
    test.todo('when item quantity is changed, quantity displayed changes')
    test.todo('when item quantity is changed, total price is changed')
    test.todo('when new item is added, total price is changed')
    test.todo('total price calculation is correct')
})
// add one button works
// checkout button works 
