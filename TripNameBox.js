import React from 'react';
import { Input, InputGroup,  Modal, Button, Container, Tooltip} from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { useToggle } from "../../../hooks/useToggle";

export function TripNameBox(props){
    const [modal, setModal] = useToggle(false);
    const [editTooltip, setEditTooltip] = useToggle(false);

    return(
        <Container className="no-padding vertical-left">
            <Button color="white" id="edit-tooltip" aria-label="edit" onClick={setModal} size="lg"> {props.tripName} <FaEdit/></Button>
            <Tooltip placement="bottom" isOpen={editTooltip} target="edit-tooltip" toggle={setEditTooltip}>Change Trip Name</Tooltip>
            <Modal isOpen={modal} toggle={setModal}>
                    <Input
                        placeholder = "Enter Trip Name"
                        onChange={(e) => props.setTripName(e.target.value)}
                        type="text"
                    />
                <Button color="primary" onClick={setModal}>Done</Button>   
            </Modal>
        </Container>
    );
}
