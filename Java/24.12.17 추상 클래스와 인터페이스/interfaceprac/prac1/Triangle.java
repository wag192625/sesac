package org.example.interfaceprac.prac1;

public class Triangle extends Shape {
    private int width;
    private int height;

    public Triangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public int calculateArea() {
        return (this.width * this.height) /2 ;
    }
}
