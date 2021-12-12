package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestFindRequest {

    private FindRequest findReq;

    @BeforeEach
    public void createConfigurationForTestCases() {
        findReq = new FindRequest();
        findReq.buildResponse();
    }

    @Test
    @DisplayName("Request type is \"find\"")
    public void testType() {
        String type = findReq.getRequestType();
        assertEquals("find", type);
    }

    @Test
    @DisplayName("Test queryFound is 1")
    public void testQueryFound() {
        assertEquals(1, findReq.queryFound());
    }

    @Test
    @DisplayName("Test queryMatch has correct inputs")
    public void testQueryMatch() {
        Places places = new Places();
        places.add(findReq.samplePlace("COne", "41", "-102"));
        places.add(findReq.samplePlace("COse", "37", "-102"));
        places.add(findReq.samplePlace("COnw", "41", "-109"));
        places.add(findReq.samplePlace("COsw", "37", "-109"));
        assertEquals(places, findReq.queryMatch());
    }

}
