import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IImage } from "./imgBoxSlice";

const getImages = async () => {
  try {
    const { data } = await axios.get('/api/images/get-images');
    if (!data) {
      throw new Error("Data not found");
    }
    const { images } = data;
    if (!images) {
      throw new Error("No images found in the database");
    }
    return images as IImage[];
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be caught by createAsyncThunk
  }
};

const createImage = async (imageData: IImage) => {
    try {
      const { data } = await axios.post("/api/images/create-image", imageData);
      if (!data) {
        throw new Error("Data not found");
      }
      console.log(data);
      const { image } = data;
      if (!image) {
        throw new Error("No image returned from the server");
      }
      return image as IImage;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
export const getImagesAsync = createAsyncThunk(
  "images/getImages",
  async () => {
    return await getImages();
  }
);

export const createImageAsync = createAsyncThunk(
    "images/createImage",
    async (imageData: IImage) => {
      return await createImage(imageData);
    }
  );