package com.tco.requests;

import java.sql.*;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

public class Database {
  
  private static String COLUMN;
  
  static Places query(String sql, Credential db, String match) throws Exception {
   COLUMN = match;

    try (
        // connect to the database and query
        Connection conn = DriverManager.getConnection(db.url(), db.USER, db.PASSWORD);
        Statement query = conn.createStatement();
        ResultSet results = query.executeQuery(sql)
    ) {
      return convertQueryResultsToPlaces(results);
    } catch (Exception e) {
      throw e;
    }
  }
  static Places convertQueryResultsToPlaces(ResultSet results) throws Exception {
      int count = 0;
      Places places = new Places();
      while (results.next()) {
        Place place = new Place();
        place.put("name", results.getString(COLUMN));
        place.put("index", String.format("%d",++count));
        place.put("municipality", results.getString("Municipality"));
        place.put("latitude", results.getString("Latitude"));
        place.put("longitude", results.getString("Longitude"));
        place.put("id", results.getString("ID"));
        place.put("altitude", results.getString("Altitude"));
        places.add(place);
      }
      return places;
   }

   static int getPlacesCount(String sql, Credential db, String match) throws Exception {
       COLUMN = match;
       int count = 0;

       try (
               // connect to the database and query
               Connection conn = DriverManager.getConnection(db.url(), db.USER, db.PASSWORD);
               Statement query = conn.createStatement();
               ResultSet result = query.executeQuery(sql)
       ) {
           result.next();
           count = result.getInt(1);
       } catch (Exception e) {
           throw e;
       }
       return count;
   }
}
