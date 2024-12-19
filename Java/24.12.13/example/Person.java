package org.example;

public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Person() {
        this.name = "basic name";
        this.age = 19;
    }

    String selfIntroduce() {
        return "나의 이름은 " + name + "이고, \n" +
                "나이는 " + age + " 입니다.";
    }
}
