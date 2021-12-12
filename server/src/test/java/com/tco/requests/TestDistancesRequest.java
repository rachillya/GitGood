package com.tco.requests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestDistancesRequest {
    private DistancesRequest distReq;
    Place place1;
    Place place2;
    Place place3;
    Places data;
    GreatCircleDistance g = new GreatCircleDistance();

    @BeforeEach
    public void createConfigurationForTestCases() {
        distReq = new DistancesRequest();
        distReq.buildResponse();

        place1 = new Place();
        place2 = new Place();
        place3 = new Place();
        place1.put("latitude","40.6");
        place1.put("longitude","-105.1");
        place2.put("latitude","-33.9");
        place2.put("longitude","151.2");
        place3.put("latitude","-57.9");
        place3.put("longitude","175.2");
        data = new Places();
        data.add(place1);
        data.add(place2);
        data.add(place3);
    }

    @Test
    @DisplayName("Test Creating the Distances Arraylist")
    public void testDistInit() {
        Distances results = distReq.populateDistances(data,453);
        assertTrue(results.get(0) <= 960 && results.get(0) >= 950);
    }

    @Test
    @DisplayName("Test Great Circle Distance Formula")
    public void testGCDF() {
        Long distance = g.greatCircleDistance(place1,place2,453);
        assertTrue(distance <=960 && distance>=950);
    }

}
