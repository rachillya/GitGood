package com.tco.requests.ShorterTrip;

import com.tco.requests.GreatCircleDistance;
import com.tco.requests.Place;

public class Opt2 {
    public Tour opt2(Tour route){
        boolean improvement = true;
        while(improvement){
            improvement = false;
            improvement = getFirstEndpoint(route, improvement);
        }
        return route;
    }

    public boolean getFirstEndpoint(Tour route, boolean improvement) {
        for(int i = 0; i <= route.size()-3 ; i++){
            improvement = getSecondEndpoint(route, i, improvement);
        }
        return improvement;
    }

    public boolean getSecondEndpoint(Tour route, int i, boolean improvement){
        for(int k = i+2; k < route.size()-1; k++){
            improvement = trySwappingSections(route, i, k, improvement);
        }
        return improvement;
    }

    public boolean trySwappingSections(Tour route, int i, int k, boolean improvement){
        if(opt2Improves(route, i, k)){
            opt2Reverse(route, i+1, k);
            improvement = true;
        }
        return improvement;
    }

    public boolean opt2Improves(Tour route, int i, int k){
        // is new leg distance less than current leg distance
        double d1 = legdis(route,i,k);
        double d2 = legdis(route,i+1,k+1);
        double d3 = legdis(route,i,i+1);
        double d4 = legdis(route,k,k+1);

        return d1 + d2 < d3 + d4;
    }

    private Tour opt2Reverse(Tour route, int i1, int k) {
        // reverse in place
        while(i1 < k) {
            int temp = route.getValue(i1);
            int kValue = route.getValue(k);
            route.setValue(i1, kValue);
            route.setValue(k, temp);
            i1++;
            k--;
        }
        return route;
    }

    private double legdis(Tour route, int i, int k){
        Place place1 = route.getPlace(i);
        Place place2 = route.getPlace(k);
        GreatCircleDistance g = new GreatCircleDistance();
        return g.greatCircleDistance(place1, place2, route.radius);
    }
}
