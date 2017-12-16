/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import com.mycompany.impal.model.Pengendara;
import com.mycompany.impal.view.RegisterGUI2;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class Register implements ActionListener {

    private ApplicationModel model;
    private RegisterGUI2 view;

    public Register() {
        model = new ApplicationModel();
        view = new RegisterGUI2();
        view.setVisible(true);
        view.setActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        
        String nama , email, no_ktp, pass;
        nama =view.getTxtNama().getText();
        email=view.getTxtEmail().getText();
        no_ktp=view.getTxtKTP().getText();
        pass=view.getTxtpass().getText();
        
        try {
            if (source == view.getBtnRegis()) {
                if (nama.equals("") || email.equals("") || no_ktp.equals("") || pass.equals("") ) {
                    JOptionPane.showMessageDialog(null, "Semua Data Harus Terisi");
                } else if (pass.equals(view.getTxtRepass().getText())) {
                    model.inputPengendara(nama,email,no_ktp,pass);
                } else {
                    JOptionPane.showMessageDialog(null, "Password tidak sama");
                }
            }
        } catch (Exception ae) {
        }
    }
}
