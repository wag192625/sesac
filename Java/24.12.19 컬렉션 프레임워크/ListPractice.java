package org.example.collectrionprac;

import org.example.inheritanceprac.Student;

import java.util.ArrayList;
import java.util.List;

public class ListPractice {
    public static void main(String[] args) {
//        Student student = new Student();
       List<Integer> list = new ArrayList<>();

       // data 삽입
        list.add(1);
        list.add(3);

        System.out.println(list);

        list.add(1,100);
        System.out.println(list);

        // 접근

        System.out.println(list.get(0));

        // 수정
        list.set(1, 1000);
        System.out.println(list);

        // list를 반복을 돈다. "길이"
        System.out.println(list.size());

        list.isEmpty();
        if (!list.isEmpty()) {
            list.get(0);
        }

        for (Integer i : list) {
            System.out.println(i);
        }

        for (int i = 0; i < list.size(); i++) {
            int value = list.get(i);
            System.out.println("for i : " + value);
        }

        ArrayList<String> strings = new ArrayList<>();

        strings.add("1");

    }
}
