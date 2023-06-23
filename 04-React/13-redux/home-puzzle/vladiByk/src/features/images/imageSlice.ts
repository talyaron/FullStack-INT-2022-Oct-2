import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface ImageType {
  id: number
  imgUrl: string
  alt: string
}

interface UseImagesType {
  images: ImageType[]
}

const initialState: UseImagesType = {
  images: [
    {
      id: 1,
      imgUrl:
        "https://2.bp.blogspot.com/-dCEAFTeudjo/VjPJWf5XQ4I/AAAAAAABftk/HZV11_BA-6k/s1600/funny-animals-184-04.jpg",
      alt: "singing frog",
    },
    {
      id: 2,
      imgUrl:
        "https://3.bp.blogspot.com/-8xCJ9XEj_yY/VjPJ2ZtoL9I/AAAAAAABfu8/hCAos60eAr4/s1600/funny-animals-184-15.jpg",
      alt: "Lion in a cart",
    },
    {
      id: 3,
      imgUrl:
        "https://4.bp.blogspot.com/-gnOZM-rxM2E/VjPJ20gilVI/AAAAAAABfvE/-uEgfSKmV8I/s1600/funny-animals-184-18.jpg",
      alt: "Lion in a cart",
    },
  ],
}

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload)
    },
    updateUrl: (state, action) => {
      const { newImgUrl, imgId } = action.payload
      const findImg = state.images.find((img) => img.id === imgId)
      if(findImg) findImg.imgUrl = newImgUrl

    },
    removeImage: (state, action) => {
      const id = Number(action.payload)
      state.images.splice(
        state.images.findIndex((img) => img.id === id),
        1,
      )
    },
  },
})

export const { addImage, removeImage, updateUrl } = imagesSlice.actions

export const selectImages = (state: RootState) => state.images.images

export default imagesSlice.reducer
