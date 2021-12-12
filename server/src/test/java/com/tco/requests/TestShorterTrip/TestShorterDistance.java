package com.tco.requests.TestShorterTrip;

import com.tco.requests.Distances;
import com.tco.requests.ShorterTrip.ShorterDistance;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestShorterDistance {

    ShorterDistance test1;
    ShorterDistance shorter;
    long[][] test2;

    @BeforeEach
    public void createConfigurationForTestCases() {
        shorter = new ShorterDistance(5,5);
        test2 = new long[1][1];
        test2[0][0] = 1;
    }

    @Test
    @DisplayName("Test one arg constructor using getValAtIndex")
    public void testOneConstructor() {
        ShorterDistance test1 = new ShorterDistance(test2);
        assertTrue(test1.getValAtIndex(0,0)==1);
    }

    @Test
    @DisplayName("Test two arg constructor using getLength")
    public void testTwoConstructor() {
        ShorterDistance test1 = new ShorterDistance(1,1);
        assertTrue(test1.getLength()==1);
    }

    @Test
    @DisplayName("Test setValAtIndex")
    public void testSetValConstructor() {
        ShorterDistance test1 = new ShorterDistance(1,1);
        test1.setValAtIndex(0,0,1);
        assertTrue(test1.getValAtIndex(0,0)==1);
    }

    @Test
    @DisplayName("Test setDistances")
    public void testSetDistances() {
        test1 = new ShorterDistance(5,5);
        test1.setDistances(test2);
        assertTrue(test1.getLength()==1);
    }

    @Test
    @DisplayName("Test getDistances")
    public void testGetDistances() {
        ShorterDistance test1 = new ShorterDistance(1,1);
        assertTrue(test1.getDistances()!=null);
    }
}
