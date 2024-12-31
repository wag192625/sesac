package org.example.collectrionprac;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class CollectionExercise {
    public static void main(String[] args) {
        // ArrayList ---------------------------------------------
        ArrayList<String> strings = new ArrayList<>();

        // add
        strings.add("A");
        strings.add("C");
        strings.add(1, "B");

        System.out.println(strings);

        // get
        System.out.println(strings.get(0));

        // set
        strings.set(0, "a");
        System.out.println(strings);

        // size
        System.out.println(strings.size());

        // isEmpty
        System.out.println(strings.isEmpty());

        // contains

        System.out.println(strings.contains("a"));

        // remove(int index)
        strings.remove(2);
        System.out.println(strings);

        // Map ------------------------------------------------
        System.out.println("Map");

        HashMap<String, String> map = new HashMap<>();

        // put
        map.put("alex", "Kim");
        map.put("jisu", "Jo");
        map.put("anna", "Ga");

        System.out.println(map);

        // put (교체)
        map.put("alex", "Jung");
        System.out.println(map);

        // get(Object key)
        System.out.println(map.get("alex"));
        System.out.println(map.get("Jung")); // key 에 Jung이 없어서 null 출력

        // getOrDefault(Object key, Object defaultValue)
        System.out.println(map.getOrDefault("alex", "X"));
        System.out.println(map.getOrDefault("Jung", "X")); // Jung이라는 key 가 없으므로 X 출력

        // size
        System.out.println(map.size());

        // containsKey / containsValue
        System.out.println(map.containsKey("alex"));
        System.out.println(map.containsValue("alex"));
        System.out.println(map.containsValue("Jung"));

        // remove(Object key)
        map.remove("alex");
        System.out.println(map);

        // keySet
        for (String string : map.keySet()) {
            System.out.println(string + " : " + map.get(string));
        }

        // Set ---------------------------------------------------
        System.out.println("Set");

        HashSet<String> set = new HashSet<>();

        // add
        set.add("1");
        set.add("2");
        set.add("3");
        set.add("4");

        // addAll(Collection c)
        List<String> list = new ArrayList<>();
        list.add("5");
        list.add("6");

        set.addAll(list);
        System.out.println(set);

        // size
        System.out.println(set.size());

        // isEmpty
        System.out.println(set.isEmpty());

        // contains
        System.out.println(set.contains("1"));

        // remove
        set.remove("1");

        System.out.println(set);

        // 30, 20 ,10 이 들어있는 ArrayList를 만들고, 합계와 평균을 계산
        List<Integer> num = new ArrayList<>();
        num.add(30);
        num.add(20);
        num.add(10);

        // 합계
        int sumNumber = 0;
        for (Integer i : num) {
            sumNumber += i;
        }
        System.out.println(sumNumber);

        // 평균
        System.out.println(sumNumber/num.size());

    }
}
