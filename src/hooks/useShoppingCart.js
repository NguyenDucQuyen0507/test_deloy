import React from "react";

import create from "zustand";
import { persist, devtools } from "zustand/middleware";
//persist là một middleware giúp lưu trữ giá trị vào localstore khi reload trang vẫn giữ giá trị cũ

//
const persistOptions = {
  name: "food-storage", // unique name
  // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};
export const useShoppingCart = create(
  persist(
    devtools(
      (set, get) => ({
        count: 0,
        bears: 9,
        //lúc ban đầu ta set cứng là false là koh có j hết
        loading: false,
        //khai bao một mảng rỗng để lưu giá trị vừa lấy dc
        products: [],

        increase: () =>
          set((state) => ({ count: state.count + 1 }), false, {
            type: "increase",
          }),
        //Nếu mình sửa thành true thì mình thay đổi thằng nào thì thằng kia sẽ set về 0 (Nghĩa là không có giá trị để hiển thị)
        decrease: () =>
          set((state) => ({ count: state.count - 1 }), false, {
            type: "decrease",
          }),
        getProducts: async () => {
          //muốn truy xuất các state ra bên ngoài thì ta lấy nó ra ta phải truyền get vào, vì nó state chung nên
          const myCounts = get().count;
          console.log("Counts", myCounts);

          //bắt dầu lấy thì set nó true để nó hiện lên load lên
          set({ loading: true }, false, { type: "load" });
          const responsive = await fetch("http://localhost:9000/prod");
          const results = await responsive.json();
          //đưa giá trị vừa lấy dc vào mảng
          set({ products: results }, false, { type: "getProducts" });
          //khi thành công thì tắt load
          set({ loading: false }, false, { type: "done" });
          console.log(results);
        },
      }),
      persistOptions
    )
  )
);
