function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  // TODO: Render the "✅" icon right after the name property when the isPacked is true.
  // NOTE: Ex) Kiyoung ✅
  return <li className="item">{name}</li>;
}

export default Item;
