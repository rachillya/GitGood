package com.tco.requests;

import java.util.ArrayList;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DistancesRequest extends Request {
    
    private Double earthRadius;
    private Places places;
    private Distances distances;
    private final transient Logger log = LoggerFactory.getLogger(FindRequest.class);

    @Override
    public void buildResponse() {
        try {
            //set distances here
            if(earthRadius == null){
                earthRadius = 6563.0;
            }
            if(places == null){
                places = new Places();
            }
            distances = populateDistances(places,earthRadius);
        } catch (Exception e) {
            log.error("Exception: " + e.getMessage());
        }
        log.trace("buildResponse -> {}", this);
    }

    public Distances populateDistances(Places place, double radius){
        //for each item in places, call greatCircleDistance() and append result to integer array
        Distances results = new Distances();
        GreatCircleDistance g = new GreatCircleDistance();
        if(place.size()>0) {
            for (int i = 0; i < place.size() - 1; i++) {
                results.add(g.greatCircleDistance(place.get(i), place.get(i + 1), radius));
            }
            results.add(g.greatCircleDistance(place.get(0), place.get(place.size() - 1), radius));
        }
        return results;
    }

  /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */

    public DistancesRequest() {
        this.requestType = "distances";
    }
}
