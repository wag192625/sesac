package org.example.exeptionprac;

public class Main {
    public static void main(String[] args) {
        try {
            System.out.println(0/0);
        } catch (ArithmeticException  e) {
            System.out.println(e.getMessage());
        }
        try {
            // 문제 상황이 발생했다고 가정하자.
            if (true) {
                throw new RuntimeException();
            }
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            System.out.println("runtime error!");
        }
    }
}
