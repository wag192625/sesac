package org.example.compositionprac;

public class Main {
    public static void main(String[] args) {

//  - 다음을 구현하시오
//    - 색상, 쓰기 기능을 갖는 Pencil 클래스를 구현하시오
//    - 이름, Pencil을 갖는 Person 클래스를 구현하시오
//        - write() 메소드를 통해 연필로 쓰기 기능 구현

//    Pencil pencil = new Pencil("red");
//    Person person = new Person("myonghun",pencil);
//    person.pencil.write();

//    person.write();

    //  - 다음을 구현하시오
//    - 마력을 갖는 Engine 클래스를 구현하시오
//    - 모델명, Engine, 가속 기능을 갖는 Car 클래스를 구현하시오
//        - Engine의 마력에 따라 속도가 크게 빨라지는 기능 구현
    Engine engine = new Engine(8);
    Car car = new Car("staria",engine);
    System.out.println(car.speedInfo());

//- 다음을 구현하시오
//    - 공격력, 내구력을 갖는 Weapon 클래스를 구현하시오
//        - 특별 공격 기능을 갖는 Gun, Sword 클래스를 구현하시오.
//    - 체력, 공격 기능을 갖는 Character 클래스를 구현하시오
//        - 무기가 없으면 기본공격, 무기가 있으면 무기의 공격력만큼 추가 공격을 하는 기능 구현
//        - 무기를 사용한 특별 공격 구현

//    Weapon weapon = new Weapon(3,10);
//    Sword sword = new Sword();
//    Gun gun = new Gun();
//    Character hun = new Character("hun", 300, "sword");
//    hun.Attack();

    // Person
        Person p1 = getPerson();

        p1.tool = car;
        System.out.println(car.speedInfo());
        p1.use();
        System.out.println(car.speedInfo());
    }

    private static Person getPerson() {
        Pencil pencil1 = new Pencil("red");
        Person p1 = new Person("MH", pencil1);
        p1.use();
        return p1;
    }
}
