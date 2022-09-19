import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Items from '../components/Items'

describe('Shop items', () => {
    it('Renders items on page', () => {
        const {container} = render(
            <Router>
                <Items items={[{
                    name:'name1',
                    id:'1'
                },
                {
                    name: 'name2',
                    id: '2'}]}/>
            </Router>)  
    })

    container.querySelector('.item');

    expect(container.firstChild).toBe(/name1/i);
})