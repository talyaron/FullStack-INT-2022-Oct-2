import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import {  getRandomDogAsync } from "./imagesAPI"

export interface Image {
    id: string
    url: string
    name: string
}

export interface ImagesState {
  images:Image[];
  status: "idle" | "loading" | "failed"
}

const initialState: ImagesState = {
  images:[],
  status: "idle",
}


export const imagesSlice = createSlice({
  name: "images",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addImage: (state ,action:PayloadAction<Image>) => {
        state.images = [...state.images,action.payload]
    },
    updateImage: (state ,action:PayloadAction<Image>) => {
      try { 
      
        const index = state.images.findIndex((image)=>image.id === action.payload.id);
        if(index === -1) throw new Error("Image not found");
        state.images[index] = action.payload;

      } catch (error) {
        console.error(error);
      }
       
    },
    deleteImage: (state ,action:PayloadAction<Image>) => {
      try {
        const index = state.images.findIndex((image)=>image.id === action.payload.id);
        if(index === -1) throw new Error("Image not found");
        state.images.splice(index,1);

      } catch (error) {
        console.error(error);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomDogAsync.pending, state =>{state.status = "loading"})
    .addCase(getRandomDogAsync.fulfilled, (state, action) => {
      state.status ="idle"
      const image: Image = {url: action.payload, id: `Math.random()`,name:"Random dog"}
      state.images.push(image)
    })
    .addCase(getRandomDogAsync.rejected, state =>{state.status="failed"} )  
  }
})

export const { addImage,updateImage,deleteImage } = imagesSlice.actions


export const selectImages = (state: RootState) => state.images.images
export const selectStatus = (state: RootState) => state.images.status

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default imagesSlice.reducer
