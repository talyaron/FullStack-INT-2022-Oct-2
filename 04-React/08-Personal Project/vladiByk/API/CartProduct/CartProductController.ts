import { NextFunction, Response, Request } from "express";
import CartProduct from "./CartProductModel";
import Product from "../Product/ProductModel";

export const getAllCartProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await CartProduct.find({}).populate("product");

    res.status(200).json({ ok: true, products });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createCartProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId, qty } = req.body;

    const product = await Product.findById(productId);

    const cartProduct = await CartProduct.create({
      product,
      qty,
    });

    res.status(200).json({ ok: true, cartProduct });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateCartProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cartProductId, amount } = req.body;

    await CartProduct.findByIdAndUpdate(cartProductId, {
      amount,
    });

    const cartProduct = await CartProduct.findById(cartProductId);

    res.status(200).json({ ok: true, cartProduct });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getCartProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const product = await CartProduct.findById(id).populate("product");

    res.status(200).json({ ok: true, product });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
