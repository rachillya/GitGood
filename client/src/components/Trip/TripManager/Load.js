import React, {useState} from 'react';
import {Input, Container} from "reactstrap";
import { isJsonResponseValid } from '../../../utils/restfulAPI';
import { LOG } from '../../../utils/constants';
import * as tripFileSchema from '../../../../schemas/TripFile';
import { placeToLatLng } from "../../../utils/transformers";
import Papa from "papaparse";

export default function Load(props){
    return (
        <FileLoaderApp placeActions={props.placeActions}/>
    );
}

export function FileLoaderApp(props) {
    const FILE_FORMATS = ".json, .csv, application/json, text/csv";
    const [file, setFile] = useState(null);

    return (
        <Container>
            <h3 className="font-weight-bold mt-4">Select a JSON or CSV file.</h3>
            <Input type="file" accept={FILE_FORMATS}
                   onChange={(e) => handleFileUpload(e, setFile, props)}
                   data-testid={'load-button'} />
            <FileDisplay file={file} />
        </Container>
    );
}

function handleFileUpload(event, setFile, props) {
    const fileName = event.target.files[0].name;
    const fileObject = event.target.files[0];
    readFile(fileName, fileObject, setFile, props.placeActions)
}

function readFile(fileName, fileObject, setFile, placeActions) {
    try {
        const reader = new FileReader();
        reader.readAsText(fileObject, "UTF-8");
        reader.onload = event => {
            const file = { name: fileName, text: event.target.result };

            setFile(file);
            parseFile(file, placeActions.setPlaces);
        };
    } catch(e) {
        LOG.error(`Unable to open ${fileName}. Check the log for more details.`, e);
    }
}

function parseFile(file, setPlaces){
    const extension = file.name.split('.').pop();
    if (extension === "json") {
        parseJSON(file, setPlaces);
    } else if (extension === "csv") {
        parseCSV(file,setPlaces);
    }
}

function parseJSON(file, setPlaces) {
    if (!isJsonResponseValid(JSON.parse(file.text), tripFileSchema)) {
        LOG.error("Could not load trip - JSON was invalid.");
    }
    const newPlaces = JSON.parse(file.text);
    const reMapPlaces = newPlaces.places.map(place => ({...placeToLatLng(place),"name":place.name}));
    setPlaces(reMapPlaces);
}

function parseCSV(file, setPlaces) {
    Papa.parse(file.text, {
        header: true,
        complete: function(results) {
            const csv = {"places": results.data};
            if(!isJsonResponseValid(JSON.parse(JSON.stringify(csv)), tripFileSchema)) {
                LOG.error("Could not load trip - JSON was invalid.");
            }
            const newPlaces = JSON.parse(JSON.stringify(csv));
            const reMapPlaces = newPlaces.places.map(place => ({...placeToLatLng(place), "name":place.name}));
            setPlaces(reMapPlaces);
        }
    });
}

function FileDisplay(props) {
    if (!props.file)
        return null;

    return (
        <div className="mt-5">
            <h5 style={{ color:"green" }}>{props.file.name} uploaded </h5>
        </div>
    );
}
