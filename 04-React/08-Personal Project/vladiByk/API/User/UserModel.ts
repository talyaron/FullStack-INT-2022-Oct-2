import mongoose, { Schema } from "mongoose";
import { CartInterface } from "../Cart/CartModel";

export interface UserInterface {
  userName: string;
  password: string;
  email: string;
  carts: CartInterface[];
  _id: string;
}

export const UserSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    carts: {
      type: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<UserInterface>("User", UserSchema);
