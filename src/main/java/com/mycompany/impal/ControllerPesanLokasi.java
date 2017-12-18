/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.view.PesanLokasi;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class ControllerPesanLokasi implements ActionListener {

    private ApplicationModel model;
    private PesanLokasi view;    

    public ControllerPesanLokasi() {
        model = new ApplicationModel();
        view = new PesanLokasi();        
        view.setActionListener(this);
        view.setVisible(true);
    }


    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        if (source == view.getjButton1()) {

            int lantai = Integer.parseInt(view.getCmbLantai().getItemAt(view.getCmbLantai().getSelectedIndex()));
            int nomor = Integer.parseInt(view.getCmbSektor1().getItemAt(view.getCmbSektor1().getSelectedIndex()));
            String sector = view.getCmbSektor().getItemAt(view.getCmbSektor().getSelectedIndex());
            String kategori = null;
            if (view.getJrmobil().isSelected()) {
                kategori = view.getJrmobil().getText();
            } else {
                kategori = view.getJrmotor().getText();
            }

            int idLokasi = model.cariLokasi(lantai, nomor, sector, kategori);

            String tanggal = view.getCmbTanggal().getSelectedItem().toString()
                    + "-" + view.getCmbBulan().getSelectedItem().toString() + "-"
                    + view.getCmbTahun().getSelectedItem().toString();
            if (idLokasi != 0) {
                model.pesanLokasi(idLokasi, tanggal, ApplicationModel.getIdPengendara());
            } else {
                JOptionPane.showMessageDialog(view, "Lokasi Telah di Pesan");
            }
        } else if (source == view.getBtnKembali()) {
            ControllerMenuUtama cMenu= new ControllerMenuUtama();
            view.setVisible(false);
        }
    }

}
