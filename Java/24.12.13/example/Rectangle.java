package org.example;

public class Rectangle {

    static int angleCount = 4;

    int width;
    int height;

    Rectangle() {
//        this.width = 10;
//        this.height = 10;
        this(10, 10);
        // 클래스의 변수가 많아 this를 많이 써야 할 때 위와 같이도 쓸 수 있음.19
    }
    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }



}
