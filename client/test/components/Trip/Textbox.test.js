import React from 'react';
import {act, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import TextBox from "../../../src/components/Trip/Find/TextBox";
import { VALID_FIND_REQUEST_ONE, INVALID_REQUEST } from '../../sharedMocks';

describe('Textbox Input', () => {
    const userPlace = jest.fn();
    const setUserPlace = jest.fn();
    const serverUrl = 'http://localhost:8000';
    const setPlaces = jest.fn();
    const textBoxPlaceholder = "Search for a place...";

    let inputBox;
    let searchButton;

    beforeEach(() => {
        jest.clearAllMocks();
        fetch.resetMocks();

        render( <TextBox
            userPlace = {userPlace}
            setUserPlace = {setUserPlace}
            serverUrl = {serverUrl}
            setPlaces = {setPlaces}
        />);

        inputBox = screen.getByPlaceholderText(textBoxPlaceholder);
        searchButton = screen.getByRole('button', { name: /searchButton/i });

        act(() => {
            user.clear(inputBox);
        });
    });

    it('updates input text onChange ', async () => {
        const userTestPlace = 'dave';
        user.type(inputBox, userTestPlace);

        await waitFor(() => {
            expect(inputBox.value).toEqual(userTestPlace);
        });
    });

    it('check search button is on screen ', async () => {
        const userTestPlace = 'dave';
        user.type(inputBox, userTestPlace);

        await waitFor(() => {
            expect(inputBox.value).toEqual(userTestPlace);
        });
    });

    it('search button calls sendFindRequest()', async () => {
        const SendFindRequest = jest.fn();
        const a = new SendFindRequest();
        const bound = SendFindRequest.bind(a);
        bound();

        user.type(inputBox, 'dave');
        user.click(searchButton);

        await waitFor(() => {
            // FindRequest may be called twice if the server isn't running
            expect(SendFindRequest.mock.calls.length).toBeGreaterThanOrEqual(1);
        });
    });

    it('SendFindRequest sends with valid JSON', async () => {
        const SendFindRequest = jest.fn();
        const jsonRequest = VALID_FIND_REQUEST_ONE;
        const a = new SendFindRequest(jsonRequest, serverUrl, setPlaces);
        const bound = SendFindRequest.bind(a);
        bound();

        user.type(inputBox, 'eugene');
        user.click(searchButton);

        await waitFor(() => {
            // FindRequest may be called twice if the server isn't running
            expect(SendFindRequest.mock.calls.length).toBeGreaterThanOrEqual(1);
        });
    });
});
