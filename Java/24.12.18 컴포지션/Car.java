package org.example.compositionprac;

public class Car implements Tool {
    public String modelName;
    public Engine engine;
    public int speed;


    public Car(String modelName,Engine engine) {
        this.modelName = modelName;
        this.engine = engine;
    }

    public int speedInfo() {
        int amount =  engine.horsepower * 10;
        return speed += amount;
    }

    @Override
    public void use() {
        speedInfo();
    }
}
