package org.example;

public class calculatingMachine {
    int num1;

    public calculatingMachine(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    int num2;

    // 덧셈
    int add() {
        return num1 + num2;
    }
    // 뺄셈
    int minus() {
        return num1 - num2;
    }
    // 곱셈
    int multiply() {
        return num1 * num2;
    }
    // 나눗셈
    int divide() {
        return num1 / num2;
    }
    // 거듭제곱
//    int 거듭제곱(){
//        return num1  num2;
//    }
}
