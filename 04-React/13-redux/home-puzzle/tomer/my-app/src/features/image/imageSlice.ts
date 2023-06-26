import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"


interface Image{
    id:string;
    title: string;
    url: string;
}

export interface ImagesState{
    images: Image[]
    status: "idle" | "loading" | "failed"
}

const initialState: ImagesState = {
    images: [],
    status: "idle"
}


export const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers:{
        addImage: (state: {images: any[];},payload:PayloadAction<Image>)=>{
            state.images = [...state.images,payload.payload]
        },
        updateImage: (state:{images: any[]},payload: PayloadAction<Image>)=>{
            const index = state.images.findIndex(img=>img.id===payload.payload.id);
            state.images[index] = payload.payload
        },
        deleteImage: (state: { images: any[] }, payload: PayloadAction<Image>) => {
            const index = state.images.findIndex(img => img.id === payload.payload.id);
            if (index !== -1) {
              state.images.splice(index, 1);
            }
          } 
    }

})

export const {addImage} =imagesSlice.actions
export const {updateImage} = imagesSlice.actions
export const {deleteImage} = imagesSlice.actions

export const selectImages = (state: RootState) => state.images.images

export default imagesSlice.reducer