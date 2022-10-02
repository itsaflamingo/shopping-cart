import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Items from '../components/Items'

describe('Shop items', () => {

    const items = [{
        title:'name1',
        id:'1'
    },
    {
        title: 'name2',
        id: '2'}]

    it('Renders items on page', () => {
        const {container} = render(
            <Router>
                <Items items={items} />
            </Router>) 
            
            expect(container).toMatchSnapshot();
    })
    it('Opens cart when "add to cart" button is clicked', () => {
        const {asFragment} = render(
            <Router>
                <Items items={items} />
            </Router>) 
        const firstRender = asFragment();
        const button = screen.getAllByRole('button', {name: 'Add to Cart'});
        act(() => {
            userEvent.click(button[0]);
        })
        expect(firstRender).toMatchSnapshot();
    })
    it('when item added to cart, cart info is updated', () => {
        const {container} = render(
            <Router>
                <Items items={items} />
            </Router>) 

        const button = screen.getAllByRole('button', {name: 'Add to Cart'});
        act(() => {
            userEvent.click(button[0]);
        })
        const name = screen.getAllByText('name1');
        expect(name[1].innerHTML).toBe('name1');
    })
    test.todo('when item quantity is changed, quantity displayed changes to correct amount')

})