package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestSelect {

    private Select sel;

    @BeforeEach
    public void createConfigurationForTestCases() {
        sel = new Select();
    }

    @Test
    @DisplayName("Tests Select.java with a limit 0")
    public void testLimitZero() {
        String match = "pappy";
        int limit = 0;
        String expected = "SELECT DISTINCT world.name 'pappy', world.municipality, world.latitude, world.longitude, world.id, world.altitude "
            + "FROM world INNER JOIN region ON world.iso_region = region.id INNER JOIN country "
            + "ON world.iso_country = country.id WHERE world.name LIKE '%pappy%' OR world.municipality LIKE '%pappy%' OR region.name LIKE '%pappy%' "
            + "OR country.name LIKE '%pappy%' OR world.id LIKE 'pappy' LIMIT 0,100;";
        assertEquals(expected, sel.match(match,limit));
    }

    @Test
    @DisplayName("Tests Select.java with an empty string")
    public void testSelectEmpty() {
        String match = "";
        int limit = 10;
        String expected = "SELECT DISTINCT NAME '', MUNICIPALITY, LATITUDE, LONGITUDE, ID, ALTITUDE, "
                + "TYPE FROM world WHERE NAME LIKE '%%' OR MUNICIPALITY LIKE '%%' OR ID IN ('') ORDER BY RAND() LIMIT 10;";
        assertEquals(expected, sel.match(match,limit));
    }

    @Test
    @DisplayName("Tests Select.java with a non-empty string")
    public void testSelectNonEmpty() {
        String match = "pappy";
        int limit = 10;
        String expected = "SELECT DISTINCT world.name 'pappy', world.municipality, world.latitude, world.longitude, world.id, world.altitude "
            + "FROM world INNER JOIN region ON world.iso_region = region.id INNER JOIN country "
            + "ON world.iso_country = country.id WHERE world.name LIKE '%pappy%' OR world.municipality LIKE '%pappy%' OR region.name LIKE "
            + "'%pappy%' OR country.name LIKE '%pappy%' OR world.id LIKE 'pappy' LIMIT 10;";
        assertEquals(expected, sel.match(match,limit));
    }

    @Test
    @DisplayName("Tests Select.java with an empty string and no limit")
    public void testSelectEmptyLimZero() {
        String match = "";
        int limit = 0;
        String expected = "SELECT DISTINCT NAME '', MUNICIPALITY, LATITUDE, LONGITUDE, ID, ALTITUDE, "
                + "TYPE FROM world WHERE NAME LIKE '%%' OR MUNICIPALITY LIKE '%%' OR ID IN ('') ORDER BY RAND() LIMIT 0,100;";
        assertEquals(expected, sel.match(match,limit));
    }

}
