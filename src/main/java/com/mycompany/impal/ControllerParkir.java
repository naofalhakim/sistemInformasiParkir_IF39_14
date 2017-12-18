/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.view.MenuParkir;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class ControllerParkir implements ActionListener {

    private ApplicationModel model;
    private MenuParkir view;
    private ControllerMenuUtama cMenu;

    public ControllerParkir() {
        model = new ApplicationModel();
        view = new MenuParkir();
        model.setTableRekap(view.getTblParkir(), ApplicationModel.getIdPengendara());
        cMenu = new ControllerMenuUtama();
    }

    public void loadViewParkir() {
        view.setActionListener(this);
        view.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        if (source == view.getBtnKembali()) {
            cMenu.loadViewMenuUtama();
            view.setVisible(false);

        } else if (source == view.getBtnParkir()) {
            int lantai = Integer.parseInt(view.getCmbLantai().getSelectedItem().toString());
            int nomor = Integer.parseInt(view.getCmbNomor().getSelectedItem().toString());
            String sector = view.getCmbSektor().getSelectedItem().toString();
            String kategori = null;
            if (view.getJrmobil().isSelected()) {
                kategori = view.getJrmobil().getText();
            } else {
                kategori = view.getJrmotor().getText();
            }

            int idLokasi = model.cariLokasi(lantai, nomor, sector, kategori);
            if (idLokasi != 0) {
                model.inputTransaksiParkir(view.getTxtNomorPlat().getText(), idLokasi, ApplicationModel.getIdPengendara());
            } else {
                JOptionPane.showMessageDialog(view, "Parkir Gagal");
            }
        } else if (source == view.getBtnRefres()) {
            model.setTableRekap(view.getTblParkir(), ApplicationModel.getIdPengendara());
        }
    }

}
