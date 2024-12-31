package org.example.compositionprac;

public class Weapon {
    public int damage ;
    public int Durability ;
    public Sword sword;
    public Gun gun;

    public Weapon(int damage, int durability) {
        this.damage = damage;
        Durability = durability;
    }

//    public void SpecialAttack() {
//        if (sword) {
//            sword.SpecialAttack();
//        } else if (gun) {
//            gun.SpecialAttack();
//        }
//    }
}
