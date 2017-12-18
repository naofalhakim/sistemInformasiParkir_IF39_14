/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import com.mycompany.impal.view.RegisterGUI2;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class ControllerRegister implements ActionListener {

    private ApplicationModel model;
    private RegisterGUI2 view;
    private ControllerLogin cLogin;

    public ControllerRegister() {
        model = new ApplicationModel();
        view = new RegisterGUI2();
        cLogin =new ControllerLogin();

    }

    public void loadViewRegsiter() {
        view.setVisible(true);
        view.setActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();

        
        String nama = view.getTxtNama().getText();
        String email = view.getTxtEmail().getText();
        String no_ktp = view.getTxtKTP().getText();
        String pass = view.getTxtpass().getText();

        try {
            if (source == view.getBtnRegis()) {
                if (nama ==null || email==null || no_ktp==null || pass==null) {
                    JOptionPane.showMessageDialog(null, "Semua Data Harus Terisi");
                } else if (pass.equals(view.getTxtRepass().getText())) {
                    if (model.inputPengendara(nama, email, no_ktp, pass)) {
                        JOptionPane.showMessageDialog(view, "Register Berhasil");
                        view.reset();
                        cLogin.loadView();
                        view.setVisible(false);
                    } else {

                    }
                } else {
                    JOptionPane.showMessageDialog(null, "Password tidak sama");
                }
            } else if (source == view.getBtnKembali()) {
                cLogin.loadView();
                view.setVisible(false);
            }
        } catch (Exception ae) {
            JOptionPane.showMessageDialog(null, ae.getMessage());
        }
    }
}
