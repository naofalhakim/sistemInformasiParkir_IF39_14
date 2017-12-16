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
public class Pengendara {
    String email, password, nama, alamat, jenisKelamin;
    long noktp;

    public Pengendara(String email, String password, String nama, String alamat, String jenisKelamin, long noktp) {
        this.email = email;
        this.password = password;
        this.nama = nama;
        this.alamat = alamat;
        this.jenisKelamin = jenisKelamin;
        this.noktp = noktp;
    }

    public Pengendara() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getJenisKelamin() {
        return jenisKelamin;
    }

    public void setJenisKelamin(String jenisKelamin) {
        this.jenisKelamin = jenisKelamin;
    }

    public long getNoktp() {
        return noktp;
    }

    public void setNoktp(long noktp) {
        this.noktp = noktp;
    }
    
}
