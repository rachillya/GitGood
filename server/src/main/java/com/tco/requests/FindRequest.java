package com.tco.requests;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FindRequest extends Request {

    private Integer limit;
    private String match;
    private Places places;
    private Integer found;
    private final transient Logger log = LoggerFactory.getLogger(FindRequest.class);
    private ArrayList<String> features;

    @Override
    public void buildResponse() {
        found = 0;
        try {
            Credential db = new Credential();
            String countSql = Select.count(match);
            String sql = Select.match(match, limit);
            found = Database.getPlacesCount(countSql,db,match);
            places = Database.query(sql, db, match);
        } catch (Exception e) {
            log.error("Exception: " + e.getMessage());
        }
        log.trace("buildResponse -> {}", this);
    }

  /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */

    public FindRequest() {
        this.requestType = "find";
    }

    public int queryFound() {
        return 1;
    }

    public Places queryMatch() {
        places = new Places();
        places.add(samplePlace("COne", "41", "-102"));
        places.add(samplePlace("COse", "37", "-102"));
        places.add(samplePlace("COnw", "41", "-109"));
        places.add(samplePlace("COsw", "37", "-109"));
        return places;
    }

    public Place samplePlace(String name, String latitude, String longitude){
        Place place = new Place();
        place.put("name", name);
        place.put("latitude", latitude);
        place.put("longitude", longitude);
        return place;
    }

}