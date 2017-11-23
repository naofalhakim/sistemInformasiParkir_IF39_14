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

/**
 *
 * @author naofal
 */
public class Register implements ActionListener{

    private Pengendara model ;
    private RegisterGUI2 view;

    public Register() {
        model = new Pengendara();
        view = new RegisterGUI2();
    }
    
    
    @Override
    public void actionPerformed(ActionEvent e) {
        
    }
    
}
