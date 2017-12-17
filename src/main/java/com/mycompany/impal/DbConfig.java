/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.model.Lokasi;
import static java.rmi.server.LogStream.log;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class DbConfig {

    static Connection conn = null;
    static Statement stat = null;
    private String query;

    public void connection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
//            log("Congrats Connection Succeed");
            System.out.println("Congrats Connection Succeed");
        } catch (ClassNotFoundException e) {
//            log("Sorry, couldn't found JDBC driver. Make sure you have added JDBC Maven Dependency Correctly");
            System.out.println("Sorry, couldn't found JDBC driver. Make sure you have added JDBC Maven Dependency Correctly");
            e.printStackTrace();
            return;
        }

        try {
            // DriverManager: The basic service for managing a set of JDBC drivers.
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/impalparkir", "root", "");
            stat = conn.createStatement();
            if (conn != null) {
//                log("Connection Successful! Enjoy. Now it's time to push data");
                System.out.println("Connection Successful! Enjoy. Now it's time to push data");
            } else {
//                log("Failed to make connection!");
                System.out.println("Failed to make connection!");
            }
        } catch (SQLException e) {
//            log("MySQL Connection Failed!");
            System.out.println("MySQL Connection Failed!");
            e.printStackTrace();
            return;
        }

    }

    public boolean cobaInput(String email, String nama, String ktp, String pass) {
        try {
            query = "insert into login(email,password) values"
                    + "('" + email + "', "
                    + "'" + pass + "')";
            stat.execute(query);

            query = "insert into pengendara(email,nama,no_ktp,password) values"
                    + "('" + email + "', "
                    + "'" + nama + "', "
                    + "'" + ktp + "', "
                    + "'" + pass + "')";

            return stat.execute(query);
        } catch (SQLException e) {
            JOptionPane.showConfirmDialog(null, e.getMessage(), "Server Unconnected", JOptionPane.OK_OPTION);
            e.printStackTrace();
        }
        return false;
    }

    public String cariAkun(String email, String pass) {
        query = "select * from login where email= '" + email + "' and password='" + pass + "'";
        String email1 = null, pass1 = null, prio = null;
        try {
            ResultSet rs = stat.executeQuery(query);
            if (rs.next()) {
                email1 = rs.getString("email");
                pass1 = rs.getString("password");
                prio = rs.getString("priority");
            }

        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, ex.getMessage());
        }
        if (!email1.equals("") && !pass1.equals("")) {
            return prio;
        }
        return null;
    }

    public void inputSpotLokasi(int nomor, char sektor, int lantai, String kategori) {
        try {
            
            query = "INSERT INTO spotparkir (nomor, sektor, lantai, kategori, status) values"
                                    + "('" + nomor + "', "
                                    + "'" + sektor + "', "
                                    + "'" + lantai + "', "
                                    + "'" + kategori + "', "
                                    + "'0')";

                            stat.execute(query);
            /*
            char[] sector = {'A', 'B'};
            String[] kat = {"mobil", "motor"};

            for (int k = 1; k <= 2; k++) {
                for (int h = 0; h < kat.length; h++) {
                    for (int j = 0; j < sector.length; j++) {
                        for (int i = 1; i <= 3; i++) {
                            query = "INSERT INTO spotparkir (nomor, sektor, lantai, kategori, status) values"
                                    + "('" + i + "', "
                                    + "'" + sector[j] + "', "
                                    + "'" + k + "', "
                                    + "'" + kat[h] + "', "
                                    + "'0')";

                            stat.execute(query);
                        }
                    }
                }
            }
                */
            
        } catch (SQLException e) {
            JOptionPane.showConfirmDialog(null, e.getMessage(), "Server Unconnected", JOptionPane.OK_OPTION);
            e.printStackTrace();
        }
    }

    public ArrayList<Lokasi> getAllLocation() {
            ArrayList<Lokasi> loc = new ArrayList();
        try {
            String query = "select * from spotparkir order by kategori";
            ResultSet result = stat.executeQuery(query);
            while (result.next()) {
                loc.add(new Lokasi(result.getInt("id_spot"),
                        result.getInt("lantai")+result.getString("sektor")+result.getInt("nomor"),
                        result.getString("kategori")
                ));
            }
            return loc;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return loc;
    }
    
    
}
