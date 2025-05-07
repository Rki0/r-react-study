import { useState } from "react";

const initialProducts = [
  { id: 0, name: "Apple", count: 1 },
  { id: 1, name: "Banana", count: 3 },
  { id: 2, name: "Orange", count: 2 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    products.find((p) => p.id === productId)!.count++;
    setProducts(products);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} ({product.count})
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
