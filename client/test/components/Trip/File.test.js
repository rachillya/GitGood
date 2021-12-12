import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import File from "../../../src/components/Trip/TripManager/File.js";
import { MOCK_PLACES_THREE } from '../../sharedMocks'
import { ItineraryActionsDropdown } from '../../../src/components/Trip/Itinerary/actions.js';

describe('File Modal', () => {
    const props = {
        serverUrl: 'http://localhost:8000',
        places: MOCK_PLACES_THREE,
        distances: [10974, 9900, 9532],
        earthRadius: 6371,
        tripName: 'My Trip'};
    const placeActions = {
        append: jest.fn()
    };
    let fileButton;
    URL.createObjectURL = jest.fn();
    props.tripName = "My Trip";

    it('opens modal and closes on done button', async () => {
        render(<ItineraryActionsDropdown placeActions={placeActions} places={props.places} tripName={props.tripName} distances={props.distances} 
            units={props.units} earthRadius={props.earthRadius} serverURL={props.serverUrl} />);
        fileButton = screen.getByTestId("fileIcon");
        user.click(fileButton);

        await waitFor(() => {
            expect(screen.findAllByText('File'));
        });
        
        const doneButton = screen.getByText('Done');
        user.click(doneButton);
    });
});
