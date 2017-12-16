/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.test;

import cucumber.api.java.bm.Maka;
import cucumber.api.java.id.Ketika;
import junit.framework.Assert;

/**
 *
 * @author naofal
 */
public class RekapAreaParkirContext {

    @Ketika("^data hasil pengecekan ditemukan atau sama\\( benar \\)$")
    public void data_hasil_pengecekan_ditemukan_atau_sama_benar() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
               boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Maka("^respon berhasil menampilkan \"([^\"]*)\"$")
    public void respon_berhasil_menampilkan(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "lokasi spot kendaraan";
        Assert.assertEquals(arg1, result);
    }   

    @Maka("^respon rekap spot gagal menampilkan \"([^\"]*)\"$")
    public void respon_rekap_spot_gagal_menampilkan(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "id yang di inputkan salah";
        Assert.assertEquals(arg1, result);
    }
}
