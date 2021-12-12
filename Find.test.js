import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, it, jest } from '@jest/globals';
import Find from "../../../src/components/Trip/Find/Find";

describe('Find Modal', () => {
    const props = {serverUrl: 'http://localhost:8000'};
    const placeActions = {
        append: jest.fn()
    };
    let magnifyingGlass;

    beforeEach(() => {

        render(<Find
            placeActions={placeActions}
            serverUrl={props.serverUrl}
        />);

        magnifyingGlass = screen.getByRole('button', {name: /magnifyingGlass/i});
    });

    it('opens modal when magnifying glass button is pressed and closes on done button', async () => {
        user.click(magnifyingGlass);

        const doneButton = screen.getByRole('button', { name: /Done/i });
        user.click(doneButton);

        await waitFor(() => {
            expect(screen.queryByDisplayValue('Search')).toBe(null);
        });
    });

    it('opens TextBox when magnifying glass button is pressed', async () => {
        user.click(magnifyingGlass);

        await waitFor(() => {
            const modalInput = screen.getByRole('button', {name: /searchButton/i });
            expect(modalInput).toBeInTheDocument();
        });
    });
});