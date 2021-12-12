import React, {useEffect} from 'react';
import { Alert, Col, Container, Row } from 'reactstrap';
import Map from './Map/Map';
import Itinerary from './Itinerary/Itinerary';
import { usePlaces } from '../../hooks/usePlaces';

export default function Planner(props) {
    const {places, selectedIndex, placeActions, removeAlert} = usePlaces();

    return (
        <Container>
            <Section>
                {(!removeAlert)? <></> : <RemoveAllPlacesAlert placeActions={placeActions} removeAlert={removeAlert} />}
                <Map places={places} selectedIndex={selectedIndex} placeActions={placeActions} />
            </Section>
            <Section>
                <Itinerary places={places} selectedIndex={selectedIndex}
                           placeActions={placeActions}
                           serverSettings={props.serverSettings}
                            serverUrl={props.serverUrl}/>
            </Section>
        </Container>
    );
}

function Section(props) {
    return (
        <Row>
            <Col sm={12} md={{ size: 10, offset: 1 }}>
                {props.children}
            </Col>
        </Row>
    );
}

function RemoveAllPlacesAlert(props){

    useEffect(() => {
        // remove alert from screen after 30000 milliseconds
        const timeRemoveAllAlert = setTimeout(() => {
            props.placeActions.removeAlertToggle();
        }, 3000)

        return () => {
            clearTimeout(timeRemoveAllAlert)
        }
    }, [props.removeAlert]);

    if (!props.removeAlert) {
        return null;
    }

    return(
    <div>
        <Alert color="primary" isOpen={props.removeAlert} toggle={props.placeActions.removeAlertToggle} fade={false}>
            Success! All destinations have been removed from your trip.
        </Alert>
    </div>
    );
}
