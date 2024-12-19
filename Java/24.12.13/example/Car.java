package org.example;

public class Car {
    static int wheel = 4;
    String model;
    int speed;

    Car(String model) {
        this.model = model;
        this.speed = 0;
    }

    int speedUP() {
        this.speed += 10;
        return this.speed;
    }

    int speedDown() {
        if (this.speed != 0) {
            this.speed -= 10;
        }
        return this.speed;
    }
    // 입력 : int /속도 올리고/ return 속도
    int increaseSpeedByAmount(int amount){
        this.speed += amount;
        return this.speed;
    }

    void carInfo() {
        System.out.println("모델명 : " + this.model + "속도 : " + speed);
//        return "모델명 : " + model + " 현재 속도 : " + speed;
    }
}
