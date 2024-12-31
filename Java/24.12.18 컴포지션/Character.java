package org.example.compositionprac;

public class Character {
    public String name;
    public int healthPoint;
//    public int damage = 1 ;
    public Weapon weapon ;
    public String usedWeapon = "nomal";

    public Character(String name, int healthPoint, String usedWeapon) {
        this.name = name;
        this.healthPoint = healthPoint;
        this.usedWeapon = usedWeapon;
    }

    public void Attack() {
        if (usedWeapon.equals("sword")) {
            weapon.sword.SpecialAttack();
            System.out.println(weapon.damage + weapon.sword.damage + " damage attack");
            weapon.sword.Durability -= 1;
        } else if (usedWeapon.equals("gun")) {
            weapon.gun.SpecialAttack();
            System.out.println(weapon.damage + weapon.gun.damage + " damage attack");
            weapon.gun.Durability -= 1;
        } else {
            System.out.println("nomal-attack");
            System.out.println(weapon.damage + "damage attack");

        }
    }
}
