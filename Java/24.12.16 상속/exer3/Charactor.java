package org.example.inheritanceprac.exer3;

public class Charactor {
    protected String name;
    protected int level = 1;
    protected int healthPoint = 10;
    protected int damage = 1 ;

    public Charactor(String name) {
        this.name = name;
//        this.healthPoint = 10;
    }

    public void Attack(Charactor enemy) {
        enemy.healthPoint -= damage;
        System.out.println("attack!");
    }

    public void LevelUp() {
        level += 1;
        damage += 1;
        healthPoint += 10;
        System.out.println("Level Up!");
    }

    public String CharInfo() {
        return "name : " + name + " level : " + level + " HP : " + healthPoint;
    }
}
