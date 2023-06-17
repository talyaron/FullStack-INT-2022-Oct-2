import express from "express";
const app = express();
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
dotenv.config();
const uri = process.env.MONGODB_URI;
//בלי זה אין אפשרות להשתמש בreq.body
app.use(express.json());
app.use(cookieParser())

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

app.use(express.static("./client"));

import userRouter from "./API/Users/UserRouter";
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
