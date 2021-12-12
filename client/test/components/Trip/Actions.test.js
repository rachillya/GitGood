import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, expect, it, jest } from '@jest/globals';
import { MOCK_PLACES } from "../../sharedMocks";
import Itinerary from '../../../src/components/Trip/Itinerary/Itinerary.js';
import { ItineraryActionsDropdown, PlaceActionsDropdown } from '../../../src/components/Trip/Itinerary/actions.js';

describe('Actions', () => {
    URL.createObjectURL = jest.fn();
    const index = 0;
    const placeActions = {
        append: jest.fn(),
        removeAll: jest.fn(),
        removeAtIndex: jest.fn(),
        sendTourRequest: jest.fn(),
        removeAlertToggle: jest.fn(),
        selectIndex: jest.fn()
    };

    it('home button calls placeActions when clicked', async () => {
        render(<ItineraryActionsDropdown places={MOCK_PLACES} placeActions={placeActions} />);
        user.click(screen.getByTestId('home-button'));
        expect(placeActions.append).toHaveBeenCalled();
    });

    it('delete all button calls removeAll when clicked', async () => {
        render(<ItineraryActionsDropdown places={MOCK_PLACES} placeActions={placeActions} />);
        user.click(screen.getByTestId('delete-all-modal-button'));
        user.click(screen.getByTestId('delete-all-button'));
        expect(placeActions.removeAll).toHaveBeenCalled();
    });

    it('delete button on 1st row calls removeAtIndex when clicked', async () => {
        render(<Itinerary places={MOCK_PLACES} placeActions={placeActions} />);
        render(<PlaceActionsDropdown placeActions={placeActions} />);

        user.click(screen.getByTestId('delete-button-'+index));

        expect(placeActions.removeAtIndex).toHaveBeenCalled();
    });

    // it('opens modal when floppy disk button is pressed and closes on done button', async () => {
    //     render(<ItineraryActionsDropdown placeActions={placeActions} />);
    //     user.click(screen.getByTestId('floppyDisk'));
    //     user.click(screen.getByRole('button', {name: /Done/i}));

    //     await waitFor(() => {
    //         expect(screen.queryByDisplayValue('Save a Trip')).toBe(null);
    //     });
    // });

    it('when tour button is pressed sendTourRequest is called', async () => {
        render(<ItineraryActionsDropdown places={MOCK_PLACES} placeActions={placeActions} />);
        user.click(screen.getByTestId('tour-button'));

        await waitFor(() => {
            expect(placeActions.sendTourRequest).toHaveBeenCalled();
        });
    });
});
