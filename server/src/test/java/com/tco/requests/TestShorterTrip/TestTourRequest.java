package com.tco.requests.TestShorterTrip;

import com.tco.requests.Place;
import com.tco.requests.Places;
import com.tco.requests.ShorterTrip.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestTourRequest {
    Place place0;
    Place place1;
    Place place2;
    Place place3;
    Places places;
    TourRequest t;
    Tour route;

    @BeforeEach
    public void createConfigurationForTestCases() {

        Place place0 = new Place();
        Place place1 = new Place();
        Place place2 = new Place();
        Place place3 = new Place();
        Place place4 = new Place();
        Place place5 = new Place();
        Place place6 = new Place();
        Place place7 = new Place();
        Place place8 = new Place();
        Place place9 = new Place();
        Place place10 = new Place();

        place0.put("name","Alaska");
        place0.put("latitude","61.627619");
        place0.put("longitude","-149.575331");

        place1.put("name","Main");
        place1.put("latitude","45.018461");
        place1.put("longitude","-69.452604");

        place2.put("name","Montana");
        place2.put("latitude","47.703468");
        place2.put("longitude","-108.559851");

        place3.put("name","Maryland");
        place3.put("latitude","39.490424");
        place3.put("longitude","-77.568989");

        place4.put("name","Massachusetts");
        place4.put("latitude","42.388599");
        place4.put("longitude","-71.024063");

        place5.put("name","North Carolina");
        place5.put("latitude","35.502248");
        place5.put("longitude","-78.739433");

        place6.put("name","Florida");
        place6.put("latitude","26.552414");
        place6.put("longitude","-80.829207");

        place7.put("name","Georgia");
        place7.put("latitude","33.886965");
        place7.put("longitude","-83.987797");

        place8.put("name","Louisiana");
        place8.put("latitude","30.618663");
        place8.put("longitude","-93.288091");

        place9.put("name","Alabama");
        place9.put("latitude","32.044395");
        place9.put("longitude","-87.146388");

        place10.put("name","New Mexico");
        place10.put("latitude","33.667893");
        place10.put("longitude","-106.361145");

        places = new Places();
        places.add(place0);
        places.add(place1);
        places.add(place2);
        places.add(place3);
        places.add(place4);
        places.add(place5);
        places.add(place6);
        places.add(place7);
        places.add(place8);
        places.add(place9);
        places.add(place10);

        t = new TourRequest();

        route = new Tour(places, 6352.0);
        for(int i = 0; i < route.size(); i++){
            route.setValue(i,i);
        }
    }

    @Test
    @DisplayName("Test Shortest Ind")
    public void testShortestInd() {
        Visited v = new Visited(new boolean[]{true,true,true,false});
        int shortestInd = t.findShortestInd(v,0);
        assertTrue(shortestInd==3);
    }

    @Test
    @DisplayName("Test Make Distances")
    public void testMakeDistances() {
        ShorterDistance d = t.makeDistances(places,6352.0);
        assertTrue(d.getLength()==places.size());
    }

    @Test
    @DisplayName("Test Traverse Places")
    public void testTraversePlaces() {
        Visited v = new Visited(new boolean[]{true, false, true, false});
        int curInd = 0;
        ShorterDistance d = new ShorterDistance(new long[][]{{1,2,4,3},{1,3,5,3}});
        int nextPlace = t.traversePlaces(v,curInd,d);
        assertTrue(nextPlace == 1);
    }

    @Test
    @DisplayName("Test Optimize Trip")
    public void testOptimizeTrip() {
        Tour tour = t.optimizeTrip(places,6352.0, 14E10);
        assertTrue(tour.size()==places.size());
    }

    @Test
    @DisplayName("Test Opt2")
    public void testOpt2() {
        Opt2 opt2 = new Opt2();
        Tour tour2 = opt2.opt2(route);
        assertTrue(tour2.size() == places.size());
    }

    @Test
    @DisplayName("Test trySwappingSections")
    public void testTrySwappingSections() {
        Opt2 opt2 = new Opt2();
        boolean result = opt2.trySwappingSections(route, 0, 2, false);
        assertTrue(result == true);
    }
}
