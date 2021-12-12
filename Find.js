import { useToggle } from '../../../hooks/useToggle';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Tooltip} from 'reactstrap';
import { FaSearchLocation } from 'react-icons/fa';
import React, {useState} from 'react';
import TextBox from "./TextBox";
import ResultsBox from "./ResultsBox";

export default function Find (props) {
    const [modal, setModal] = useToggle(false);
    const [userPlace, setUserPlace] = useState("");
    const [places, setPlaces] = useState([]);
    const [searchTooltip, setSearchTooltip] = useToggle(false);
    const handleModal = () => handleToggle(modal,setModal,setPlaces);
    return (
        <Container className="no-padding vertical-right">
            <Button color="primary" id="search-tooltip" aria-label="magnifyingGlass" onClick={setModal}><FaSearchLocation size='1.25rem' /></Button>
            <Tooltip placement="bottom" isOpen={searchTooltip} target="search-tooltip" toggle={setSearchTooltip}>Search</Tooltip>
            <Modal isOpen={modal} toggle={handleModal}>
                <ModalHeader toggle={handleModal}>Search</ModalHeader>
                <ModalBody>
                    <TextBox userPlace = {userPlace} setUserPlace = {setUserPlace} serverUrl={props.serverUrl} setPlaces = {setPlaces}/>
                    <ResultsBox places={places} placeActions={props.placeActions}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleModal}>Done</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

function handleToggle(modal,setModal,setPlaces){
    if(modal){
        setPlaces([]);
    }
    setModal();
}