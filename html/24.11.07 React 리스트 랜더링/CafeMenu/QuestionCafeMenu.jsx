import CoffeeMenu from "./CoffeeMenus";
import AdeMenu from "./adeMenu";
export default function QuestionCafeMenu() {
  const coffeeMenu = [
    { coffee: "아메리카노", price: "5.0/5.5" },
    { coffee: "카페라떼", price: "6.0/6.5" },
    { coffee: "바닐라라떼", price: "6.0/6.5" },
    { coffee: "카라멜마끼아또", price: "6.5/7.0" },
  ];
  const adeMenu = [
    { ade: "레몬에이드", price: "6.0" },
    { ade: "자몽에이드", price: "6.0" },
    { ade: "유자에이드", price: "6.0" },
  ];

  const coffees = coffeeMenu.map(({ coffee, price }) => {
    return <CoffeeMenu coffee={coffee} price={price}></CoffeeMenu>;
  });

  const ades = adeMenu.map(({ ade, price }) => {
    return <AdeMenu ade={ade} price={price}></AdeMenu>;
  });
  return (
    <div style={{ width: "90%", margin: "0 auto", textAlign: "center", justifyContent: "center" }}>
      <header>
        <h1>Menu</h1>
      </header>
      <section>
        <h2>COFFEE</h2>
        <ul style={{ margin: "0 auto" }}>{coffees}</ul>
      </section>
      <section>
        <h2>ADE</h2>
        <ul>{ades}</ul>
      </section>
    </div>
  );
}
