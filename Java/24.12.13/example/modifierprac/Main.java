package org.example.modifierprac;

public class Main {
    public static void main(String[] args) {
        Person person = new Person("jung",2,199);

        System.out.println("name : "+person.getName());
        System.out.println("age : "+person.age);
        System.out.println("height : "+person.height);


        person.setName("Honggildong");
        person.age = 33 ;
        person.height =400;

        System.out.println("name : "+person.getName());
        System.out.println("age : "+person.age);
        System.out.println("height : "+person.height);

        person.Run2();
        person.Walk();
        person.Study();

//  ----------------------------------------------
//      계좌 생성
        BankAccount user = new BankAccount(1234);
//      입금
        user.Deposit(1000000);
//      출금
        user.Withdrawal(1234,30000);
//      잔액 조회
        user.Checkbalance(1234);

    }
}
