/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.view.MenuUtama;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 * @author naofal
 */
public class ControllerMenuUtama implements ActionListener {

    private ApplicationModel model;
    private MenuUtama view;
    private ControllerParkir cParkir;
    private ControllerPesanLokasi cPesan;

    public ControllerMenuUtama() {
        model = new ApplicationModel();
        view = new MenuUtama();
        cParkir = new ControllerParkir();
        cPesan = new ControllerPesanLokasi();
    }

    public void loadViewMenuUtama() {
        view.setActionListener(this);
        view.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        if (source == view.getJPantau()) {
            cParkir.loadViewParkir();
            view.setVisible(false);
        } else if (source == view.getJPesanLokasi()) {
            cPesan.loadViewPesan();
            view.setVisible(false);

        } else if (source == view.getBtnParkir()) {
            cParkir.loadViewParkir();
            view.setVisible(false);
        }
    }

}
