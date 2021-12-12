import React from 'react';
import { Button, Container, Col, Row} from "reactstrap";
import { FaFileDownload } from "react-icons/fa";
import { latLngToPlace } from "../../../utils/transformers";
import {saveSVG} from "./saveSVG";

export default function Save(props){
    return (
        <FileSavingApp places={props.places} tripName={props.tripName} distances={props.distances} units={props.units} earthRadius={props.earthRadius} />
    );
}

const MIME_TYPE = {
    JSON: "application/json",
    CSV: "text/csv",
    SVG: "image/svg+xml",
    KML: "application/vnd.google-earth.kml+xml"
};

export function FileSavingApp(props) {
    const fileName = props.tripName.replace(/ /g, "_").toLowerCase();

    return (
        <Container>
            <h3 className="font-weight-bold mt-4 mb-3">Save your trip to the file system.</h3>
            <Row className="justify-content-md-center">
                <Col><a href={downloadFile(buildTripJSON(props), MIME_TYPE.JSON) } download={fileName + ".json"}>
                    <Button data-testid="saveIcon" color={"primary"}><FaFileDownload/><br/>JSON</Button>
                </a></Col>
                <Col><a href={downloadFile(buildTripCSV(props), MIME_TYPE.CSV)} download={fileName + ".csv"}>
                    <Button color={"primary"}><FaFileDownload/><br/>CSV </Button>
                </a></Col>
            </Row><br/><Row className="justify-content-md-center">
                <Col><a href={downloadFile(buildTripKML(props), MIME_TYPE.KML)} download={fileName + ".kml"}>
                    <Button color={"primary"} data-testid="saveAsKML"><FaFileDownload/><br/>KML </Button>
                </a></Col>
                <Col><a href={downloadFile(saveSVG(props), MIME_TYPE.SVG)} download={fileName + ".svg"}>
                    <Button color={"primary"}><FaFileDownload/><br/>SVG </Button>
                </a></Col>
            </Row>
        </Container>
    );
}

function downloadFile(fileText, mimeType) {
    const file = new Blob([fileText], { type: mimeType });
    return URL.createObjectURL(file);
}

function buildTripJSON(props) {
    const itineraryList = props.places.map(place => ({...latLngToPlace(place),"name":place.name}));
    const tripJSON = {
        earthRadius: props.earthRadius,
        units: props.units,
        places: itineraryList,
        distances: props.distances
    };

    // Turn the object into a string with a spacing of 2 for readability.
    return JSON.stringify(tripJSON, null, 2);
}

function buildTripCSV(props) {
    const itineraryList = props.places.map(place => ({...latLngToPlace(place),"name":place.name}));
    const header = 'latitude,longitude,name\n'
    const tripCSV = header + convertToCSV(itineraryList);
    return tripCSV;
}

function convertToCSV(places) {
    let csv = '';

    for (let i = 0; i < places.length; i++) {
        let line = '';
        line = concatCSV(places, i);
        if(i !== places.length - 1) {
            csv += line + '\n';
        } else {
            csv += line;
        }
    }

    return csv;
}

function concatCSV(places, i) {
    let csvSeg = '';
    for (let index in places[i]) {
        if (csvSeg !== '') csvSeg += ',';
        csvSeg += places[i][index];
    }
    return csvSeg;
}

function buildTripKML(props) {
    const itineraryList = props.places.map(place => ({...latLngToPlace(place),"name":place.name}));
    let kml = kmlFormatHalfOne(props.tripName);
    for(let i = 0; i < itineraryList.length; ++ i){
        kml += getCoords(itineraryList[i]);
    }
    kml += kmlAddLines(itineraryList);
    kml += kmlFormatHalfTwo();
    return kml;
}

function getCoords(place){
    let long = place.longitude;
    let lat = place.latitude;
    return `        <Placemark>
            <name>` + place.name + `</name>
            <LookAt>
                <longitude>` + long + `</longitude>
                <latitude>` + lat + `</latitude>
            </LookAt>
            <Point>
                <coordinates>` + long + "," + lat + `</coordinates>
            </Point>
        </Placemark>
`;
}

export function kmlAddLines(places){
    let coords = "";
    for(let i = 0; i < places.length; ++ i){
        //let latlng = placeToLatLng(place);
        coords += places[i].longitude + "," + places[i].latitude + " ";
    }
    if(places.length !== 0)
        coords += places[0].longitude + "," + places[0].latitude
    return `        <Placemark>
            <LineString>
                <coordinates>
                    ` + coords + `
                </coordinates>
            </LineString>
        </Placemark>
`;
}

function kmlFormatHalfOne(name){
    return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
    <Document>
        <name>` + name + `</name>
        <open>1</open>
        <description>Trip connected by lines</description>
        <Style id="CrossStyle">
            <LineStyle>
                <color>ffffffb6</color>
                <width>4</width>
            </LineStyle>
        </Style>\n`;
}

function kmlFormatHalfTwo(){
    return `    </Document>
</kml>`;
}
