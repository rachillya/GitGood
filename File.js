import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Nav, NavItem, NavLink, TabContent, TabPane, ModalFooter, Container, Tooltip} from 'reactstrap';
import Load from "../TripManager/Load";
import Save from "../TripManager/Save";
import { FaFolderOpen } from 'react-icons/fa';
import { useToggle } from "../../../hooks/useToggle";
import classnames from 'classnames';

export default function File(props){
    const [modal, setModal] = useToggle(false);
    const [fileTooltip, setFileTooltip] = useToggle(false);
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const toggle = tab => { if (currentActiveTab !== tab) setCurrentActiveTab(tab);}

    return (
        <div>
            <Button name="File" id="file-tooltip" color="white" data-testid="fileIcon" onClick={setModal}><FaFolderOpen/></Button>
            <Tooltip placement="bottom" isOpen={fileTooltip} target="file-tooltip" toggle={setFileTooltip}>File</Tooltip>
            <Modal isOpen={modal} toggle={setModal}>
                <ModalHeader toggle={setModal}>File</ModalHeader>
                <ModalBody>
                    <Nav tabs>
                        <NavItem><NavLink className={classnames({active: currentActiveTab === '1'})} onClick={() => { toggle('1'); }}>Load</NavLink></NavItem>
                        <NavItem><NavLink className={classnames({active: currentActiveTab === '2'})} onClick={() => { toggle('2'); }}>Save</NavLink></NavItem>
                    </Nav>
                    <TabContent activeTab={currentActiveTab}>
                        <TabPane tabId="1"><Load placeActions={props.placeActions} serverUrl={props.serverUrl} /></TabPane>
                        <TabPane tabId="2"><Save places={props.places} distances={props.distances} units={props.units} earthRadius={props.earthRadius} tripName={props.tripName} /></TabPane>
                    </TabContent>
                </ModalBody>
                <ModalFooter><Button color="primary" onClick={setModal}>Done</Button></ModalFooter>
            </Modal>
        </div>
    );
}
                