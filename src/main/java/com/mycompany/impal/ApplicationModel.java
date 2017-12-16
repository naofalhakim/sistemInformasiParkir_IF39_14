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
public class ApplicationModel {
    DbConfig dbConfig;

    public ApplicationModel() {
        dbConfig = new DbConfig();
        dbConfig.connection();
    }
    
    public void inputPengendara(String nama, String email, String noKtp, String pass){
        dbConfig.cobaInput(email, nama, noKtp, pass);
    }
}
