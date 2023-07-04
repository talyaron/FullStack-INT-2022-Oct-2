import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

async function getUsers() {
    const response = await axios.get('/api/user/get-users');
  
    const { usersDB } = response.data;
    return usersDB;
}

export const getUsersAsync = createAsyncThunk(
    "user/getUsers",
    async () => {
        return await getUsers()
    })
