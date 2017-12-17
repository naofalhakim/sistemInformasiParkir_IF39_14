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
public class ControllerMenuUtama implements ActionListener{
    private ApplicationModel model;
    private MenuUtama view;

    public ControllerMenuUtama() {
        model = new ApplicationModel();
        view = new MenuUtama();
        view.setActionListener(this);
        view.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        if(source == view.getJPantau()){
            new ControllerParkir();
            view.setVisible(false);
        }else if(source == view.getJPesanLokasi()){
            new ControllerPesanLokasi();
            view.setVisible(false);
            
        }else if(source == view.getBtnParkir()){
            new ControllerParkir();
            view.setVisible(false);
        }
    }
    
}
