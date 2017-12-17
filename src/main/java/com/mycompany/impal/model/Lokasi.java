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

    private int idLokasi;
    private String namaLokasi;
    private boolean statusLokasi;
    private String kategori;

    public Lokasi(int idLokasi, String namaLokasi, String kategori) {
        this.idLokasi = idLokasi;
        this.namaLokasi = namaLokasi;
        this.kategori = kategori;
    }

    public Lokasi() {
    }

    public String getKategori() {
        return kategori;
    }

    public void setKategori(String kategori) {
        this.kategori = kategori;
    }

    public int getIdLokasi() {
        return idLokasi;
    }

    public void setIdLokasi(int idLokasi) {
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
