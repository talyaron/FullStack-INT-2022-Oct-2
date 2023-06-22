import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
