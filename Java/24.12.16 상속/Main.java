package org.example.inheritanceprac;

import org.example.inheritanceprac.exer1.Cat;
import org.example.inheritanceprac.exer1.Dog;
import org.example.inheritanceprac.exer2.Bus;
import org.example.inheritanceprac.exer3.Mage;
import org.example.inheritanceprac.exer3.Warrior;

public class Main {
    public static void main(String[] args) {
        Person.introduce();
        Student.introduce();

        Student s = new Student();
        s.study();

        System.out.println("parent");
        Parent parent = new Parent("parent Public value");
        System.out.println(parent.publicValue);
//        System.out.println(parent.privateValue);
        System.out.println(parent.protectedValue);
        parent.publicMethod();
//        parent.childMethod(); 부모에선 자식에 관여 안됨.

        System.out.println("child");
//        Child child = new Child("child Public value");
        Child child = new Child("child Public value","child value");
        System.out.println(child.publicValue);
//        System.out.println(child.privateValue);
        System.out.println(child.protectedValue);
        child.publicMethod();
        child.childMethod();

        // 실습
        Dog dog = new Dog("dog",3,"buldog");
        System.out.println(dog.breed);
        Cat cat = new Cat("cat", 3, "yaong");
        cat.Crying();

        Bus bus = new Bus("cityBus", 0, 350);
        System.out.println(bus.fuel);
        bus.SpeedUp();
        bus.PassengerRiding(10);
        bus.PassengerDropOff(11);
        bus.PassengerDropOff(10);

        Warrior warr = new Warrior("warr");
        System.out.println(warr.CharInfo());
        Mage maage = new Mage("maage");
        System.out.println(maage.CharInfo());
        warr.LevelUp();
        warr.LevelUp();
        warr.LevelUp();
        warr.LevelUp();
        warr.Attack(maage);
        warr.Attack(maage);
        warr.Attack(maage);
        warr.Attack(maage);
//        System.out.println(maage.CharInfo());
    }
}
