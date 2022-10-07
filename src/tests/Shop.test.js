import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import Shop from '../components/Shop'
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// shop renders
describe('Shop component', () => {

    it('Renders correctly', () => {
        const {container} = render(
            <BrowserRouter>
                <Shop />
            </BrowserRouter>
        )
    expect(container).toMatchSnapshot()
    })
})
// button leads to home

// Items renders
// Items are displayed   