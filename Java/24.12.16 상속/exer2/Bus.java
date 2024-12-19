package org.example.inheritanceprac.exer2;

public class Bus extends Vehicle {
    public int passenger;
    public Bus(String model, int speed, int fuel) {
        super(model, speed, fuel);
        if (fuel >= 300) {
            this.fuel = 300;
        } else {
            this.fuel = fuel;
        }
    }


    public void PassengerRiding(int i) {
        if (i <= 0) {
            System.out.println("wrong number");
        } else {
            passenger += i;
        }
        System.out.println("now passenger : " + passenger);
    }

    public void PassengerDropOff(int i) {
        if (passenger - i < 0) {
            System.out.println("wrong number");
        } else {
            passenger -= i;
        }
        System.out.println("now passenger : " + passenger);
    }
}
