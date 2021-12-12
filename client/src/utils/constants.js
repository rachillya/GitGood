import ulog from 'ulog';

export function setLogLevelIfDefault() {
    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    if (!urlParams.has("log")) {
        if (process.env.CLIENT_LOG_LEVEL === "INFO") {
            ulog.level = ulog.INFO;
        } else {
            ulog.level = ulog.ERROR;
        }
    }
}

// default location CSU campus
let userLatLon = {
    latitude: 40.5734,
    longitude: -105.0865,
};

export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        return userLatLon;
    } else {
        return userLatLon;
    }
}
function showPosition(position) {
    userLatLon.latitude = position.coords.latitude;
    userLatLon.longitude = position.coords.longitude;
}

setLogLevelIfDefault();

export const LOG = ulog("App");

export const CLIENT_TEAM_NAME = "t02 Git Good";

export const EARTH_RADIUS_UNITS_DEFAULT = { "miles": 3959 };

export const DEFAULT_STARTING_PLACE = getLocation();
