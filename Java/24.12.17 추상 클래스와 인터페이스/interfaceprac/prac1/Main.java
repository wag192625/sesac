package org.example.interfaceprac.prac1;

public class Main {
    public static void main(String[] args) {
        Shape triangle = new Triangle(10, 5);
        printShapeArea(triangle);
        Shape rectangle = new Rectangle(10, 8);
        printShapeArea(rectangle);

//        Triangle triangle = new Triangle(10, 5);
//        printTrianleArea(triangle);
//
//        Rectangle rectangle = new Rectangle(10, 8);
//        printRectanleArea(rectangle);
    }

    private static void printShapeArea(Shape shape) {
        int shapeArea = shape.calculateArea();

        if (shape instanceof Triangle) {
            System.out.println("삼각형의 면적 : " + shapeArea);
        } else if (shape instanceof Rectangle) {
            System.out.println("사각형의 면적 : " + shapeArea);
        }
    }


//    private static void printTrianleArea(Triangle triangle) {
//        int triangleArea = triangle.calculateArea();
//        System.out.println("삼각형의 면적 : " + triangleArea);
//    }
//    private static void printRectanleArea(Rectangle rectangle) {
//        int rectangleArea = rectangle.calculateArea();
//        System.out.println("삼각형의 면적 : " + rectangleArea);
//    }
}
