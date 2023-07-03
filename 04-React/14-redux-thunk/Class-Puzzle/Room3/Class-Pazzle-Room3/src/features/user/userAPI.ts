import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

async function getUsers() {
    const response = await axios.get('/api/user/get-users');
  
    const { userDB } = response.data;
    return userDB;
}

export const getUsersAsync = createAsyncThunk(
    "user/getUsers",
    async () => {
        return await getUsers()
    })
