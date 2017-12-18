/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.model;

/**
 *
 * @author naofal
 */
public class Transaksi {

    private int id, harga, status;
    private String lokasi, email, nomor_kendaraan, tanggal_parkir, waktu_masuk, waktu_keluar;

    public Transaksi(int id, String id_spot, int harga, String email, String nomor_kendaraan, String tanggal_parkir, String waktu_masuk, String waktu_keluar) {
        this.id = id;
        this.lokasi = id_spot;
        this.harga = harga;
        this.email = email;
        this.nomor_kendaraan = nomor_kendaraan;
        this.tanggal_parkir = tanggal_parkir;
        this.waktu_masuk = waktu_masuk;
        this.waktu_keluar = waktu_keluar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLokasi() {
        return lokasi;
    }

    public void setLokasi(String lokasi) {
        this.lokasi = lokasi;
    }

    public int getHarga() {
        return harga;
    }

    public void setHarga(int harga) {
        this.harga = harga;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNomor_kendaraan() {
        return nomor_kendaraan;
    }

    public void setNomor_kendaraan(String nomor_kendaraan) {
        this.nomor_kendaraan = nomor_kendaraan;
    }

    public String getTanggal_parkir() {
        return tanggal_parkir;
    }

    public void setTanggal_parkir(String tanggal_parkir) {
        this.tanggal_parkir = tanggal_parkir;
    }

    public String getWaktu_masuk() {
        return waktu_masuk;
    }

    public void setWaktu_masuk(String waktu_masuk) {
        this.waktu_masuk = waktu_masuk;
    }

    public String getWaktu_keluar() {
        return waktu_keluar;
    }

    public void setWaktu_keluar(String waktu_keluar) {
        this.waktu_keluar = waktu_keluar;
    }

}
