package org.example.inheritanceprac;

public class Student extends Person{
//    String name;
//    int age;
    int studentNum;

    public static void introduce() {
        System.out.println("hello i'm student" );
    }

    public void study() {
        System.out.println("studying");
    }
}
