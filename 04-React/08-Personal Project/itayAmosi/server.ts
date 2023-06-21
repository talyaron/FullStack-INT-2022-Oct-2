import express from "express";
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';

const app = express();

import * as dotenv from "dotenv";
dotenv.config();
app.use(cookieParser());
app.use(express.json());


import mongoose from "mongoose";
require('dotenv').config()

const uri: string | undefined = process.env.MONGODB_URI;
if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}




import projectRouter from "./API/project/projectRouter";
app.use('/api/project', projectRouter)


import userRouter from "./API/user/userRouter";
app.use('/api/user', userRouter)


import commentRouter from "./API/comment/commentRouter";
app.use('/api/comment', commentRouter)

//static file
app.use(express.static("./client"));

app.listen(4000, () => {
  console.log("server listen on port 4000");
});

