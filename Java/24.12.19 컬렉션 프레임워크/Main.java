package org.example.collectrionprac;

import org.example.collectrionprac.student.Student;
import org.example.collectrionprac.student.StudentManager;

public class Main {
    public static void main(String[] args) {
//        다음을 참고하여 학생 성적 관리 시스템을 구현하시오

        Student alex = new Student("alex", 19);
        Student nara = new Student("nara", 19);
        Student susan = new Student("susan", 19);

//        alex.Score(50,30,60);
//        alex.ScoreAverage();
        alex.addGrade("korean", 10);
        alex.addGrade("cs", 100);
        alex.addGrade("math", 100);
        alex.showInfo();
        alex.averageScore();

        nara.addGrade("korean", 100);
        nara.addGrade("cs", 30);
        nara.addGrade("math", 40);
        nara.showInfo();

        System.out.println("---------------");
        StudentManager studentManager = new StudentManager();
        studentManager.addStudent(alex);
        studentManager.addStudent(nara);

        studentManager.showStudentsInfo();
        Student a = studentManager.findStudentByName("alex");
        a.showInfo();

    }
}
