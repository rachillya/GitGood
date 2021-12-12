package com.tco.requests.TestShorterTrip;

import com.tco.requests.Places;
import com.tco.requests.Place;

import java.util.HashMap;
import java.util.ArrayList;

import com.tco.requests.ShorterTrip.Tour;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestTour {
    Place place1;
    Place place2;
    Place place3;
    Places places;
    private Tour tour;

    @BeforeEach
    public void createConfigurationForTestCases() {

        place1 = new Place();
        place2 = new Place();
        place3 = new Place();
        place1.put("distance", "30");
        place2.put("distance", "25");
        place3.put("distance", "15");

        places = new Places();
        places.add(place1);
        places.add(place2);
        places.add(place3);
        // places [{"distance","30"},{"distance","25"},{"distance","15"}]

        // creates an empty int array of the same size as places
        tour = new Tour(places, 3959.0);

        // tour [2,0,0]
        tour.append(tour.getIndexOfValue("15", places));
    }

    @Test
    @DisplayName("Test size() in Tour ")
    public void testAppend() {
        assertTrue(tour.size() == 3);
    }

    @Test
    @DisplayName("Test nextAvailableTourElement in Tour ")
    public void testNextAvailableTourElement() {
        int tourElement = 0;
        assertTrue(tour.getNextAvailableElement() == 1);
    }

    @Test
    @DisplayName("Test Tour getValue ")
    public void testTourGetValue() {
        int tourElement = 0;
        assertTrue(tour.getValue(tourElement) == 2);
    }

    @Test
    @DisplayName("Test convertTourToPlaces ")
    public void testConvertTourToPlaces() {
        Places result = tour.convertTourToPlaces();
        assertTrue(Tour.getIndexOfValue("15", result) == 0);
    }

    @Test
    @DisplayName("Test getPlace() ")
    public void testGetPlace() {
        Place newPlace = tour.getPlace(0);
        String dis = newPlace.get("distance");
        assertTrue(dis == "15");
    }

    @Test
    @DisplayName("Test setValue() ")
    public void testSetValue() {
        int index = 1;
        tour.setValue(index, 5);
        assertTrue(tour.getValue(1) == 5);
    }
}