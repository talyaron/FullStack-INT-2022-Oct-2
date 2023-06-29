/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";

const USER_URL = "api/v1/users";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get(`${USER_URL}/getUser`);
  return response.data.user;
});

export interface UserType {
  userName: string;
  email: string;
  password: string;
  _id: string;
}

const initUserState: UserType = {
  userName: "",
  email: "",
  password: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initUserState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initUserState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
