import React, { useEffect, useState } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import {TableRow} from "./TableRow";

// draggable code line 7 & 11 was taken from:
// https://codesandbox.io/s/137ku?file=/src/MyTable.js:860-1031
const SortableList = SortableContainer(({ children }) => {
    return <tbody>{children}</tbody>;
});

const SortableItem = SortableElement(props => <TableRow {...props}/>);

export function TripTable(props) {
    const [items, setItems] = useState(props.places);
    useEffect(() => {
        setItems(props.places);
    }, [props.places])
    const onSortEnd = ({oldIndex, newIndex}) => {
        const newPlaces = arrayMove(items, oldIndex, newIndex);
        for(let i = 0; i < props.places.length; i++){
         props.places[i] = newPlaces[i];
        }
        setItems(newPlaces);
        props.placeActions.setPlaces(newPlaces);
    };

    return (
        <SortableList items={items} onSortEnd={onSortEnd} {...props} lockAxis="y" axis="y" distance={1} >
            {items.map((place,index) => {
                return <SortableItem key={`item-${index}`} index={index} place={place} placeActions={props.placeActions}
                    selectedIndex={props.selectedIndex} distances={props.distances} units={props.units} places={props.places} />
            })}
        </SortableList>
    );
}
