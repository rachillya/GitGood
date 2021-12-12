
export function saveSVG(props) {
    const svgLink = "http://www.w3.org/2000/svg";
    const svg = buildSvgTag(svgLink);

    const image = buildImageTag(svgLink);
    svg.appendChild(image);

    let g = buildGtag(svgLink);
    svg.appendChild(g);

    let polyline = buildPolyline(svgLink, props.places);
    g.append(polyline);

    buildCircles(svgLink, props.places, g);

    const serializer = new window.XMLSerializer;
    const string = serializer.serializeToString(svg);
    return string;
}

function buildSvgTag(svgLink){
    const svg = document.createElementNS(svgLink, "svg");
    svg.setAttribute("width","1440");
    svg.setAttribute("height","720");
    svg.setAttribute("viewBox","-180 -90 360 180");
    return svg;
}

function buildImageTag(svgLink) {
    let image = document.createElementNS(svgLink, "image");
    image.setAttribute("href", "https://instructor-uploaded-content.s3.amazonaws.com/MAP.svg-6983777");
    image.setAttribute("x", "-180");
    image.setAttribute("y", "-90");
    image.setAttribute("height", "180");
    image.setAttribute("width", "360");
    return image;
}

function buildGtag(svgLink){
    let g = document.createElementNS(svgLink, "g");
    g.setAttribute("transform", "matrix(1,0,0,-1,0,0)");
    return g;
}

function buildPolyline(svgLink, places) {
    let polyline = document.createElementNS(svgLink, "polyline");
    let points = places.map((place) => (place.lng.toString() + ',' + place.lat.toString())).join(' ');
    polyline.setAttribute("points", points);
    polyline.setAttribute("style", "fill:none; stroke:red; stroke-width:0.5");
    return polyline;
}

function buildCircles(svgLink,places,g){
    places.forEach( (place) => {
        let circle = document.createElementNS(svgLink, "circle");
        circle.setAttribute("cx", place.lng);
        circle.setAttribute("cy", place.lat);
        circle.setAttribute("r", "0.75");
        circle.setAttribute("stroke", "black");
        circle.setAttribute("stroke-width", "0.25");
        circle.setAttribute("fill", "blue");
        g.append(circle);
    });
}