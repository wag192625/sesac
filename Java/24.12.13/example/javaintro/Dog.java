package org.example.javaintro;

public class Dog {

    public static int count;

    String breed; // 견종
    String name;

    public Dog(String breed, String name) {
        this.breed = breed;
        this.name = name;
        count++;
        // 강아지가 생성이 될 때마다 증가
    }

    public String doggy() {
        return "breed : " + breed + " / name : " + name;
    }

    public String sitDog() {
        return name + " 앉아!";
    }

    public String hand() {
        return name + " 손!";
    }
}
