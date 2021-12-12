import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import { MOCK_PLACES, VALID_DISTANCE_RESPONSE_THREE } from "../../sharedMocks";
import Itinerary from '../../../src/components/Trip/Itinerary/Itinerary.js';
import {LOG} from "../../../src/utils/constants";

describe('Itinerary', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        fetch.resetMocks();

        jest.spyOn(LOG, 'error').mockImplementation(() => {});
        fetch.mockResponse(VALID_DISTANCE_RESPONSE_THREE);

        render(<Itinerary places={MOCK_PLACES}
        selectedIndex={jest.fn}
        placeActions={{
            append: jest.fn(),
        selectIndex: jest.fn()} }
        serverSettings={jest.fn}
        serverUrl={jest.fn}/>);
    });

    it('renders a cell with given place expected', () => {
        expect(screen.getByRole('cell', { name: /40.0/i }).textContent)
            .toContain('40.00, 50.00');
    });

    it('renders the name attribute', () => {
        screen.getByRole('cell', { name: /Place A/i });
    });

    it('renders a place with no name ', () => {
        screen.getByRole('cell', { name: /65.0/i });
    });

    it('toggles row dropdown when clicked', () => {
        const dropdown = screen.getByTestId('row-toggle-0');
        expect(dropdown.getAttribute('aria-expanded')).toEqual('false');

        user.click(dropdown);
        expect(dropdown.getAttribute('aria-expanded')).toEqual('true');
    });

    it('renders the distance attribute', () => {
        expect(screen.getByRole('cell', { name: /45.0/i }).textContent)
            .toContain('Distance: ');
    });

});