import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { beforeEach, describe, it, jest } from '@jest/globals';
import { ItineraryActionsDropdown } from '../../../src/components/Trip/Itinerary/actions.js';
import { FileLoaderApp } from "../../../src/components/Trip/TripManager/Load.js";
import {MOCK_PLACES} from "../../sharedMocks";

describe('Load Tab', () => {
    const placeActions = {
        append: jest.fn()
    };
    let fileButton;

    beforeEach(() => {
        render( <ItineraryActionsDropdown places={MOCK_PLACES} placeActions={placeActions} /> );
        fileButton = screen.getByTestId("fileIcon");
    });

    it('testing FileLoaderApp if it renders ', async () => {
        render(<FileLoaderApp placeActions={placeActions} />);
        await waitFor(() => {
            expect(screen.findByText('Select a JSON or CSV file.'));
        });
    });
});
