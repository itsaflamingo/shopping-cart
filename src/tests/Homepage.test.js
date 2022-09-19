import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import Homepage from '../components/Homepage'
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from "react-dom/test-utils";

describe('Homepage component', () => {
    it('renders correct heading', () => {
        const {getByRole} = render(
        <Router>
            <Homepage />
        </Router>)
        expect(screen.getByRole('heading').textContent).toMatch(/Homepage/i)
    })

    it('page switches to shop on button click', () => {
        render(
            <Router>
                <Homepage />
            </Router>)

        const button = screen.getByRole('button', {name: 'Shop'});
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
        });
        expect(window.location.pathname).toEqual('/shop');
    })
})