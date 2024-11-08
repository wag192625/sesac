import React from "react";
import MenuCategory from "./MenuCategory";
export default function Menu() {
  const beverages = {
    categories: ["coffee", "ade", "tea"],
    result: [
      {
        category: "coffee",
        beverages: [
          { name: "아메리카노", price: "5.0/5.5" },
          { name: "카페 라떼", price: "6.0/6.5" },
          { name: "바닐라 라떼", price: "6.0/6.5" },
        ],
      },
      {
        category: "ade",
        beverages: [
          { name: "레몬에이드", price: "6.0" },
          { name: "자몽에이드", price: "6.0" },
          { name: "유자에이드", price: "6.0" },
        ],
      },

      {
        category: "tea",
        beverages: [
          { name: "녹차", price: "6.0" },
          { name: "둥굴레차", price: "6.0" },
          { name: "홍차", price: "6.0" },
        ],
      },
    ],
  };
  const { categories, result } = beverages;

  // const beveragesList = [[coffee, result[coffee]], [tea, result[tea]]]
  const beveragesList = result.map((el) => {
    return [el.category, el.beverages];
  });
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
