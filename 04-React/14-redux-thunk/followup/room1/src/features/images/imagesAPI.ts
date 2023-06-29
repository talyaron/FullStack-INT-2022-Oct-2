import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

async function getRandomDog() {
    const data = await axios.get('https://dog.ceo/api/breeds/image/random')
  
    const { message } = data.data;
    return message;
}

export const getRandomDogAsync = createAsyncThunk(
    "images/getRandomDog",
    async () => {
        return await getRandomDog()
    })
