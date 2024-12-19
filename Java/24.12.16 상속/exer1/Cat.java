package org.example.inheritanceprac.exer1;

public class Cat extends Animal{
    public String cryingSound;

    public Cat(String name, int age,String cryingSound) {
        super(name, age);
        this.cryingSound = cryingSound;
    }

    @Override
    public void Crying() {
        super.Crying();
        System.out.println(cryingSound);
    }
}
