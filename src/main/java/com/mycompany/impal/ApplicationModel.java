/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.model.Pengendara;
import java.awt.List;

/**
 *
 * @author naofal
 */
public class ApplicationModel {
    private DbConfig dbConfig;
    private List listPengendara;

    public ApplicationModel() {
        dbConfig = new DbConfig();
        dbConfig.connection();
    }
    
    public boolean inputPengendara(String nama, String email, String noKtp, String pass){
        return dbConfig.cobaInput(email, nama, noKtp, pass);
    }

    public boolean cekLogin(String email, String pass) {
        return dbConfig.cariAkun(email,pass);
    }
}
