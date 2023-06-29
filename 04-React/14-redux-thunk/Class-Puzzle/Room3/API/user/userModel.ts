import mongoose, { Schema } from "mongoose";

interface User {
  name: string;
  username: string;
  email: string;
  phone:number;
  password:string;
  gender:string;
  ROLE: ROLE;
}

export enum ROLE {
  PUBLIC = "public",
  ADMIN = "admin",
}

export const UserSchema = new Schema<User>({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },

});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;