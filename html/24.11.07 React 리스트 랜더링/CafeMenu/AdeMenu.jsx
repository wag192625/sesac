export default function AdeMenu({ ade, price }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{ade}</div>
      <div>{price}</div>
    </li>
  );
}
