import React from 'react';
import { Button, Col, Container, Input, ListGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row, ListGroupItem } from 'reactstrap';
import { useServerInputValidation } from '../../hooks/useServerInputValidation';

export default function ServerSettings(props) {
    const [serverInput, setServerInput, config, validServer, resetModal]
        = useServerInputValidation(props.serverSettings.serverUrl, props.toggleOpen);

    function closeModalWithoutSaving(){
        resetModal(props.serverSettings.serverUrl);
    }

    return (
        <Modal isOpen={props.isOpen} toggle={closeModalWithoutSaving}>
            <Header toggleOpen={closeModalWithoutSaving} />
            <Body
                serverInput={serverInput}
                setServerInput={setServerInput}
                serverSettings={props.serverSettings}
                serverName={getCurrentServerName(config, props.serverSettings)}
                validServer={validServer}
            />
            <Footer
                config={config}
                serverInput={serverInput}
                validServer={validServer}
                resetModal={resetModal}
                closeModalWithoutSaving={closeModalWithoutSaving}
                processServerConfigSuccess={props.processServerConfigSuccess}
            />
        </Modal>
    );
}

function getCurrentServerName(config, serverSettings) {
    if (config) {
        return config.serverName;
    }
    else if (serverSettings.serverConfig) {
        return serverSettings.serverConfig.serverName;
    }
    return "";
}

function Header(props) {
    return (
        <ModalHeader className="ml-2" toggle={props.toggleOpen}>
            Server Connection
        </ModalHeader>
    );
}

function Body(props) {
    const urlInput =
        <Input value={props.serverInput} placeholder={props.serverSettings.serverUrl} onChange={(e) => { props.setServerInput(e.target.value) }} valid={props.validServer} invalid={!props.validServer} />;

    if(props.serverSettings.serverConfig == null) {
        return (
            <ModalBody>
                <Container>
                    <SettingsRow label="Name" value={props.serverName} />
                    <SettingsRow label="Features" value="config, find" />
                    <SettingsRow label="Supported Features" value="none" />
                    <SettingsRow label="URL" value={urlInput} />
                </Container>
            </ModalBody>
        );
    } else {
        return (
            <ModalBody>
                <Container>
                    <SettingsRow label="Name" value={props.serverName} />
                    <FeatureRow label="Features" value={props.serverSettings.serverConfig.features}/>
                    <SettingsRow label="URL" value={urlInput} />
                </Container>
            </ModalBody>
        );
    }
}

function SettingsRow({label, value}) {
    return (
        <Row className="my-2 vertical-center">
            <Col xs={3}>
                {label}:
            </Col>
            <Col xs={9}>
                {value}
            </Col>
        </Row>
    );
}

export function FeatureRow ({label, value}){
    var NewValue;
    if(Array.isArray(value))
    {NewValue = value.join(',')}
    else{NewValue = value}
    return(
        <Row key={value}>
            <Col xs={3}>
                {label}:
            </Col>
            <Col xs={9}>
                {NewValue}
            </Col>
        </Row>
    );
}

function Footer(props) {
    let hasFeatures = true;
    let currFeatures = ["config", "find", "distances"];
    if(props.config === null){
        hasFeatures = false;
    } else {
        for(let feat of currFeatures){
            if(!props.config.features.includes(feat)){
                hasFeatures = false;
            }
        }
    }

    return (
        <ModalFooter>
            <Button color="secondary" onClick={props.closeModalWithoutSaving}>Cancel</Button>
            <Button color="primary" onClick={() => {
                props.processServerConfigSuccess(props.config, props.serverInput);
                props.resetModal(props.serverInput);
            }}
                disabled={(!props.validServer && !hasFeatures)}
            >
                Save
            </Button>
        </ModalFooter>
    );
}
