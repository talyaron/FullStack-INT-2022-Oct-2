import express from "express";
const app = express();
const cors = require("cors");
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

app.use(cookieParser());

//connecting DB//
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

//getting data from public
app.use(express.json(), cors());

import userRouter from "./enteties/User/UserRoute";
app.use("/user", userRouter);

import eventRouter from './enteties/Event/EventRoute'
app.use("/event", eventRouter);

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
