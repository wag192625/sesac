package org.example.collectrionprac;

import java.util.HashMap;
import java.util.Set;

public class MapPractice {
    public static void main(String[] args) {
        HashMap<String,Integer> map = new HashMap<>();

        // js : map[korean] = 100
        map.put("korean", 100);
        map.put("english", 10);

        System.out.println(map);

        // 키의 값 덮어씌워짐
        map.put("korean", 30);
        System.out.println(map);

        // 조회

        System.out.println(map.get("korean"));

        System.out.println(map.get("math")); // null
        System.out.println(map.getOrDefault("math", 0)); // 기본값 지정

        // 크기
        System.out.println(map.size());

        // Crtl + Alt + V 로 map의 타입을 알 수 있음
        Set<String> stringSet = map.keySet();

        for (String string : stringSet) {
            Integer value = map.get(string);
            System.out.println(string + value);
        }

    }
}
