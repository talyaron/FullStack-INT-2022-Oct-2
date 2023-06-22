import { NextFunction, Response, Request } from "express";
import Product from "./ProductModel";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find({});

    res.status(200).json({ ok: true, products });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, imgUrl, price } = req.body;

    const product = await Product.create({ name, imgUrl, price });

    res.status(200).json({ ok: true, product });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.status(200).json({ ok: true, product });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
