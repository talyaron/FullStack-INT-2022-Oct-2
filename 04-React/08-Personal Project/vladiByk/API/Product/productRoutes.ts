import express from "express";
const productRouter = express.Router();

import { getAllProducts, createProduct, getProduct } from "./productController";

productRouter.route("/").get(getAllProducts).post(createProduct);

productRouter.route("/:id").get(getProduct);

export default productRouter;
