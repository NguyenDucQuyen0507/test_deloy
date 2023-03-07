import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products/products";
import SaveProduct from "./components/Cart/saveProducts";
import Buttons from "./components/buttons";

function App() {
  // const { count, bears, products } = useShoppingCart((state) => state);
  return (
    // <div className="App" style={{ textAlign: "center", fontSize: 40 }}>
    //   <div>Count: {count}</div>
    //   <div>Bears: {bears}</div>
    //   <Buttons />
    //   {products &&
    //     products.map((product) => {
    //       return (
    //         <div key={product._id}>
    //           <strong>{product.name}</strong>
    //         </div>
    //       );
    //     })}
    // </div>
    <div>
      <BrowserRouter>
        <Link to={"/products"}>SẢN PHẨM</Link>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/products" element={<Products />} />
          <Route path="/save-products" element={<SaveProduct />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
