/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.model.Pengendara;
import java.awt.List;
import javax.swing.JTable;
import javax.swing.JTextField;

/**
 *
 * @author naofal
 */
public class ApplicationModel {

    private DbConfig dbConfig;
    private List listPengendara;
    static String idPengendara;

    public ApplicationModel() {
        dbConfig = new DbConfig();
        dbConfig.connection();
    }

    public boolean inputPengendara(String nama, String email, String noKtp, String pass) {
        return dbConfig.cobaInput(email, nama, noKtp, pass);
    }

    public String cekLogin(String email, String pass) {
        return dbConfig.cariAkun(email, pass);
    }

    public void inputSpot(int nomor, char sektor, int lantai, String kategori) {
        dbConfig.inputSpotLokasi(nomor, sektor, lantai, kategori);
    }

    public void setTableLokasi(JTable tblLokasiParkir) {
        String status;
        tblLokasiParkir.setRowHeight(dbConfig.getAllLocation().size()+1);
        
        for (int i = 0; i < dbConfig.getAllLocation().size(); i++) {
            tblLokasiParkir.setValueAt(dbConfig.getAllLocation().get(i).getIdLokasi(), i, 0);
            tblLokasiParkir.setValueAt(dbConfig.getAllLocation().get(i).getNamaLokasi(), i, 1);
            tblLokasiParkir.setValueAt(dbConfig.getAllLocation().get(i).getKategori(), i, 2);   
        }
    }

    public int cariLokasi(int lantai, int nomor, String sector, String kategori) {
        return dbConfig.searchLocation(lantai, nomor, sector, kategori);
    }

    public void pesanLokasi(int idLokasi, String tanggal, String idPengendara) {
        dbConfig.bookLocation(idLokasi, tanggal, idPengendara);
    }

    void inputTransaksiParkir(String txtNomorPlat, int idLokasi, String idPengendara) {
       dbConfig.addTransaksiParkir(txtNomorPlat,idLokasi,idPengendara);
    }
}
