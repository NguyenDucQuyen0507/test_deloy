import React from "react";
import { shoppingCart } from "../../hooks/shoppingCart";
export default function Save() {
  const { items, remove, increase, decrease } = shoppingCart((state) => state);
  console.log(items);
  return (
    <div>
      {items.map((i, index) => {
        return (
          <div key={index} className="d-flex mt-3">
            <p className="mx-2">{i.product.name}</p>
            <p className="mx-2">{i.product.price}</p>
            <button
              className="btn btn-sm btn-success"
              onClick={() => {
                decrease(i.product.id);
              }}
            >
              _
            </button>
            <p className="mx-2">{i.quantity}</p>
            <button
              className="btn btn-sm btn-success"
              onClick={() => {
                increase(i.product.id);
              }}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa không?")) {
                  remove(i.product.id);
                }
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
