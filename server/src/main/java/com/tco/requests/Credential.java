package com.tco.requests;

public class Credential {
    final static String useTunnel = System.getenv("CS314_USE_DATABASE_TUNNEL");
    // shared user with read-only access
    final static String USER = "cs314-db";
    final static String PASSWORD = "eiK5liet1uej";
    static String URL = "";
    
    static String url() {
        if(useTunnel != null && useTunnel.equals("true")) {
            // When using locally (by Port Forwarding)
            URL = "jdbc:mariadb://127.0.0.1:56247/cs314";
        } else {
            // Else, we must be running against the production database directly
            URL = "jdbc:mariadb://faure.cs.colostate.edu/cs314";
        }
        return URL;
    }
}
