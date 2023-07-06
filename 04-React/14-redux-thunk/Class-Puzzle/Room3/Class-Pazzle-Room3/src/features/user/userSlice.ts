import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { getUsersAsync } from "./userAPI";

interface User {
  _id: string;
  name: string;
  age: number;
  url: string;

}

export interface UserState {
  users: User[];
  status: "idle" | "loading" | "failed"
}

const initialState: UserState = {
  users: [],
  status: "idle",
}



export const usersSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createUser: (state: { users: User[] }, action:PayloadAction<User>) => {
      const { name, age, url, _id } = action.payload
      
      state.users.push( {name, age, url, _id} )
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.pending, (state) => {
      state.status = "loading"
    })
    .addCase(getUsersAsync.fulfilled, (state, action) => {
      state.status = "idle"
      state.users = action.payload;
    })
    .addCase(getUsersAsync.rejected, (state) => {
      state.status = "failed"
    })
    

  }
})

export const { createUser } = usersSlice.actions


export const selectUsers = (state: RootState) => state.user.users


export default usersSlice.reducer
