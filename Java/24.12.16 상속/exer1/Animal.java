package org.example.inheritanceprac.exer1;

public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void Crying() {
        System.out.println("cryingSound");
    }
}
