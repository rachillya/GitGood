import {sendAPIRequest} from '../../../utils/restfulAPI';
import {LOG} from '../../../utils/constants';
import {latLngToPlace} from "../../../utils/transformers";

export default async function SendDistancesRequest(places, serverUrl, setDistances, earthRadius) {
    let jsonRequest = renameLatLngInPlaces(places);

    try {
        const distancesResponse = await sendAPIRequest({requestType:"distances",places:jsonRequest,earthRadius:earthRadius}, serverUrl);
        if(distancesResponse) {
            const distances = distancesResponse.distances;
            setDistances(distances);
        } else {
            LOG.error(`SendDistancesRequest() failed. Server returned a null response.`);
        }
    }
    catch(e) {
        LOG.error(`Distances request to ${serverUrl} failed. Check the log for more details.`, e);
    }
}

export function renameLatLngInPlaces(places) {
    let locations = [];
    for(let i = 0; i < places.length; i++){
        locations[i] = latLngToPlace(places[i]);
    }
    return locations;
}