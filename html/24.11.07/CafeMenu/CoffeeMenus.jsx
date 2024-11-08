export default function CoffeeMenu({ coffee, price }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{coffee}</div>
      <div>{price}</div>
    </li>
  );
}
