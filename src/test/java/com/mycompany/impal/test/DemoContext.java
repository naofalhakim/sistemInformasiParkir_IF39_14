/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.test;

import cucumber.api.PendingException;
import cucumber.api.java.bm.Maka;
import cucumber.api.java.id.Dengan;
import cucumber.api.java.id.Ketika;
import junit.framework.Assert;

/**
 *
 * @author naofal
 */
public class DemoContext {

    @Dengan("^Data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem$")
    public void data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);

    }

    @Ketika("^Memasukan data user baru$")
    public void memasukan_data_user_baru() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);

    }

    @Ketika("^Data baru user sudah benar$")
    public void data_baru_user_sudah_benar() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        boolean expected = true;
        boolean result = true;
        Assert.assertEquals(expected, result);

    }

    @Maka("^respon \"([^\"]*)\"$")
    public void respon(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String result = "register berhasil";
        Assert.assertEquals(arg1, result);
    }
}
