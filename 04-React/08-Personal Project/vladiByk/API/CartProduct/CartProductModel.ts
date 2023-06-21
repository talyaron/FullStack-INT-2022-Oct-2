import mongoose, { Schema } from "mongoose";

export interface CartProductInterface {
  name: string;
  imgUrl:string;
  price: number;
  qty: number;
  _id: string;
}

export const CartProductSchema: Schema = new Schema(
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
    qty: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<CartProductInterface>(
  "CartProduct",
  CartProductSchema
);
