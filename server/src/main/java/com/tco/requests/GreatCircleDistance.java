package com.tco.requests;

public class GreatCircleDistance {
    public long greatCircleDistance(Place place1, Place place2, double radius){
        //calculate great circle distance for given places as an integer
        double lat1 = Math.toRadians(Double.parseDouble(place1.get("latitude")));
        double lat2 = Math.toRadians(Double.parseDouble(place2.get("latitude")));
        double lon1 = Math.toRadians(Double.parseDouble(place1.get("longitude")));
        double lon2 = Math.toRadians(Double.parseDouble(place2.get("longitude")));
        double lonAvg = Math.abs(lon1-lon2); //math.abs

        double distance = radius * calcAngle(lat1,lat2,lonAvg);
        return Math.round(distance);
    }

    private double calcAngle(double lat1, double lat2, double lonAvg){
        double numerator = calcNumerator(lat1,lat2,lonAvg);
        double denominator = calcDenominator(lat1,lat2,lonAvg);
        double angle = Math.atan2(numerator,denominator);
        return angle;
    }
    private double calcNumerator(double lat1, double lat2, double lonAvg){
        double addPt1 = Math.pow(Math.cos(lat2) * Math.sin(lonAvg),2);
        double numPt1 = Math.cos(lat1) * Math.sin(lat2);
        double numPt2 = Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonAvg);
        double addPt2 = Math.pow( numPt1 - numPt2,2);
        double numerator = Math.sqrt(addPt1 + addPt2);
        return numerator;
    }

    private double calcDenominator(double lat1, double lat2, double lonAvg){
        double addPt1 = Math.sin(lat1) * Math.sin(lat2);
        double addPt2 = Math.cos(lat1) * Math.cos(lat2) * Math.cos(lonAvg);
        double denominator = addPt1 + addPt2;
        return denominator;
    }
}
