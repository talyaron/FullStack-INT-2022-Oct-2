import mongoose, { Schema } from "mongoose";

interface User {
  name: string;
  age: number;
  url: string;

}



export const UserSchema = new Schema<User>({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },

});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;