import React from "react";

export default function MenuCategoryItem({ name, price }) {
  return (
    <li className="flex justify-between">
      <div>{name}</div>
      <div>{price}</div>
    </li>
    // 부모 컴포넌트에서 가져온 정제 객체를 name과 price라는 키의 밸류값을 뿌림
  );
}
