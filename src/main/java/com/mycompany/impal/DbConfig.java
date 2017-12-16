/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import static java.rmi.server.LogStream.log;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class DbConfig {

    static Connection conn = null;
    static Statement stat = null;

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

    public void cobaInput(String email, String nama, String ktp, String pass) {
        try {
            String query1 = "insert into pengendara(email,nama,no_ktp,password) values"
                    + "('" + email + "', "
                    + "'" + nama + "', "
                    + "'" + ktp + "', "
                    + "'" + pass + "')";
            
            stat.execute(query1);
            JOptionPane.showMessageDialog(null, "Register Berhasil");
        } catch (SQLException e) {
            JOptionPane.showConfirmDialog(null, "Register Gagal", "Server Unconnected", JOptionPane.OK_OPTION);
            e.printStackTrace();
        }
    }
}
