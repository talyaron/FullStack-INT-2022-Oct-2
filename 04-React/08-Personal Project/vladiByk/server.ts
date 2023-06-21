import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { config } from "./API/config/config";
import productRouter from "./API/Product/productRoutes";
import cartProductRouter from "./API/CartProduct/CartProductRoutes";
import cartRouter from "./API/Cart/CartRoutes";
import userRouter from "./API/User/UserRoutes";

//routers

const app = express();

StartServer();

async function StartServer() {
  await mongoose
    .connect(config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
      console.log("Connected to DB...");
    })
    .catch((err) => {
      console.error(err);
    });

  //middleware
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  //routes
  app.use("/api/v1/products", productRouter);
  app.use("/api/v1/cartProducts", cartProductRouter);
  app.use("/api/v1/carts", cartRouter);
  app.use("/api/v1/users", userRouter);

  app.listen(config.server.port, () => {
    console.log(`Server is listening on port ${config.server.port}...`);
  });
}
