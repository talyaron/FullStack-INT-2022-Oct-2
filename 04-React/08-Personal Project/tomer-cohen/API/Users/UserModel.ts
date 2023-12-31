import express from "express";
import mongoose, { Schema } from "mongoose";

interface User {
  userName: string;
  password: string;
  email: string;
}

export enum UserType {
  GUST = "gust",
  ADMIN = "admin",
}

export const UserSchema = new Schema({
  userName: { require: true, type: String },
  password: { require: true, type: String },
  email: String,
  UserType: {
    type: String,
    enum: UserType,
    default: UserType.GUST,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;