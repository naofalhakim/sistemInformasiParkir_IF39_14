/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.model;

/**
 *
 * @author FERRY
 */
public class Lokasi {

    private String idLokasi;
    private String namaLokasi;
    private boolean statusLokasi;

    public Lokasi(String idLokasi, String namaLokasi, boolean statusLokasi) {
        this.idLokasi = idLokasi;
        this.namaLokasi = namaLokasi;
        this.statusLokasi = statusLokasi;
    }

    public Lokasi() {
    }

    public String getIdLokasi() {
        return idLokasi;
    }

    public void setIdLokasi(String idLokasi) {
        this.idLokasi = idLokasi;
    }

    public String getNamaLokasi() {
        return namaLokasi;
    }

    public void setNamaLokasi(String namaLokasi) {
        this.namaLokasi = namaLokasi;
    }

    public boolean isStatusLokasi() {
        return statusLokasi;
    }

    public void setStatusLokasi(boolean statusLokasi) {
        this.statusLokasi = statusLokasi;
    }

}
