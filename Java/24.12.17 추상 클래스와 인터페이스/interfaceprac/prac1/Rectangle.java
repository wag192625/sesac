package org.example.interfaceprac.prac1;

public class Rectangle extends Shape {
    private int width;
    private int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public int calculateArea() {
        return width * height;
    }
}

//Shape triangle - Shape가 할 수 있는 행동 만 할 수 있음
//                Triangle의 방식으로 함.
//                -> 어떤 shpae가 올지에 상관 없이 자유롭게 사용 가능.
//
//(Triangle) triagle
//
//pencil extends tool
//
//pencil.write()
//
//    tool.use()
//
//    class pencil(){
//    use(){
//        pencile.write()
//    }
//    }