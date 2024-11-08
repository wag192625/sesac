import React from "react";
import MenuCategory from "./MenuCategory";
export default function Menu() {
  const beverages = [
    { name: "아메리카노", price: "5.0/5.5", category: "coffee" },
    { name: "카페 라떼", price: "6.0/6.5", category: "coffee" },
    { name: "바닐라 라떼", price: "6.0/6.5", category: "coffee" },

    { name: "레몬에이드", price: "6.0", category: "ade" },
    { name: "자몽에이드", price: "6.0", category: "ade" },
    { name: "유자에이드", price: "6.0", category: "ade" },

    { name: "녹차", price: "6.0", category: "tea" },
    { name: "둥굴레차", price: "6.0", category: "tea" },
    { name: "홍차", price: "6.0", category: "tea" },
  ];
  // 모든 음료수들의 배열을 beverages라는 하나의 배열로 묶고
  // 각 음료의 종류마다 한 종류의 카테고리로 묶음

  const coffee = beverages.filter((beverage) => {
    return beverage.category === "coffee";
  });
  const ade = beverages.filter((beverage) => {
    return beverage.category === "ade";
  });
  const tea = beverages.filter((beverage) => {
    return beverage.category === "tea";
  });
  // 필터로 beverages 안의 각 카테고리를 filter로 걸러서
  // 음료 종류마다 각각의 변수로 할당
  // 반복이 보여서 다음 버전으로

  return (
    <>
      <h1 className="text-center">MenuBetter</h1>
      <main>
        <MenuCategory category={"coffee"} beverages={coffee}></MenuCategory>
        <MenuCategory category={"ade"} beverages={ade}></MenuCategory>
        <MenuCategory category={"tea"} beverages={tea}></MenuCategory>
      </main>
    </>
  );
}
