import React from 'react';
import {Col, Row} from "reactstrap";

export default function Distance({units, distances, index}){
    if (index === 0){
        return ( <></> );
    }
    const newDistance = distances[index-1];
    const title = ' \xa0 '+'Distance: ';
    return displayDistanceRow(newDistance, units, title);
}

export function DistanceBackToStart(distances, units){
    if (distances.length === 0){
        return ( <></> );
    }
    const distanceBack = distances[distances.length-1];
    const title = 'Distance Back to Start: ';
    return (
        <Row md={2} sm={2} xs={1}>
            <Col>
                {displayDistanceRow(distanceBack, units, title)}
            </Col >
        </Row >
    );
}

export function TotalDistance(distances, units){
    if(distances.length <= 1 ) {
        return ( <></> );
    }
    const sum = sumAllDistances(distances);
    const title = 'Total Distance: ';

    return(
        <> {displayDistanceRow(sum, units, title)} </>
    );
}

export function sumAllDistances(distances) {
    let sum = 0;
    for(let k = 0; k < distances.length; k++){
        sum += distances[k];
    }
    return sum;
}

export function displayDistanceRow(distance, units, title) {
        const newDistance = convertKiloToMile(distance);
        const newUnits = units + updateUnitSuffix(newDistance);

        return (
                <div >
                {title} {newDistance} {newUnits}
                </div>
        );
}

export function convertKiloToMile(distance) {
    return (Math.round(distance / 1.609));
}

export function updateUnitSuffix(distance){
    if (distance > 1 ){
        return 's';
    }
    else {
        return '';
    }
}
