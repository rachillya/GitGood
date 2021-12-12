package com.tco.requests;

public class Select {
    static String match(String column, int limit) {
        String lim = " LIMIT " + Integer.toString(limit);
        if(limit == 0){ lim = " LIMIT 0,100"; }
        if(column.equals("")){
            return "SELECT "
                    + "DISTINCT "
                    + "NAME '" + column
                    + "', MUNICIPALITY, LATITUDE, LONGITUDE, ID, ALTITUDE, TYPE FROM world WHERE NAME LIKE '%"
                    + column + "%' OR MUNICIPALITY LIKE '%" + column + "%' OR ID IN ('" + column + "') ORDER BY RAND()"
                    + lim + ";";
        }
        return "SELECT "
                + "DISTINCT "
                + "world.name '" + column
                + "', world.municipality, world.latitude, world.longitude, world.id, world.altitude "
                + "FROM world INNER JOIN region ON world.iso_region = region.id INNER JOIN country "
                + "ON world.iso_country = country.id WHERE world.name LIKE '%"
                + column + "%' OR world.municipality LIKE '%" + column
                + "%' OR region.name LIKE '%" + column
                + "%' OR country.name LIKE '%" + column
                + "%' OR world.id LIKE '" + column + "'"
                + lim + ";";
    }

    static String count(String column) {
        return "SELECT COUNT(*) FROM world INNER JOIN region ON world.iso_region = region.id INNER JOIN country"
                + " ON world.iso_country = country.id WHERE world.name LIKE '%"
                + column + "%' OR world.municipality LIKE '%" + column
                + "%' OR region.name LIKE '%" + column
                + "%' OR country.name LIKE '%" + column
                + "%' OR world.id LIKE '" + column + "';";
    }
}
