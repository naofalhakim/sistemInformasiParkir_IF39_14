/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.model.Lokasi;
import com.mycompany.impal.model.Transaksi;
import static java.rmi.server.LogStream.log;
import java.sql.Connection;
import java.sql.DriverManager;
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

    private Connection conn = null;
    private Statement stat = null;
    private String query;
    private ResultSet rs;

    public void connection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            log("Congrats Connection Succeed");
        } catch (ClassNotFoundException e) {
            log("Sorry, couldn't found JDBC driver. Make sure you have added JDBC Maven Dependency Correctly");
            return;
        }
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/impalparkir", "root", "");
            stat = conn.createStatement();
        } catch (SQLException e) {
            log("MySQL Connection Failed!");
            return;
        }

    }

    public boolean cobaInput(String email, String nama, String ktp, String pass) {
        try {
            query = "insert into login(email,priority,password) values"
                    + "('" + email + "',"
                    + "'user',"
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
        }
        return false;
    }

    public String cariAkun(String email, String pass) {
        query = "select * from login where email= '" + email + "' and password='" + pass + "'";
        String email1 = null, pass1 = null, prio = null;
        try {
            rs = stat.executeQuery(query);
            if (rs.next()) {
                email1 = rs.getString("email");
                pass1 = rs.getString("password");
                prio = rs.getString("priority");
            }

        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, ex.getMessage());
        }
        if (email1 != null && pass1 != null) {
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

        } catch (SQLException e) {
            JOptionPane.showConfirmDialog(null, e.getMessage(), "Server Unconnected", JOptionPane.OK_OPTION);
        }
    }

    public ArrayList<Lokasi> getAllLocation() {
        ArrayList<Lokasi> loc = new ArrayList();
        query = "select * from spotparkir order by kategori";
        try {
            rs = stat.executeQuery(query);
            while (rs.next()) {
                loc.add(new Lokasi(rs.getInt("id_spot"),
                        rs.getInt("lantai") + rs.getString("sektor") + rs.getInt("nomor"),
                        rs.getString("kategori")
                ));
            }
            return loc;
        } catch (Exception e) {
            log(e.getMessage());
        }
        return loc;
    }

    public int searchLocation(int lantai, int nomor, String sector, String kategori) {
        query = "select id_spot from spotparkir where lantai='" + lantai + "' && nomor='" + nomor + "' && sektor='" + sector + "' && kategori = '" + kategori + "'";
        try {
            rs = stat.executeQuery(query);
            while (rs.next()) {
                return rs.getInt("id_spot");
            }
        } catch (SQLException ex) {
            Logger.getLogger(DbConfig.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    void bookLocation(int idLokasi, String tanggal, String idPengendara) {
        query = "INSERT INTO pesanspot (email, id_spot, tanggal_pesan, tanggal_dipakai) values"
                + "('" + idPengendara + "', "
                + "'" + idLokasi + "', "
                + "CURRENT_DATE, "
                + "'" + tanggal + "')";

        try {
            stat.execute(query);
            JOptionPane.showMessageDialog(null, "Pesan Lokasi Sukses");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, ex.getMessage());
            Logger.getLogger(DbConfig.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    void addTransaksiParkir(String txtNomorPlat, int idLokasi, String idPengendara) {
        query = "INSERT INTO transaksiparkir (email, id_spot, tanggal_parkir,waktu_masuk,status, nomor_kendaraan) values"
                + "('" + idPengendara + "', "
                + "'" + idLokasi + "', "
                + "CURRENT_DATE, "
                + "CURRENT_TIME, "
                + "0, "
                + "'" + txtNomorPlat + "')";
        try {
            stat.execute(query);
            JOptionPane.showMessageDialog(null, "Anda Berhasil Cek In Parkir");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, ex.getMessage());
            Logger.getLogger(DbConfig.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public ArrayList<Transaksi> getAllRekap(String email) {
        ArrayList<Transaksi> transaksi = new ArrayList();
        try {
            query = "select * from spotparkir , transaksiparkir where transaksiparkir.email='" + email + "' && transaksiparkir.id_spot = spotparkir.id_spot";
            rs = stat.executeQuery(query);
            while (rs.next()) {
                transaksi.add(new Transaksi(rs.getInt("id_parkir"),
                        rs.getString("lantai") + rs.getString("sektor") + rs.getString("nomor"),
                        rs.getInt("harga"),
                        rs.getString("email"),
                        rs.getString("nomor_kendaraan"),
                        rs.getString("tanggal_parkir"),
                        rs.getString("waktu_masuk"),
                        rs.getString("wakt_keluar")
                ));
            }
            return transaksi;
        } catch (Exception e) {
            log(e.getMessage());

        }
        return transaksi;
    }
}
