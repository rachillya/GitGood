import { useState } from 'react';
import { placeToLatLng } from '../utils/transformers';
import { reverseGeocode } from '../utils/reverseGeocode';
import { LOG } from '../utils/constants';
import sendTourRequest from "../components/Trip/Tour/sendTourRequest";
import {useToggle} from "./useToggle";

export function usePlaces() {
    const [places, setPlaces] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [earthRadius, setEarthRadius] = useState(6371.0);
    const [removeAlert,removeAlertToggle]=useToggle(false);

    const context = { places, setPlaces, selectedIndex, setSelectedIndex, earthRadius};

    const placeActions = {
        append: async (place) => append(context, place),
        removeAtIndex: (index) => removeAtIndex(context, index),
        removeAll: () => removeAll(context),
        selectIndex: (index) => selectIndex(context, index),
        setPlaces: setPlaces,
        sendTourRequest: async (serverUrl) => sendTourRequest(context, serverUrl),
        removeAlertToggle: removeAlertToggle
    };

    return {places, selectedIndex, placeActions,removeAlert};
}

async function append(context, place) {
    const { places, setPlaces, setSelectedIndex } = context;

    const newPlaces = [...places];

    const fullPlace = await reverseGeocode(placeToLatLng(place));
    newPlaces.push(fullPlace);

    setPlaces(newPlaces);
    setSelectedIndex(newPlaces.length - 1);
}

function removeAtIndex(context, index) {
    const { places, setPlaces, selectedIndex, setSelectedIndex } = context;

    if (index < 0 || index >= places.length) {
        LOG.error(`Attempted to remove index ${index} in places list of size ${places.length}.`);
        return;
    }
    const newPlaces = places.filter((place, i) => index !== i);
    setPlaces(newPlaces);

    if (newPlaces.length === 0) {
        setSelectedIndex(-1);
    } else if (selectedIndex >= index && selectedIndex !== 0) {
        setSelectedIndex(selectedIndex - 1);
    }
}

function removeAll(context) {
    const { setPlaces, setSelectedIndex } = context;

    setPlaces([]);
    setSelectedIndex(-1);
}

function selectIndex(context, index) {
    const { places, setSelectedIndex } = context;

    if (index < -1 || index >= places.length) {
        LOG.error(`Attempted to select index ${index} in places list of size ${places.length}.`);
        setSelectedIndex(-1);
        return;
    }
    setSelectedIndex(index);
}
