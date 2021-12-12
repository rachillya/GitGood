import {Button, Modal, ModalHeader, Tooltip } from "reactstrap";
import {FaTrashAlt} from "react-icons/fa";
import React from "react";
import {useToggle} from "../../../hooks/useToggle";

export function DeleteAll(props){
    const [deleteAllModal, deleteAllToggleModal] = useToggle(false);

        return (
            <div>
                <Button color="white" id="remove-tooltip" onClick={deleteAllToggleModal} data-testid='delete-all-modal-button'><FaTrashAlt /></Button>
                <Tooltip placement="bottom" isOpen={props.removeTooltip} target="remove-tooltip" toggle={props.toggleRemoveTooltip}>Delete All Destinations</Tooltip>
                    <Modal isOpen={deleteAllModal} toggle={deleteAllToggleModal} centered>
                        <ModalHeader toggle={deleteAllToggleModal}>
                            {"Delete All Destinations? "}{" \xa0 "}
                            <Button color="primary" id="remove-tooltip" onClick={() => deleteAllPlaces(props,deleteAllToggleModal,props.removeAlertToggle)} data-testid='delete-all-button'>
                                {"Delete All"}
                            </Button>
                        </ModalHeader>
                         </Modal>
            </div>
        );
}

function deleteAllPlaces(props,deleteAllToggleModal){
    props.placeActions.removeAll()
    deleteAllToggleModal();
    props.placeActions.removeAlertToggle();
}