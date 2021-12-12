import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, it } from '@jest/globals';
import { MOCK_PLACES_NOTES } from "../../sharedMocks";
import {addNamesAndNotesToRequest} from "../../../src/components/Trip/Tour/sendTourRequest";

describe('sendTourRequest', () => {

    it('Add names and notes to tour request', () => {
       const jsonRequest = addNamesAndNotesToRequest(MOCK_PLACES_NOTES)
        expect(JSON.stringify(jsonRequest[0])).toContain( "The big city");
    });
});
