import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { ItineraryActionsDropdown } from './actions.js';
import { DistanceBackToStart, TotalDistance } from "./DistanceColumn";
import SendDistancesRequest from "./SendDistancesRequest";
import { TripNameBox } from "../TripManager/TripNameBox";
import { TripTable} from "./TripTable";

export default function Itinerary(props) {
    const [units, setUnits] = useState("mile");
    const [distances, setDistances] = useState([]);
    const [earthRadius] = useState(6371.0);

    useEffect(() => {
       SendDistancesRequest(props.places, props.serverUrl, setDistances, earthRadius);
    }, [props.places, props.serverSettings, earthRadius]);

    return (
        <div className="vertical-padding">
            <Header places={props.places} placeActions={props.placeActions} distances={distances}
                    units={units} earthRadius={earthRadius} serverUrl={props.serverUrl} />
            <Table responsive striped>
                <TripTable places={props.places} placeActions={props.placeActions} selectedIndex={props.selectedIndex} distances={distances} units={units} />
            </Table>
            <Footer distances={distances} units={units} />
        </div>
    );
}

function Header(props) {
    const [tripName, setTripName] = useState("My Trip");
    return (
        <Container className="no-padding">
            <Row md={2} sm={2} xs={1}>
                <Col className="vertical-left no-padding text-size-up">
                    <TripNameBox tripName={tripName} setTripName={setTripName}/>
                </Col>
                <Col className="vertical-right">
                    <ItineraryActionsDropdown places={props.places} distances={props.distances} tripName={tripName} placeActions={props.placeActions} 
                        units={props.units} earthRadius={props.earthRadius} serverUrl={props.serverUrl} removeAlertToggle={props.removeAlertToggle}/>
                </Col>
            </Row>
            <Row className="vertical-left no-padding vertical-padding">
                {TotalDistance(props.distances, props.units)}
            </Row>
        </Container>
    );
}

function Footer (props) {
    return (
        <>
            {DistanceBackToStart(props.distances, props.units)}
        </>
    );
}
