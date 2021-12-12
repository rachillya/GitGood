package com.tco.requests.ShorterTrip;

import com.tco.requests.Places;
import com.tco.requests.Place;

public class Tour {

    private int[] tour;
    private int nextAvailableTourElement = 0;
    private Places places;
    double radius;
    long totalDistance=0;


    public Tour(Places places, double earthRadius) {
        this.places = places;
        tour = new int[places.size()];
        radius = earthRadius;
    }

    public int size() {
        return tour.length;
    }

    public int getValue(int tourIndex) {
        return tour[tourIndex];
    }

    public void setValue(int index, int value) {
        tour[index] = value;
    }

    public void append(int value) {
        // adds placeIndex in next avaialble index in tour
        int tourIndex = nextAvailableTourElement;
        tour[tourIndex] = value;
        nextAvailableTourElement += 1;
    }

    public int[] getTour() {
        int[] copy = new int[tour.length];
        for(int i = 0;i < copy.length; i++){
            copy[i] = getValue(i);
        }
        return copy;
    }

    public void setTotalDistance(long totalDistance){
        this.totalDistance = totalDistance;
    }

    public long getTotalDistance(){
        return totalDistance;
    }

    public Place getPlace(int tourIndex){
        return places.get(getValue(tourIndex));
    }

    public double getRadius(){
        return radius;
    }

    public int getNextAvailableElement() {
        return nextAvailableTourElement;
    }

    public Places convertTourToPlaces() {
        Places newPlaces = new Places();
        for(int i = 0; i < tour.length; i++){
            newPlaces.add(places.get(getValue(i)));
        }
        return newPlaces;
    }

    //  To find the index of a specific place
    public static int getIndexOfValue(String value, Places places) {
        for (int i =0; i < places.size(); i++) {
            if (places.get(i).containsValue(value)) {
                return i;
            }
        }
        return -1;
    }
}
