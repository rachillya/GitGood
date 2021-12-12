package com.tco.requests.TestShorterTrip;

import com.tco.requests.ShorterTrip.Visited;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestVisited {
    
    Visited visitedArr;
    Visited testArr;
    boolean [] boolArr;

    @BeforeEach
    public void createConfigurationForTestCases() {
        visitedArr = new Visited(5);
        boolArr = new boolean[5];
        boolArr[0] = true;
        testArr = new Visited(5);
    }

    @Test
    @DisplayName("Test size constructor")
    public void testSizeConstructor() {
        visitedArr = new Visited(10);
        assertTrue(visitedArr.getLength() == 10);
    }

    @Test
    @DisplayName("Test array constructor")
    public void testArrConstructor() {
        visitedArr = new Visited(boolArr);
        assertTrue(visitedArr.getValAtIndex(0) == true);
    }

    @Test
    @DisplayName("Test setValAtIndex")
    public void testSetValAtIndex() {
        visitedArr.setValAtIndex(2, true);
        assertTrue(visitedArr.getValAtIndex(2) == true);
    }

    @Test
    @DisplayName("Test getLength")
    public void testGetLength() {
        visitedArr = new Visited(12);
        assertTrue(visitedArr.getLength() == 12);
    }

    @Test
    @DisplayName("Test getUnvisited")
    public void testGetUnvisited() {
        visitedArr.setValAtIndex(3, true);
        testArr.setUnvisited(visitedArr.getUnvisited());
        assertTrue(testArr.getValAtIndex(3) == true);
    }

}
