import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, expect, it, jest} from '@jest/globals';
import {
    DistanceBackToStart,
    sumAllDistances,
    TotalDistance, updateUnitSuffix
} from "../../../src/components/Trip/Itinerary/DistanceColumn";

describe('Distance Column', () => {
    const distances = [1,2,3];
    const units = 'miles';

    it('renders a cell with given place expected', () => {
        render( <DistanceBackToStart distances={distances} units={units} /> );
        expect(screen.findByText('Distance Back to Start:'));
    });

    it('renders a cell with given place expected', () => {
        render( <TotalDistance distances={distances} units={units} /> );
        expect(screen.findByText('Total Distance:'));
    });

    it('renders a cell with given place expected', () => {
        const sum = sumAllDistances(distances)
        expect(sum).toBe(6);
    });

    it('renders a cell with given place expected', () => {
        const distance = 4;
        const suffix = updateUnitSuffix(distance)
        expect(suffix).toBe('s');
    });
});
