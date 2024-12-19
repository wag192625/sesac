package org.example.inheritanceprac.exer3;

public class Mage extends Charactor{
    private int mana;
    private static final int MAX_MANA = 100;

    public Mage(String name) {
        super(name);
        this.healthPoint = 70;
    }

    @Override
    public void LevelUp() {
        super.LevelUp();
        healthPoint += 5;
    }

}
