import React from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import { latLngToText } from '../../../utils/transformers';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MARKER_ICON = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconAnchor: [12, 40] });

export default function Marker(props) {
    if (!props.place) {
        return(
            <MarkerTooltip />
        );
    }

    return (
        <LeafletMarker ref={(ref) => showMarkerPopup(ref)} position={props.place} icon={MARKER_ICON}>
            <Popup offset={[0, -18]} className="font-weight-bold">
                {props.place.name}
                <br/>
                <small className="text-muted">{latLngToText(props.place, 6)}</small>
            </Popup>
        </LeafletMarker>
    );
}
function showMarkerPopup(ref) {
    if (ref) {
        ref.leafletElement.openPopup();
    }
}

function MarkerTooltip(){
    return (
    <LeafletMarker ref={(ref) => showMarkerPopup(ref)} position={[40.5734, -105.0865]} icon={MARKER_ICON}>
        <Popup offset={[0, -18]} className="font-weight-bold">
            {'Click on the map to add a place to your trip'}
            <br/>
            {' or use the search button to find a place.'}
            <br/>
        </Popup>
    </LeafletMarker>
    );
}

