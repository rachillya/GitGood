import React, {useState} from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';

export default function ResultsBox({places, placeActions}){
    const [lastPlace, setLastPlace] = useState(6);
    const [expanded, setExpanded] = useState(false);
    const placesToShow = 6;
    const context = {expanded, setExpanded, lastPlace, setLastPlace, places, placesToShow};

    return(
        <ListGroup>
            {places.slice(0, lastPlace).map((option) => (<ListGroupItem key={option.name + option.municipality}>
                <Row>
                    <Col>
                        {`${option.name}, ${option?.municipality ?? "no municipality"}`}
                    </Col>
                    <Col xs={1}>
                        <Button data-testid='add-place' onClick={() => placeActions.append(option)}>
                            <FaPlusCircle/>
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>))
            }
            {conditionallyShowMore(context)}
        </ListGroup>
    );
}
export function showMorePlaces(context) {
    const {setExpanded, lastPlace, setLastPlace, places, placesToShow} = context;
    if (lastPlace === placesToShow) {
        if(lastPlace < places.length - placesToShow)
        {
            setLastPlace(lastPlace + placesToShow);
        }
        setLastPlace( places.length);
        setExpanded(true);
    }
    else {
        setLastPlace(placesToShow);
        setExpanded(false);
    }
}

function conditionallyShowMore(context){
    const { expanded, places } = context;
    if (places.length < 1) {
        return (<div></div>);
    }
    else {
        return (
            <Button data-testid='show-more' onClick={() =>showMorePlaces(context)}>
                {expanded ? (<div>Show less</div>) : (<div>Show more</div>)}
            </Button>
        );
    }
}

