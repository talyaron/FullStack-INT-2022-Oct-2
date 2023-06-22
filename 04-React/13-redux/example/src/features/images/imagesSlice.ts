import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

 interface Image {
  id: string;
  title: string;
  url: string;
}

export interface ImagesState {
  images: Image[];
  status: "idle" | "loading" | "failed"
}

const initialState: ImagesState = {
  images: [],
  status: "idle",
}



export const imagesSlice = createSlice({
  name: "images",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addImage: (state: { images: any[]; }, payload:PayloadAction<Image>) => {
      
      state.images = [...state.images, payload.payload]
    }
  }
})

export const { addImage } = imagesSlice.actions


export const selectImages = (state: RootState) => state.images.images


export default imagesSlice.reducer
