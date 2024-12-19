package org.example.inheritanceprac.exer3;

public class Warrior extends Charactor{
    private int rageGage;
    private static final int MAX_RAGE = 100;

    public Warrior(String name) {
        super(name);
        this.rageGage = 0;
        this.healthPoint = 120;
    }

    @Override
    public void Attack(Charactor enemy) {
        if (rageGage >= 80) {
            rageGage -= 80;
            enemy.healthPoint -= damage+level;
            System.out.println("Rage Attack!");
            System.out.println("name : " + enemy.name + " level : " + enemy.level + " HP : " + enemy.healthPoint);
        } else {
            enemy.healthPoint -= damage;
            rageGage += 30;
            System.out.println("Attack!");
            System.out.println("name : " + enemy.name + " level : " + enemy.level + " HP : " + enemy.healthPoint);
        }
    }

    @Override
    public void LevelUp() {
        super.LevelUp();
        healthPoint += 20;
    }
}