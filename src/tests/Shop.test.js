import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import Shop from '../components/Shop'
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// shop renders
describe('Shop component', () => {
    it('when item added to cart, cart info is updated', () => {
        const {container} = render(
            <Router>
                <Shop />
            </Router>) 

        const button = screen.getAllByRole('button', {name: 'Add to Cart'});
        act(() => {
            userEvent.click(button[0]);
        })
        const name = screen.getAllByText('name1');
        expect(name[1].innerHTML).toBe('name1');
    })

})
// button leads to home

// Items renders
// Items are displayed   