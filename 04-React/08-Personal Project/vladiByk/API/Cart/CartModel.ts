import mongoose, { Schema } from "mongoose";

interface CartProductInterface {
  name: string;
  imgUrl: string;
  price: number;
  qty: number;
  _id: string;
}

export interface CartInterface {
  cart: CartProductInterface[];
  isActive: boolean;
  _id: string;
}

export const CartSchema: Schema = new Schema(
  {
    cart: {
      type: [{}],
      // required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<CartInterface>("Cart", CartSchema);
