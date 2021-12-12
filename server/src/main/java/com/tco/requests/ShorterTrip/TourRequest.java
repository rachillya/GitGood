package com.tco.requests.ShorterTrip;

import com.tco.requests.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TourRequest extends Request {

    private Double earthRadius;
    private Double response;
    private Places places;
    private final transient Logger log = LoggerFactory.getLogger(FindRequest.class);

    @Override
    public void buildResponse() {
        try {
            if(response !=0 && places.size()>3 && places.size()<(response*400)){
                double newResponse = System.nanoTime() + (response * 1E9) - 5000;
                Tour optimized = timingDecision(places,earthRadius,newResponse);
                if(optimized.size()==places.size()){
                    places = optimized.convertTourToPlaces(); //5000
                }
            }

        } catch (Exception e) {
            log.error("Exception: " + e.getMessage());
        }
        log.trace("buildResponse -> {}", this);
    }

    public ShorterDistance makeDistances(Places places, double earthRadius){
        int size = places.size();
        ShorterDistance distances = new ShorterDistance(size,size);
        GreatCircleDistance greatCircleDistance = new GreatCircleDistance();
        for(int i = 0; i < size; i++){
            for(int j = 0; j < size; j++){
                distances.setValAtIndex(i,j,greatCircleDistance.greatCircleDistance(places.get(i), places.get(j), earthRadius));
            }
        }
        return distances;
    }

//    public Tour timingDecision(Places places, Double earthRadius, Double response){
//        Tour finalTour;
//        int cutoff2 = (int) (response * 800);
//        int cutoff = (int) (response * 120);
//        if(places.size()<= cutoff){
//            finalTour = optimizeTrip(places,earthRadius);
//        }
//        else if(places.size() <= cutoff2){
//            finalTour = nearestNeighbor(places,earthRadius,0);
//        }
//        else {
//            //return a tour with no changes to places
//            finalTour = buildTour(places, earthRadius);
//        }
//        return finalTour;
//    }

    public Tour timingDecision(Places places, Double earthRadius, Double response){
        Tour finalTour;
        finalTour = optimizeTrip(places,earthRadius,response); //response
//        if(System.nanoTime()<response){
//            //opt2
//        }
        return finalTour;
    }

    public Tour buildTour(Places places, Double earthRadius){
       Tour tour = new Tour(places,earthRadius);
        for(int i = 0; i < places.size(); i++){
            tour.append(i);
        }
        return tour;
    }

    public Tour optimizeTrip(Places places, Double earthRadius, double response){
        Tour[] tours = new Tour[places.size()];
        long tourDistance = -1;
        int tourIndex = -1;
        for(int i=0; i<places.size(); i++){
            tours[i] = nearestNeighbor(places,earthRadius,i,response);
            if(tours[i].size()==places.size()){
                if(tourDistance>tours[i].getTotalDistance() || tourDistance == -1){
                    tourDistance = tours[i].getTotalDistance();
                    tourIndex = i;
                }
            }
            if(isTimeLeft(response)){
                break;
            }
        }
        return tours[tourIndex];
    }


    public Tour nearestNeighbor(Places places, Double earthRadius, int startIndex,double response){
        //for each starting city (as time permits)
        Tour tour = new Tour(places, earthRadius);
        long tourTotalDistance = 0;
        Visited visited = new Visited(places.size());
        ShorterDistance distance = makeDistances(places,earthRadius);
        long[] values = {startIndex,tourTotalDistance};
        nearestNeighborHelper(response,values, tour,visited,distance);
        return tour;
    }

    private Tour nearestNeighborHelper(double response, long[] vals, Tour tour, Visited visited, ShorterDistance distance){
        int numVisited = 0;
        int startIndex = (int)vals[0];
        long tourTotalDistance = vals[1];
        tour.append(startIndex);
        visited.setValAtIndex(startIndex,true);
        numVisited+=1;
        while(numVisited != visited.getLength()){
            int currentLocation = tour.getValue(tour.getNextAvailableElement()-1);
            int nearestIndex = traversePlaces(visited,currentLocation,distance);
            tourTotalDistance += distance.getValAtIndex(currentLocation,nearestIndex);
            tour.append(nearestIndex);
            visited.setValAtIndex(nearestIndex,true);
            numVisited += 1;
            if(!isTimeLeft(response)){break;}
        }
        return tour;
    }

    public int traversePlaces(Visited visited, int currIndex, ShorterDistance distance){
        int shortestPlace = findShortestInd(visited,0);
        long [] currentRow = distance.getDistances()[currIndex];
        for(int i =0; i<currentRow.length; i++){
            if(currentRow[i]<currentRow[shortestPlace] && currentRow[i]!=0 && !visited.getValAtIndex(i)){
                    shortestPlace = i;
            }
        }
        return shortestPlace;
    }

    public int findShortestInd(Visited visited, int index){
        while(visited.getValAtIndex(index)){
            index++;
        }
        return index;
    }

    public boolean isTimeLeft(double response){
        return System.nanoTime()<response;
    }


  /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */

    public TourRequest() {
        this.requestType = "tour";
    }
}
