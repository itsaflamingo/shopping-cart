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

})