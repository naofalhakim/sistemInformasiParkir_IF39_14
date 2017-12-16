/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

/**
 *
 * @author naofal
 */
public class DataUser {
    private String email;
    private String noktp;
    private String jeniskendaraan;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNoktp() {
        return noktp;
    }

    public void setNoktp(String noktp) {
        this.noktp = noktp;
    }

    public String getJeniskendaraan() {
        return jeniskendaraan;
    }

    public void setJeniskendaraan(String jeniskendaraan) {
        this.jeniskendaraan = jeniskendaraan;
    }

    public DataUser(String email, String noktp, String jeniskendaraan) {
        this.email = email;
        this.noktp = noktp;
        this.jeniskendaraan = jeniskendaraan;
    }
    
}
