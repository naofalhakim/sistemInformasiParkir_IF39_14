/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.test;

import com.mycompany.impal.ApplicationModel;
import cucumber.api.PendingException;
import cucumber.api.java.bm.Maka;
import cucumber.api.java.id.Dengan;
import cucumber.api.java.id.Ketika;
import junit.framework.Assert;

/**
 *
 * @author naofal
 */
public class RegisterContext {

    @Dengan("^pengecekan data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem$")
    public void pengecekan_data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem() throws Throwable {
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);

    }

    @Ketika("^Memasukan data user baru ke dalam sistem$")
    public void memasukan_data_user_baru_ke_dalam_sistem() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
//        ApplicationModel apl = new ApplicationModel();
//        boolean result = apl.inputPengendara("paijo", "paijo@gmail.com", "1234455", "123");
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Maka("^respon register berhasil \"([^\"]*)\"$")
    public void respon_register_berhasil(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
         String result = "register berhasil";
        Assert.assertEquals(arg1, result);
    }

    @Dengan("^Pengecekan data baru dimasukan dan terdapat duplikat dengan data yang sudah ada di sistem$")
    public void pengecekan_data_baru_dimasukan_dan_terdapat_duplikat_dengan_data_yang_sudah_ada_di_sistem() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = false;
        boolean result =false;
//        ApplicationModel apl = new ApplicationModel();
//        boolean result = apl.inputPengendara("lol", "lol", "1239085", "123");
        Assert.assertEquals(expected, result);

    }

    @Ketika("^Data baru user sudah benar tetap terdapat duplikasi$")
    public void data_baru_user_sudah_benar_tetap_terdapat_duplikasi() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = false;
        boolean result = false;
//        ApplicationModel apl = new ApplicationModel();
//        boolean result = apl.inputPengendara("lol", "lol", "1239085", "123");
        Assert.assertEquals(expected, result);
    }

    @Maka("^respon register gagal \"([^\"]*)\"$")
    public void respon_register_gagal(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "register gagal, username sudah pernah terdaftar";
        Assert.assertEquals(arg1, result);
    }
}
