import React from "react";
import {latLngToText} from "../../../utils/transformers";
import Distance from "./DistanceColumn";
import {PlaceActionsDropdown} from "./actions";
import {MdDragHandle} from "react-icons/md";

export function TableRow(props) {
    const name = props.place.name ? props.place.name : "-";
    const location = latLngToText(props.place);
    const newIndex=findOldIndex(props,props.place.name);

    return (
        <tr className="leaflet-interactive " onClick={() => props.placeActions.selectIndex(newIndex)}>
            <th className="text-nowrap" scope="row"><MdDragHandle size={30} />{' \xa0'}{ newIndex + 1}</th>
            <td className={props.selectedIndex==newIndex?"bg-warning":""}>
                {name}
                <br/>
                <small className="text-muted">{location}</small>
                <Distance units={props.units} distances={props.distances} index={newIndex} />
            </td>
            <td>
                <PlaceActionsDropdown placeActions={props.placeActions} index={newIndex} />
            </td>
        </tr>
    );
}

function findOldIndex(props,name){
    let newIndex = 0;
    props.places.map((place, index) => {
        if (place.name === name) {
            newIndex = index;
        }
    } )
    return newIndex;
}