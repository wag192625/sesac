import React from "react";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ category, beverages }) {
  const menuList = beverages.map((beverage) => {
    return <MenuCategoryItem {...beverage}></MenuCategoryItem>;
    // 부모(Menu) 컴포넌트에서 가져온 beverages의 카테고리와 음료의 종류를 받아와서
    // 자식한테 최상위 부모의 음료 종류 중 필터를 거친 객체를 뿌림
  });

  return (
    <section>
      <h2 className="text-center">{category}</h2>
      <ul>{menuList}</ul>
    </section>
  );
}
