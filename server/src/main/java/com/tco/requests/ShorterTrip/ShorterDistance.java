package com.tco.requests.ShorterTrip;

public class ShorterDistance {
    private long[][] distances;
    private int rows;
    private int cols;

    public ShorterDistance(long[][] distances){
        this.distances = distances;
    }

    public ShorterDistance(int rows, int cols){
        distances = new long[rows][cols];
    }

    public long[][] getDistances() {
        return distances;
    }

    public void setDistances(long[][] distances) {
        this.distances = distances;
    }

    public long getValAtIndex(int row, int col){
        return distances[row][col];
    }

    public int getLength(){
        return distances.length;
    }


    public boolean setValAtIndex(int row, int col, long val){
        if(row < distances.length && col < distances[row].length){
            distances[row][col] = val;
            return true;
        }
        else{
            return false;
        }
    }

}
