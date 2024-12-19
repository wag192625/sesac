package org.example.inheritanceprac.exer2;

public class Vehicle {
    public String model;
    public int speed;
    public int fuel ;

    public Vehicle(String model, int speed, int fuel) {
        this.model = model;
        this.speed = speed;
        if (fuel >= 100) {
            this.fuel = 100;
        } else {
        this.fuel = fuel;
        }
    }

    public void SpeedUp() {
        if (speed >= 300) {
            speed = 300;
        } else {
            speed += 10;
            System.out.println("speed 10 UP") ;
            System.out.println("now : " + speed);
        }
    }

    public void SpeedDown() {
        if (speed <= 0) {
            speed = 0;
        } else {
            speed -= 10;
            System.out.println("speed 10 DOWN");
            System.out.println("now : " + speed);
        }
    }
}
