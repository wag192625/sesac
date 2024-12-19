package org.example.inheritanceprac.exer1;

public class Dog extends Animal{
    public String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    @Override
    public void Crying() {
        System.out.println("wang wang!");
    }
}
