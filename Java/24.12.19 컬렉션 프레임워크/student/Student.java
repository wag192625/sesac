package org.example.collectrionprac.student;

import java.util.HashMap;
import java.util.Map;

public class Student {
//  - 이름(String), 나이(int)
    private String name;
    private int age;
    //    HashMap<String, Integer> students = new HashMap<>();
    private Map<String, Integer> grade;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.grade = new HashMap<>();
    }

//  - 과목별 성적 저장
    // setter를 안 쓰는 이유 : grade란 맵에 map을 추가하려면 국어 : 100 이런 맵이 원래부터 있어야 하는데
    // 없기 때문에 아예 Map을 리턴값으로 적용.
    public Map<String, Integer> addGrade(String subject, Integer score) {
        // grade를 리턴 / void를 리턴하는 건 차이가 있음
        grade.put(subject, score);

        return grade;
    }

    public void showInfo() {
        System.out.println("name = " + name);
        System.out.println("age = " + age);
        System.out.println("grade = " + grade);
    }

    public String getName() {
        return name;
    }

    //  - 성적의 평균 계산
    public double averageScore() {
        Integer sum = 0;
        for (String key : grade.keySet()) {
            Integer value = grade.get(key);
            sum += value;
        }
        return (double) sum / grade.size();
    }

//    public String name;
//    public int age;
//    public int korean;
//    public int english;
//    public int math;
//
//    public Student(String name, int age) {
//        this.name = name;
//        this.age = age;
//    }
//
//    public void Score(int korean, int english, int math) {
//        this.korean = korean;
//        this.english = english;
//        this.math = math;
//    }
//
//    public void ScoreAverage() {
//        int sum = 0;
//        sum += korean + english + math;
//        int avg = sum / 3;
//        System.out.println(avg);
//    }
}
