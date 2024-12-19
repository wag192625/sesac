package org.example;

import org.example.javaintro.Dog;
import org.example.practice.Bread;
import org.example.practice.Coffee;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.

//        System.out.printf("Hello and welcome!");
//        Ractangle rect1 = new Ractangle(100, 200);
//        System.out.println(rect1.width);
//        System.out.println(rect1.calculateArea());
//
//        Circle c1 = new Circle(3);
//        System.out.println(c1.radius);
//        System.out.println(c1.calculateArea());

        Person person = new Person("정명훈", 99);
        System.out.println(person.selfIntroduce());

        Dog dog = new Dog("buldog", "dogdog");
        System.out.println(dog.doggy());
        System.out.println(dog.sitDog());
        System.out.println(dog.hand());

        Triangle triangle = new Triangle(10,6);

        Car car = new Car("Avante");
        System.out.println(car.model);
        car.speedUP();
        car.speedUP();
        car.speedUP();
        car.speedDown();
        car.carInfo();
        car.increaseSpeedByAmount(100);

        MP3Player mp3 = new MP3Player("iPod");
        mp3.pushPowerButton();
        // == mp3.turnOn();
        mp3.volumeUp();
        mp3.volumeUp();
        mp3.volumeUp();
        mp3.volumeDown();
        mp3.mp3Info();
        mp3.pushPowerButton();
        mp3.mp3Info();

        calculatingMachine cal = new calculatingMachine(12, 4);
        System.out.println(cal.add());
        System.out.println(cal.minus());
        System.out.println(cal.multiply());
        System.out.println(cal.divide());

        calculatingMachine2 cal2 = new calculatingMachine2();
        System.out.println(cal2.add(1, 4));
        System.out.println(cal2.minus(30, 14));
        System.out.println(calculatingMachine2.staticAdd(4,3));

        Rectangle rect2 = new Rectangle(10, 30);
        System.out.println(rect2.angleCount);
        Rectangle.angleCount = 10;
        System.out.println("Rectangle.angleCount = " + rect2.angleCount);
        System.out.println(Rectangle.angleCount);

        Dog poppy = new Dog("puddle", "poppy");
        Dog poppyJr = new Dog("puddle", "poppyJr");

        System.out.println(Dog.count);

        System.out.println("Car wheel count : " + Car.wheel);

        // Person 생성자
        System.out.println("Person");
        Person p1 = new Person();
        Person p2 = new Person("jane", 17);
        System.out.println(p1.name);
        System.out.println(p2.name);

        Coffee.taste();
        Bread.taste();

        Math.abs(-3);
        Math.pow(3, 5);
    }
}
