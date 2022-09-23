import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import Shop from '../components/Shop'
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// shop renders
describe('Shop component', () => {
    it('renders correct heading', () => {
        render(
            <Router>
                <Shop />
            </Router>)
        expect(screen.getByRole('heading').textContent).toMatch(/Shop/i)
    })
    it('page switches to home on button click', () => {
        render(
            <Router>
                <Shop />
            </Router>)

        const button = screen.getByRole('button', {name: 'Home'});
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
        });
        expect(window.location.pathname).toEqual('/');
    })

})
// button leads to home

// Items renders
// Items are displayed   