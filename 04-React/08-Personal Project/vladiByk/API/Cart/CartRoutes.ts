import express from "express";
const cartRouter = express.Router();

import { getAllCarts, createCart, getCart, updateCart, deleteProduct } from "./CartController";

cartRouter.route("/").get(getAllCarts).post(createCart).patch(updateCart);

cartRouter.route("/:id").get(getCart);

cartRouter.route("/:productId").delete(deleteProduct);

// cartRouter.route("/:updateCart").patch(updateCart);

export default cartRouter;
