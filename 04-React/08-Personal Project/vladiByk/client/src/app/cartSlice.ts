import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface CartItemType {
  _id: string;
  name: string;
  price: number;
  qty: number;
  imgUrl: string;
}

export interface CartStateType {
  cart: CartItemType[];
  isActive: boolean;
  _id: string;
}

const initCartState: CartStateType = { cart: [], isActive: true, _id: "" };

const cartSlice = createSlice({
  name: "cart",
  initialState: initCartState,
  reducers: {
    addItems(state, action) {
      const { _id, name, price, imgUrl, qty } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      const newQty: number = itemExists ? itemExists.qty + qty : qty;

      const updatedCart = [
        ...filteredCart,
        { _id, name, price, qty: newQty, imgUrl },
      ];

      state.cart = [...updatedCart];
    },
    removeItem(state, action) {
      const { _id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      state.cart = [...filteredCart];
    },
    loadItems(state, action) {
      const { _id, name, price, imgUrl, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      const updatedCart = itemExists
        ? [...state.cart]
        : [...state.cart, { _id, name, price, imgUrl, qty }];

      state.cart = [...updatedCart];
    },
    submitCart(state) {
      state.cart = [];
    },
  },
});

export const { addItems, loadItems, submitCart, removeItem } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
