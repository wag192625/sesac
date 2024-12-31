package org.example.streampractice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
//        ArrayList<Integer> list = new ArrayList<Integer>();
//        list.add(1);
//        list.add(2);
//        list.add(3);
//        list.add(4);

//        ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3,4));
        ArrayList<Integer> list = new ArrayList<Integer>(List.of(3,1,2,2,4));
        System.out.println(list);

        List<Integer> overList = list.stream() // list를 stream으로 변경
                .filter(x -> x > 1) // filter 적용
                .collect(Collectors.toList());// List로 변경

        System.out.println(overList);

        //---------------------------------------------
        System.out.println("실습 1");

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        System.out.println("짝수만 필터링하여 리스트 반환");
        List<Integer> list1 = numbers.stream()
                .filter(el -> el % 2 == 0)
                .toList();
        System.out.println(list1);

        System.out.println("모든 숫자에 2를 곱하여 리스트 반환");
        List<Integer> list2 = numbers.stream()
                .map(el -> el * 2)
                .toList();
        System.out.println(list2);

        System.out.println("숫자들의 합계 계산");
        int sum1 = numbers.stream()
                .mapToInt(Integer::intValue)
                .sum();
        System.out.println(sum1);

        System.out.println("5보다 큰 숫자의 개수 계산");
        long count1 = numbers.stream()
                .filter(el -> el > 5)
                .count();
        System.out.println(count1);

        //---------------------------------------------
        System.out.println();
        System.out.println("실습 2");

        List<String> words = Arrays.asList("apple", "banana", "cherry", "fineapple", "apple");

        System.out.println("길이가 5 이상인 단어들만 필터링하여 리스트 반환");
        List<String> list3 = words.stream()
                .filter(el -> el.length() > 5)
                .toList();
        System.out.println(list3);

        System.out.println("모든 단어들을 대문자로 변환하여 리스트 반환");
        List<String> list4 = words.stream()
                .map(el -> el.toUpperCase())
                .toList();
        System.out.println(list4);

        System.out.println("중복된 단어 제거하고 알파벳 순 정렬하여 리스트 반환");
        List<String> list5 = words.stream()
                .distinct() // 중복 제거
                .sorted()   // 정렬
                .toList();
        System.out.println(list5);

        System.out.println("각 단어의 길이를 리스트로 반환");
        List<Integer> list6 = words.stream()
                .map(el -> el.length())
                .toList();
        System.out.println(list6);

        //---------------------------------------------
        System.out.println();
        System.out.println("실습 3");

        List<Product> products = Arrays.asList(
                new Product("notebook", 1200000, "SALE"),
                new Product("mouse", 50000, "SALE"),
                new Product("keyboard", 150000, "SOLD_OUT"),
                new Product("monitor", 350000, "SOLD_OUT"),
                new Product("speaker", 400000, "SALE")
        );

        System.out.println("상품들의 이름 리스트 반환");
        List<String> list7 = products.stream()
                .map(product -> product.getName())
                .toList();
        System.out.println(list7);

        System.out.println("20만원 이상인 상품들의 이름 리스트 반환");
        List<String> list8 = products.stream()
                .filter(product -> product.getPrice() >= 200000)
                .map(Product::getName)
                .toList();
        System.out.println(list8);

        System.out.println("판매중인 상품의 가격 합");
        int sum2 = products.stream()
                .filter(p -> p.getStatus().equals("SALE"))
                .mapToInt(p -> p.getPrice())
                //map만 쓰면 오류남
                .sum();
        System.out.println(sum2);

        System.out.println("판매 중이면서 20만원 이상인 상품들의 이름 리스트 반환");
        List<String> saleName = products.stream()
                .filter(p -> p.getStatus().equals("SALE"))
                .filter(p -> p.getPrice() >= 200000)
                .map(p -> p.getName())
                .toList();
        System.out.println(saleName);
    }
}
