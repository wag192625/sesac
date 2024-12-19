package org.example.javaintro;

public class PrivateModifier {
    public int publicNum = 1;
    private int privateNum = 10;
    int defaultNum = 20;

    public void publicHi() {
        System.out.println("hi, public");
    }

    private void privateHi() {
        System.out.println("hi, private");
    }

    public int getPrivateNum() {
        return privateNum;
    }

    public void setPrivateNum(int privateNum) {
        this.privateNum = privateNum;
    }

    public void sayHi() {
        privateHi();
    }
}
