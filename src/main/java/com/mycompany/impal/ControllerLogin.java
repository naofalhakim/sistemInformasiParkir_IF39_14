/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.impal;

import com.mycompany.impal.view.LoginGUI;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;

/**
 *
 * @author naofal
 */
public class ControllerLogin implements ActionListener {

    private ApplicationModel model;
    private LoginGUI view;

    public ControllerLogin() {
        model = new ApplicationModel();
        view = new LoginGUI();
    }
    
    public void loadView(){
        view.setVisible(true);
        view.setActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();

        String email, pass;
        email = view.getJusername().getText();
        pass = view.getJpassword().getText();

        if (source == view.getBtnDaftar()) {
            ControllerRegister controllerRegister = new ControllerRegister();
            view.setVisible(false);
        } else if (source == view.getBtnLogin()) {

            if (email == null || pass == null) {
                JOptionPane.showMessageDialog(view, "email atau password kosong");
            } else {
                String prio = model.cekLogin(email, pass);

                if ("user".equals(prio)) {
                    JOptionPane.showMessageDialog(view, "Login Berhasil");
                    ApplicationModel.setIdPengendara(email);
                    
                    ControllerMenuUtama controllerMenuUtama = new ControllerMenuUtama();
                    view.setVisible(false);
                    
                } else if ("admin".equals(prio)) {
                    JOptionPane.showMessageDialog(view, "Login Berhasil");
                    
                    ControllerAdmin controllerAdmin = new ControllerAdmin();
                    view.setVisible(false);
                } else {
                    JOptionPane.showMessageDialog(view, "Email Atau Password Salah");
                }

            }
        }
    }

}
