import mongoose, { Schema } from "mongoose";

export enum USER_TYPES {
  public = "public",
  admin = "admin",
}

type USER_TYPES_LITERALS = keyof typeof USER_TYPES;

export interface IUser {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
  userType: USER_TYPES_LITERALS;
}

const UserSchema = new Schema({
  email: String,
  fullName: String,
  phoneNumber: String,
  password: String,
  userType: {
    type: String,
    enum: USER_TYPES,
    default: USER_TYPES.public,
  },
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
