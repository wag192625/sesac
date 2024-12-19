package org.example.javaintro;

import org.example.javaintro.tmp.DefaultModifier;

public class Main {
    public static void main(String[] args) {
    PrivateModifier pm = new PrivateModifier();

        System.out.println(pm.publicNum);
//        System.out.println(pm.privateNum);

        pm.publicHi();
//        pm.privateHi();
        pm.getPrivateNum();
        System.out.println(pm.getPrivateNum());
        pm.setPrivateNum(100);
        System.out.println(pm.getPrivateNum());

        pm.sayHi();

        System.out.println(pm.defaultNum);
        DefaultModifier dm = new DefaultModifier();
        System.out.println(dm.publicString);
//        System.out.println(dm.defaultString);

    }
}
