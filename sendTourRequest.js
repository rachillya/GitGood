import { LOG } from '../../../utils/constants';
import { placeToLatLng } from "../../../utils/transformers";
import { sendAPIRequest } from "../../../utils/restfulAPI";

export default async function sendTourRequest(props, serverUrl) {

   if (props.places.length > 2000 || props.places.length < 4){
      alert("Could not optimize your trip: Places must be between 4 and 4000");
      return;
   }
   let jsonRequest = addNamesAndNotesToRequest(props.places);
   try {
      const tourResponse = await sendAPIRequest({requestType:"tour", earthRadius:props.earthRadius, response: 1.0, places:jsonRequest}, serverUrl);
      if(tourResponse) {
         const tourPlaces = tourResponse.places.map(place => ({...placeToLatLng(place),"name":place.name}));
         props.setPlaces(tourPlaces);
      } else {
         LOG.error(`sendTourRequest() failed. Server returned a null response.`);
      }
   }
   catch(e) {
      LOG.error(`Tour request to ${props.serverUrl} failed. Check the log for more details.`, e);
   }
}

export function addNamesAndNotesToRequest(places){

   return places.map(place => {
      return {
         "name": place.name,
         "latitude": place.lat.toString(),
         "longitude": place.lng.toString(),
         "notes": place.notes ? place.notes : ""
   };
   });
}