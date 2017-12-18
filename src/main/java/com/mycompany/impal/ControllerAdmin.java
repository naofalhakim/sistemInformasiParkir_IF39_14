/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.view.Admin;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 * @author naofal
 */
public class ControllerAdmin implements ActionListener {

    private ApplicationModel model;
    private Admin view;
    private ControllerLogin cLogin;

    public ControllerAdmin() {
        model = new ApplicationModel();
        view = new Admin();
        model.setTableLokasi(view.getTblLokasiParkir());
    }

    public void loadViewAdmin() {
        view.setVisible(true);
        view.setActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object sourec = e.getSource();
        if (view.getBtnLogOut() == sourec) {
            cLogin = new ControllerLogin();
            cLogin.loadView();
            view.setVisible(false);
        } else if (view.getBtndeletekamera() == sourec) {

        }
    }

}
