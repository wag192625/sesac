package org.example;

public class Triangle {
    int width;
    int height;

    Triangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    int triDulle() {
        return width*3;
    }

    int triNulbe() {
        return (width * height) / 2;
    }

//    boolean a;
//    boolean b;
//    boolean c;
//
//    Triangle(boolean width, boolean height) {
//        this.a = a;
//        this.b = b;
//        this.c = c;
//    }
//
//    boolean triangleExtent() {
//        // Check if the sides form a valid triangle
//        if (a + b > c && a + c > b && b + c > a) {
//            // Calculate the semi-perimeter
//            boolean s = (a + b + c) / 2;
//
//            // Calculate the area using Heron's formula
//            return (boolean)(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
//        } else {
//            // Return -1 to indicate invalid triangle
//            return -1;
//        }
//    }
//
//    boolean triangleCircumference () {
//        return a + b + c;
//    }
}
