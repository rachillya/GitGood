import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { describe, it, jest } from '@jest/globals';
import Save from "../../../src/components/Trip/TripManager/Save.js";
import { MOCK_PLACES_THREE } from '../../sharedMocks'
import { ItineraryActionsDropdown } from '../../../src/components/Trip/Itinerary/actions.js';

describe('Save Tab', () => {
    const props = {
        serverUrl: 'http://localhost:8000',
        places: MOCK_PLACES_THREE,
        distances: [10974, 9900, 9532],
        earthRadius: 6371,
        tripName: 'My Trip'};
    const placeActions = {
        append: jest.fn()
    };
    let saveButton;
    let fileButton;
    URL.createObjectURL = jest.fn();
    props.tripName = "My Trip";

    it('opens modal when save open button is pressed and closes on done button', async () => {
        render(<ItineraryActionsDropdown placeActions={placeActions} places={props.places} tripName={props.tripName} distances={props.distances} units={props.units} earthRadius={props.earthRadius} />);
        fileButton = screen.getByTestId("fileIcon");
        user.click(fileButton);
        
        const doneButton = screen.getByText('Done');
        user.click(doneButton);
    });

    it('testing if FileSavingApp renders ', async () => {
        render(<Save places={props.places} tripName={props.tripName} distances={props.distances} units={props.units} earthRadius={props.earthRadius} />);
        saveButton = screen.getByTestId("saveIcon");
        user.click(saveButton);
        await waitFor(() => {
            expect(screen.findAllByText('Save your trip to the file system.'));
        });
    });
});
