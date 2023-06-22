import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface Image {
    title: string;
    url: string;
    id: string;
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
    
    reducers:{
    addImage:(state,payload:PayloadAction<Image>) =>{
       state.images =[...state.images,payload.payload] 
    }
    }
  })


  export const {addImage} =  imagesSlice.actions

  export const selectImages = (state: RootState) => state.images.images

  export default imagesSlice.reducer