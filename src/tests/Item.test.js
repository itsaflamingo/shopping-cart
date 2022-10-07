import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Item from '../components/Item'

describe('Item component', () => {
    const addToCart = jest.fn()
    const item = {
        title: 'name1',
        price: '10',
        image: 'image1'
    }
    it('Item info displays correctly', () => {
        render(
            <Router>
                <Item item={item} addToCart={addToCart} />
            </Router>) 
        
        const name = screen.queryByText('name1');
        const price = screen.queryByText('$10');

        expect(name.innerHTML).not.toBeNull();
        expect(price.innerHTML).not.toBeNull();
    })
})