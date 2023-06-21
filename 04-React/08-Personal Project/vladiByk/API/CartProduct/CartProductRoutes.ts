import express from "express";
const cartProductRouter = express.Router();

import {
  getAllCartProducts,
  createCartProduct,
  getCartProduct,
  updateCartProduct
} from "./CartProductController";

cartProductRouter.route("/").get(getAllCartProducts).post(createCartProduct);

cartProductRouter.route("/:id").get(getCartProduct);

cartProductRouter.route("/:updateCartProduct").patch(updateCartProduct);

export default cartProductRouter;
