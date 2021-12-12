package com.tco.requests.ShorterTrip;

public class Visited {
    private boolean[] unvisitedLocations;
    private int index;

    public Visited(boolean[] unvisited){
        this.unvisitedLocations = unvisited;
    }

    public Visited(int size){
        unvisitedLocations = new boolean[size];
    }

    public boolean[] getUnvisited(){
        return unvisitedLocations;
    }

    public void setUnvisited(boolean[] unvisited){
        this.unvisitedLocations = unvisited;
    }

    public boolean getValAtIndex(int index){
        return unvisitedLocations[index];
    }

    public int getLength(){
        return unvisitedLocations.length;
    }

    public boolean setValAtIndex(int index, boolean val){
        if(index < unvisitedLocations.length){
            unvisitedLocations[index] = val;
            return true;
        }
        return false;
    }

}
