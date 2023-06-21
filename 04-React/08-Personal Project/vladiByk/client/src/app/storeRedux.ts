import { createSlice } from "@reduxjs/toolkit";
import { CartStateType } from "../context/CartProvider";
import { useEffect } from "react";
import axios from "axios";

interface UserType {
  userName: string;
  email: string;
  password: string;
  carts: CartStateType[];
  _id: string;
}

const initUser: UserType = {
  userName: "",
  email: "",
  password: "",
  carts: [],
  _id: "",
};

useEffect(() => {
  const fetchUser = async () => {
    const { data } = await axios.get("api/v1/users/getUser");
    const user = await data.user;
    login(user);
  };

  fetchUser();
}, []);

export interface state {
  value: UserType;
}

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initUser },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initUser;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
