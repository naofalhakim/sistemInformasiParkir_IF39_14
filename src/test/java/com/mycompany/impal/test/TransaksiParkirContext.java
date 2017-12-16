/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal.test;


import cucumber.api.java.bm.Maka;
import cucumber.api.java.id.Dengan;
import cucumber.api.java.id.Ketika;


/**
 *
 * @author naofal
 */
public class TransaksiParkirContext {

    @Dengan("^pengecekan data transaksi pemesanan spot parkir dan data user parkir$")
    public void pengecekan_data_transaksi_pemesanan_spot_parkir_dan_data_user_parkir() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Maka("^user parkir bisa parkir sesuai dengan tempet yang dipesan$")
    public void user_parkir_bisa_parkir_sesuai_dengan_tempet_yang_dipesan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Ketika("^data hasil pengecekan tidak ditemukan\\( salah \\)$")
    public void data_hasil_pengecekan_tidak_ditemukan_salah() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Maka("^user parkir berdasarkan spot tempat parkir yang di tentukan$")
    public void user_parkir_berdasarkan_spot_tempat_parkir_yang_di_tentukan() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dengan("^data parkir user masuk dengan status parkir di sistem dan tidak duplikat$")
    public void data_parkir_user_masuk_dengan_status_parkir_di_sistem_dan_tidak_duplikat() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Ketika("^data sudah masuk ke sistem, maka countup akan di mulai$")
    public void data_sudah_masuk_ke_sistem_maka_countup_akan_di_mulai() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Ketika("^countup sudah mulai menghitung$")
    public void countup_sudah_mulai_menghitung() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Maka("^respon \"([^\"]*)\" dan akan mulai dihitung juga untuk biaya parkir user$")
    public void respon_dan_akan_mulai_dihitung_juga_untuk_biaya_parkir_user(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Dengan("^data durasi parkir, pada data parkir$")
    public void data_durasi_parkir_pada_data_parkir() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Ketika("^data durasi user lebih dari (\\d+) detik \\( biaya parkir awal \\)$")
    public void data_durasi_user_lebih_dari_detik_biaya_parkir_awal(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Maka("^perhitungan biaya parkir = (\\d+)$")
    public void perhitungan_biaya_parkir(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Ketika("^data durasi parkir user lebih dari (\\d+) jam$")
    public void data_durasi_parkir_user_lebih_dari_jam(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }

    @Maka("^biaya parkir menjadi biaya parkir awal \\+ n\\( biaya parkir tiap jam \\) x (\\d+)$")
    public void biaya_parkir_menjadi_biaya_parkir_awal_n_biaya_parkir_tiap_jam_x(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }
}
