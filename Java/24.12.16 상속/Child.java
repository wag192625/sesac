package org.example.inheritanceprac;

public class Child extends Parent {
    public String childValue = "childValue";

    public Child(String PublicValue) {
        super(PublicValue);
    }

    public Child(String PublicValue, String childValue) {
        super(PublicValue);
        this.childValue = childValue;
    }

    public void childMethod() {
        System.out.println("childValue");
    }

    public void publicMethod() {
        super.publicMethod();
        System.out.println("child public method");
        System.out.println(super.publicValue);
        System.out.println(super.protectedValue);

    }
}
