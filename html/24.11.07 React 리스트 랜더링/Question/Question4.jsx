import React from "react";

export default function Question4() {
  const imgUrls = [
    "https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg",
    "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3154.jpg",
    "https://images.dog.ceo/breeds/malamute/n02110063_16752.jpg",
    "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg",
  ];
  const imgs = imgUrls.map((el) => {
    return <img src={el} alt="이미지" style={{ width: 100 }} />;
  });
  return <div>{imgs}</div>;
}
