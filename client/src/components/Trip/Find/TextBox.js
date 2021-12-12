import React from 'react';
import { Button, Input, ModalBody } from 'reactstrap';
import SendFindRequest from './SendFindRequest';

export default function TextBox({userPlace, setUserPlace, setPlaces, serverUrl}){
    return(
        <ModalBody>
            <Input
                placeholder ="Search for a place..."
                onChange={(e) => setUserPlace(e.target.value)}
                type="text"
                name="userPlace"
                id="userPlace"
            />
            <Button color="primary" aria-label="searchButton"  onClick={() => SendFindRequest(userPlace, serverUrl,setPlaces)}>Search</Button>
        </ModalBody>
    );
}
