package org.example.compositionprac;

public class Person {
    public String name;
    public Pencil pencil;
    public Pencil[] pencils;
    public Tool tool;

    public Person(String name, Tool tool) {
        this.name = name;
        this.tool = tool;
    }

    public Person(String name, Pencil[] pencils) {
        this.name = name;
        this.pencils = pencils;
    }

//    public void writeMany(String name, Pencil[]) {
//
//    }

//    public Person(String name, Pencil pencil) {
//        this.pencil = pencil;
//    }

    public String write() {
        pencil.write();
        return "";
    }

    public void use() {
        tool.use();
    }
}
