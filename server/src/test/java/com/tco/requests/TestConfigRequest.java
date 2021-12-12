package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestConfigRequest {

    private ConfigRequest conf;

    @BeforeEach
    public void createConfigurationForTestCases() {
        conf = new ConfigRequest();
        conf.buildResponse();
    }

    @Test
    @DisplayName("Request type is \"config\"")
    public void testType() {
        String type = conf.getRequestType();
        assertEquals("config", type);
    }

    @Test
    @DisplayName("Features includes \"config\"")
    public void testConfigFeature(){
        assertTrue(conf.validFeature("config"));
    }

    @Test
    @DisplayName("Features includes \"find\"")
    public void testFindFeature(){
        assertTrue(conf.validFeature("find"));
    }

    @Test
    @DisplayName("Features includes \"distances\"")
    public void testDistancesFeature(){
        assertTrue(conf.validFeature("distances"));
    }

    @Test
    @DisplayName("Features includes \"tour\"")
    public void testTourFeature(){
        assertTrue(conf.validFeature("tour"));
    }

    @Test
    @DisplayName("Team name is correct")
    public void testServerName() {
        String name = conf.getServerName();
        assertEquals("t02 Git Good", name);
    }
}
