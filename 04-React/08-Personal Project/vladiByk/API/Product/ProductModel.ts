import mongoose, { Schema } from "mongoose";

export interface ProductInterface {
  name: string;
  imgUrl: string;
  price: number;
  _id: string;
}

export const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ProductInterface>("Product", ProductSchema);
