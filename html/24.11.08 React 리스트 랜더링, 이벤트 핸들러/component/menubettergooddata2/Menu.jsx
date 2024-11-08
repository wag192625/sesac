import React from "react";
import MenuCategory from "./MenuCategory";
export default function Menu() {
  const beverages = {
    categories: ["coffee", "ade", "tea"],
    result: {
      coffee: [
        { name: "아메리카노", price: "5.0/5.5" },
        { name: "카페 라떼", price: "6.0/6.5" },
        { name: "바닐라 라떼", price: "6.0/6.5" },
      ],
      ade: [
        { name: "레몬에이드", price: "6.0" },
        { name: "자몽에이드", price: "6.0" },
        { name: "유자에이드", price: "6.0" },
      ],
      tea: [
        { name: "녹차", price: "6.0" },
        { name: "둥굴레차", price: "6.0" },
        { name: "홍차", price: "6.0" },
      ],
      // 생각해보니 카테고리를 따로 빼고
      // 그걸 키 값으로 설정하고 각 키에 대응하는 오브젝트를 나누는게 좋아보여서 바꿈
    },
  };
  const { categories, result } = beverages;
  // 구조 분해 할당

  // const beveragesList = [[coffee, result[coffee]], [tea, result[tea]]]
  const beveragesList = categories.map((category) => {
    return [category, result[category]];
  }); //  beverages.categories의 각각의 원소값을 나누고 리스트 형식으로 리턴
  const menuCategories = beveragesList.map((el) => {
    const [category, beverages] = el;
    return <MenuCategory category={category} beverages={beverages}></MenuCategory>;
  });

  return (
    <>
      <h1 className="text-center">MenuBetter</h1>
      <main>{menuCategories}</main>
    </>
  );
}
