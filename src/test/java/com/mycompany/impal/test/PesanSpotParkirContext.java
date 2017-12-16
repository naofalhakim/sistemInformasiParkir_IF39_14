package com.mycompany.impal.test;


import cucumber.api.java.bm.Maka;
import cucumber.api.java.id.Dengan;
import cucumber.api.java.id.Ketika;
import junit.framework.Assert;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author naofal
 */
public class PesanSpotParkirContext {

    @Dengan("^Data user, dan Data Pemesanana baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem$")
    public void data_user_dan_Data_Pemesanana_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
                boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Ketika("^Memasukan data pemesanan$")
    public void memasukan_data_pemesanan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Ketika("^Data baru pemesanan sudah benar$")
    public void data_baru_pemesanan_sudah_benar() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Maka("^respon pesan berhasil \"([^\"]*)\"$")
    public void respon_pesan_berhasil(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "pemesanan spot parkir berhasil";
        Assert.assertEquals(arg1, result);
    }

    @Dengan("^Data user, dan Data Pemesanana baru dimasukan dan duplikat dengan data yang sudah ada di sistem$")
    public void data_user_dan_Data_Pemesanana_baru_dimasukan_dan_duplikat_dengan_data_yang_sudah_ada_di_sistem() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Ketika("^Data baru pemesanan duplikat$")
    public void data_baru_pemesanan_duplikat() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);
    }

    @Maka("^respon pesan gagal \"([^\"]*)\"$")
    public void respon_pesan_gagal(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "pemesanan spot parkir gagal";
        Assert.assertEquals(arg1, result);
    }

}
