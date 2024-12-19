package org.example;

public class Circle {

    int radius;

//    생성자
    Circle(int radius) {
        this.radius = radius;
    }

    double calculateArea() {
        return 3.14 * radius * radius;
    }
}
