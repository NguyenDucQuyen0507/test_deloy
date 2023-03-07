import React from "react";
import create from "zustand";
import { persist, devtools } from "zustand/middleware";
//persist là một middleware giúp lưu trữ giá trị vào localstore khi reload trang vẫn giữ giá trị cũ

//
const persistOptions = {
  name: "shpping-storage", // unique name
  // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};
export const shoppingCart = create(
  persist(
    devtools(
      (set, get) => ({
        items: [],
        add: ({ product, quantity }) => {
          const item = get().items;
          console.log(item);
          const found = item.find((x) => x.product.id === product.id);
          if (found) {
            //Nếu có id đó thì tăng số lượng lên 1
            found.quantity++;
          } else {
            //không phải id đó thì đẩy nó vào
            item.push({ product, quantity });
          }
          return set({ items: item }, false, { type: "addToCart" });
        },
        remove: (id) => {
          const item = get().items;
          //lọc ra những thằng mà khác id cần tìm là xóa dc
          const newItem = item.filter((x) => x.product.id !== id);
          return set({ items: newItem }, false, { type: "removeToCart" });
        },
        increase: (id) => {
          const item = get().items;
          const found = item.find((x) => x.product.id === id);
          if (found) {
            found.quantity++;
            return set({ items: item }, false, { type: "increase" });
          }
        },
        decrease: (id) => {
          const item = get().items;
          const found = item.find((x) => x.product.id === id);
          if (found.quantity === 1) {
            //Nếu số lượng bằng 1 thì tìm đúng id mà khác nó r hiển thị id khác đó ra
            const newItem = item.filter((x) => x.product.id !== id);
            return set({ items: newItem }, false, { type: "decrease" });
          } else {
            found.quantity--;
            return set({ items: item }, false, { type: "decrease" });
          }
        },
      }),
      persistOptions
    )
  )
);
