// import "./App.css";
import React from "react";
import { useShoppingCart } from "../hooks/useShoppingCart";
function Buttons() {
  const { decrease, increase, getProducts, count, products, bears } =
    useShoppingCart((state) => state);

  //   React.useEffect(() => {
  //     const unsub1 = useShoppingCart.subscribe(() => {
  //       return console.log;
  //     });
  //   }, []);
  return (
    <div className="App" style={{ textAlign: "center", fontSize: 40 }}>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          increase();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          getProducts();
        }}
      >
        Get
      </button>
      <div>Count: {count}</div>
      <div>Bear: {bears}</div>

      <div>
        {products &&
          products.map((p) => {
            return (
              <div key={p._id}>
                <strong>{p.name}</strong>
              </div>
            );
          })}
      </div>
      {/* <button
        onClick={() => {
          useShoppingCart.setState({ bears: 10 });
        }}
      >
        Non React
      </button> */}
    </div>
  );
}

export default Buttons;
