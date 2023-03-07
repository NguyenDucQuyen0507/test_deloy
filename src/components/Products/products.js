import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../data/products";
import { shoppingCart } from "../../hooks/shoppingCart";
import style from "./cart.module.css";
function Products() {
  const { add } = shoppingCart((state) => state);
  return (
    <div className="container">
      <div className="row">
        {productsData.map((p) => {
          return (
            <div key={p.id} className="col-4 text-center">
              <p>{p.name} : </p>
              <img
                src={p.imageUrl}
                alt=""
                style={{ width: "100%", display: "block" }}
              />
              <p>{p.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  //product, quantity phải trùng tên bên shoppingCart
                  add({ product: p, quantity: 1 });
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center">
        <Link to={"/save-products"}>
          <button className="btn btn-success my-5">
            Nơi lưu sản phẩm đã chọn
          </button>
        </Link>
        <div className={style.number_cart}>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <span className={style.buy_number}>0</span>
        </div>
      </div>
    </div>
  );
}

export default Products;
