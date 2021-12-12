export const VALID_CONFIG_RESPONSE = JSON.stringify({
    requestType: 'config',
    serverName: 't99',
    features: ['config']
});

export const VALID_FIND_RESPONSE_ZERO = JSON.stringify({
    match: 'asddfgdf',
    limit: 0,
    found: 0,
    places: [],
    requestType: 'find'
});

export const VALID_FIND_RESPONSE_ONE = JSON.stringify({
    match: 'eugene',
    limit: 10,
    found: 1,
    places: [
        {
            name: 'Eugene\'s Dream Airport',
            latitude: 33.0452995300293,
            longitude: -97.67479705810547,
            altitude: 905,
            type: 'small_airport'
        }
    ],
    requestType: "find"
});

export const VALID_FIND_RESPONSE_TWO = JSON.stringify({
    match: 'Fort Collins',
    limit: 0,
    found: 2,
    places: [
        {
            name: 'Fort Collins Downtown Airport',
            latitude: 40.5882987976,
            longitude: -105.041999817
        },
        {
            name: 'Fort Collins Loveland Municipal Airport',
            latitude: 40.4518013,
            longitude: -105.011001587
        }
    ],
    requestType: 'find'
});

export const VALID_FIND_RESPONSE_MANY = JSON.stringify({
    match: 'plains',
    limit: 0,
    found: 19,
    places: [
        {
            latitude: -19.266700744628906,
            name: 'Anna Plains Airport',
            type: 'small_airport',
            longitude: 121.51699829101562
        },
        {
            altitude: 4356,
            latitude: 40.2610917,
            name: 'Colorado Plains Medical Center Heliport',
            municipality: 'Fort Morgan',
            type: 'heliport',
            longitude: -103.7963389
        },
        {
            altitude: 4714,
            latitude: 40.1755981445,
            name: 'Colorado Plains Regional Airport',
            municipality:'Akron',
            type: 'small_airport',
            longitude: -103.222000122
        },
        {
            altitude: 850,
            latitude: 43.157100677490234,
            name: 'Fairplains Airpark',
            municipality: 'Greenville',
            type: 'small_airport',
            longitude: -85.14849853515625
        },
        {
            altitude: 1310,
            latitude: 51.13330078125,
            name: 'Gilbert Plains Airport',
            municipality: 'Gilbert Plains',
            type: 'small_airport',
            longitude: -100.5
        },
        {
            altitude: 680,
            latitude: -6.3917,
            name: 'Leron Plains Airport',
            municipality: 'Leron Plains',
            type: 'small_airport',
            longitude: 146.3434
        },
        {
            altitude: 210,
            latitude: 45.604000091552734,
            name: 'North Plains Gliderport',
            municipality: 'North Plains',
            type: 'small_airport',
            longitude: -123.0250015258789
        },
        {
            altitude: 660,
            latitude: 40.394500732421875,
            name: 'Old Plains Airport',
            municipality: 'Pennsburg',
            type: 'small_airport',
            longitude: -75.44129943847656
        },
        {
            altitude: 2467,
            latitude: 47.47240067,
            name: 'Plains Airport',
            municipality: 'Plains',
            type: 'small_airport',
            longitude: -114.9000015
        },
        {
            altitude: 2762,
            latitude: 37.27090072631836,
            name: 'Plains Municipal Airport',
            municipality: 'Plains',
            type: 'small_airport',
            longitude: -100.58799743652344
        },
        {
            altitude: 4650,
            latitude: 42.25830078125,
            name: 'Plainsview Ranch Airport',
            municipality: 'Hemingford',
            type: 'small_airport',
            longitude: -103.52999877929688
        },
        {
            altitude: 2180,
            latitude: 32.452367,
            name: 'Rolling Plains Hospital Heliport',
            municipality: 'Sweetwater',
            type: 'heliport',
            longitude: -100.397167
        },
        {
            altitude: 1855,
            latitude: -18.4253,
            name: 'Rosella Plains Airport',
            municipality: 'Rosella Plains',
            type: 'small_airport',
            longitude: 144.4587
        },
        {
            altitude: 15,
            latitude: -15.64330005645752,
            name: 'Rutland Plains Airport',
            type: 'small_airport',
            longitude: 141.84300231933594
        },
        {
            altitude: 230,
            latitude: -3.8821,
            name: 'Sepik Plains Airport',
            municipality: 'Sepik Plains',
            type: 'small_airport',
            longitude: 143.6734
        },
        {
            altitude: 48,
            latitude: -13.9754,
            name: 'Silver Plains Airport',
            municipality: 'Silver Plains',
            type: 'small_airport',
            longitude: 143.5537
        },
        {
            altitude: 3280,
            latitude: 33.57400131225586,
            name: 'St Mary of the Plains Hospital Heliport',
            municipality: 'Lubbock',
            type: 'heliport',
            longitude: -101.9010009765625
        },
        {
            altitude: 1228,
            latitude: 36.87839889526367,
            name: 'West Plains Municipal Airport',
            municipality: 'West Plains',
            type: 'small_airport',
            longitude: -91.90270233154297
        },
        {
            altitude: 520,
            latitude: 33.963901519800004,
            name: 'Whiteplains Airport',
            municipality: 'Lexington',
            type: 'small_airport',
            longitude: -81.3591995239
        }
    ],
    requestType: 'find'
});

export const VALID_FIND_REQUEST_ONE = JSON.stringify({
    "match": "eugene",
    "limit": 10,
    "requestType": "find"
})

export const INVALID_REQUEST = JSON.stringify({
    invalid: 'this is an invalid response to fail the schema'
});

export const MOCK_PLACES = [
    { name: 'Place A', lat: 40.0, lng: 50.0 },
    { name: 'Place B', lat: 45.0, lng: 55.0 },
    { lat: 65.0, lng: 70.0 },
    { lat: 90.0, lng: 15.0}
];

export const MOCK_PLACES_THREE = [
    { name: "Place A", lat: -19.002846, lng: 46.460938 },
    { name: "Place B" , lat: 64.135666, lng: -21.862675 },
    { name: "Place C" , lat: 10.31672, lng: 123.89071 }
];

export const VALID_DISTANCE_REQUEST_THREE = [
    {
        "requestType"    : "distances",
        "places"         : [

            {
                "latitude": "-19.002846",
                "name": "Place A",
                "longitude": "46.460938"
            },
            {
                "latitude": "64.135666",
                "name": "Place B",
                "longitude": "-21.862675"
            },
            {
                "latitude": "10.31672",
                "name": "Place C",
                "longitude": "123.89071"
            }
        ],
        "earthRadius"    : 6371.0
    }
    ];

export const VALID_DISTANCE_RESPONSE_THREE = [
    {
        "earthRadius": 6371.0,
        "places": [
            {
                "latitude": "-19.002846",
                "name": "Place A",
                "longitude": "46.460938"
            },
            {
                "latitude": "64.135666",
                "name": "Place B",
                "longitude": "-21.862675"
            },
            {
                "latitude": "10.31672",
                "name": "Place C",
                "longitude": "123.89071"
            }
        ],
        "distances": [
            10907,
            11249,
            9086
        ],
        "requestType": "distances"
    }
];

export const REVERSE_GEOCODE_RESPONSE = JSON.stringify({
    "place_id": 259127396,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "relation",
    "osm_id": 8539568,
    "lat": "40.57066025",
    "lon": "-105.08539645568865",
    "place_rank": 30,
    "category": "amenity",
    "type": "university",
    "importance": 0.4948531325947546,
    "addresstype": "amenity",
    "name": "Colorado State University",
    "display_name": "Colorado State University, South College Avenue, Fort Collins, Larimer County, Colorado, 80525-1725, United States",
    "address": {
        "amenity": "Colorado State University",
        "road": "South College Avenue",
        "city": "Fort Collins",
        "county": "Larimer County",
        "state": "Colorado",
        "postcode": "80525-1725",
        "country": "United States",
        "country_code": "us"
    },
    "boundingbox": [
        "40.5527786",
        "40.5789122",
        "-105.0972937",
        "-105.0721817"
    ]
});

export const VALID_TOUR_REQUEST_THREE= (
    {
        "requestType"    : "tour",
        "earthRadius"    : 3959.0,
        "response"       : 0.0,
        "places"         : [{"name":"Denver",       "latitude": "39.7", "longitude": "-105.0", "notes":"The big city"},
            {"name":"Boulder",      "latitude": "40.0", "longitude": "-105.4", "notes":"Home of CU"},
            {"name":"Fort Collins", "latitude": "40.6", "longitude": "-105.1", "notes":"Home of CSU"}]
    }
);

export const VALID_TOUR_RESPONSE_THREE = (
    {
        "requestType"    : "tour",
        "earthRadius"    : 3959.0,
        "response": 1,
        "places"         : [{"name":"Denver",       "latitude": "39.7", "longitude": "-105.0", "notes":"The big city"},
            {"name":"Fort Collins", "latitude": "40.6", "longitude": "-105.1", "notes":"Home of CSU"},
            {"name":"Boulder",      "latitude": "40.0", "longitude": "-105.4", "notes":"Home of CU"}]
    }
);

export const MOCK_PLACES_NOTES = [
    { name: 'Denver', lat: 39.7, lng: -105.0, notes: 'The big city'},
    { name: 'Boulder', lat: 40.0, lng: -105.4, notes: 'Home of CU' },
    { name: 'Fort Collins',lat: 40.6, lng: -105.1, notes: 'Home of CSU'}
];
