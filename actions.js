import React from 'react';
import { Button, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Tooltip } from 'reactstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaHome, FaTrash, FaTachometerAlt } from 'react-icons/fa';
import { DEFAULT_STARTING_PLACE } from '../../../utils/constants';
import File from "../TripManager/File";
import {useToggle} from "../../../hooks/useToggle";
import Find from './../Find/Find';
import {DeleteAll} from "../TripManager/DeleteAll";

export function ItineraryActionsDropdown(props) {
    const [gaugeTooltip, setGaugeTooltip] = useToggle(false);
    const [homeTooltip, setHomeTooltip] = useToggle(false);
    const [removeTooltip, toggleRemoveTooltip] = useToggle(false);

    return (
        <div className="vertical-right">
            <ButtonGroup>
                {(props.places.length) ? <DeleteAll removeTooltip={removeTooltip} toggleRemoveTooltip={toggleRemoveTooltip} placeActions={props.placeActions} removeAlertToggle={props.removeAlertToggle}/>:<></> }
                <File places={props.places} distances={props.distances} units={props.units} earthRadius={props.earthRadius} tripName={props.tripName} 
                    placeActions={props.placeActions} serverUrl={props.serverUrl} />
                {(props.places.length)? <> <Button color="white" id="gauge-tooltip" onClick={() => props.placeActions.sendTourRequest(props.serverUrl)} data-testid='tour-button' ><FaTachometerAlt /></Button>
                <Tooltip placement="bottom" isOpen={gaugeTooltip} target="gauge-tooltip" toggle={setGaugeTooltip}>Find Shortest Route</Tooltip></>:<></> }
                <Button color="white" id="home-tooltip" onClick={() => props.placeActions.append(DEFAULT_STARTING_PLACE)} data-testid='home-button'><FaHome /></Button>
                <Tooltip placement="bottom" isOpen={homeTooltip} target="home-tooltip" toggle={setHomeTooltip}>Add Current Location</Tooltip>
                <Find placeActions={props.placeActions} serverUrl={props.serverUrl}/>
            </ButtonGroup>
        </div>
    );
}

export function PlaceActionsDropdown(props) {
    return (
        <ActionsDropdown {...props}>
            <DropdownItem onClick={() => props.placeActions.removeAtIndex(props.index)} data-testid={`delete-button-${props.index}`}>
                <FaTrash />
            </DropdownItem>
        </ActionsDropdown>
    );
}

function ActionsDropdown(props) {
    return (
        <UncontrolledDropdown direction="left">
            <DropdownToggle tag="div" data-testid={`row-toggle-${props.index}`}>
                <BiDotsVerticalRounded size="1.5em" />
            </DropdownToggle>
            <DropdownMenu>
                <ButtonGroup>
                    {props.children}
                </ButtonGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
