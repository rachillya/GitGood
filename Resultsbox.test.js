import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import ResultsBox, {showMorePlaces} from "../../../src/components/Trip/Find/ResultsBox";
import {MOCK_PLACES} from "../../sharedMocks";

describe('ResultsBox output', () => {
    const append = jest.fn();
    let addButton;

    const context = {
        expanded: false,
        setExpanded: (condition)=>(context.expanded = condition),
        lastPlace: 3,
        setLastPlace: (index)=>(context.lastPlace = index),
        places: MOCK_PLACES,
        placesToShow: 3
    };

    beforeEach(() => {
        render( <ResultsBox places={MOCK_PLACES} placeActions={{append}} />);
    });

    it('renders a listgroup of places', () => {
        expect(screen.getByRole('list').textContent).toContain('Place A');
    });


    it('add button calls appends place', async () => {
        addButton = screen.queryAllByRole('button');
        user.click(addButton[0]);

        await waitFor(() => {
            expect(append).toHaveBeenCalledTimes(1);
        });
    });

    it('Show More button to appear at bottom of search results', async () => {
                expect(screen.getByTestId('show-more').textContent)
                    .toContain('Show more');
    });

    it('Show More button text turns to Show Less', async () => {
        user.click(screen.getByTestId('show-more'));

        await waitFor(() => {
        expect(screen.getByTestId('show-more').textContent)
            .toContain('Show less');
        });
    });


    it('Show more collapses results', async () => {
        context.placesToShow = 1;
        context.lastPlace= 0;
        showMorePlaces(context);
        expect(context.expanded === false);
    });

    it('Show more places expands results', async () => {
        context.placesToShow = 1;
        context.setLastPlace(1);
        showMorePlaces(context);
        await waitFor(() => {
            expect(context.expanded === true);
        });
    });




});