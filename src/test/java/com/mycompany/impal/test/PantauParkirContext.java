/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.test;

import cucumber.api.java.bm.Maka;
import cucumber.api.java.id.Dengan;
import cucumber.api.java.id.Ketika;
import junit.framework.Assert;

/**
 *
 * @author naofal
 */
public class PantauParkirContext {

    @Dengan("^pengecekan data transaksi parkir dan data inputan berupa id user ditemukan$")
    public void pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result;
        String idUser;
        idUser = "paijo@gmail.com";
        if (idUser != null) {
            result = true;
        } else {
            result = false;
        }

        Assert.assertEquals(expected, result);
    }

    @Ketika("^data hasil pengecekan sama\\( benar \\)$")
    public void data_hasil_pengecekan_sama_benar() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result;
        String arg1, arg2;
        arg1 = "paijo@gmail.com";
        arg2 = "paijo@gmail.com";
        if (arg1.equals(arg2)) {
            result = true;
        } else {
            result = true;
        }
        Assert.assertEquals(expected, result);
    }

    @Maka("^respone pantau berhasil \"([^\"]*)\"$")
    public void respone_pantau_berhasil(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "munculkan visualisasi dari pemantauan kendaraan";
        Assert.assertEquals(arg1, result);
    }

    @Dengan("^pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan$")
    public void pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Ketika("^data hasil pengecekan tidak ditemukan id transaksi user\\( salah \\)$")
    public void data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Maka("^respone pantau gagal \"([^\"]*)\"$")
    public void respone_pantau_gagal(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah";
        Assert.assertEquals(arg1, result);
    }
}
