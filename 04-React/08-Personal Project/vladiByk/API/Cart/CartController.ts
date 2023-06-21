import { NextFunction, Response, Request } from "express";
import Cart from "./CartModel";
import User from "../User/UserModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const getAllCarts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carts = await Cart.find({});

    res.status(200).json({ ok: true, carts });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await Cart.create({});

    res.status(200).json({ ok: true, cart });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { product, cartId, qty } = req.body;

    const cart = await Cart.findById(cartId);
    if (!cart) return;

    const productExists = cart?.cart.find(
      (productItem) => productItem._id === product._id
    );

    if (productExists)
      await Cart.updateOne(
        {
          _id: cartId,
          cart: { $elemMatch: { _id: product._id } },
        },
        {
          $inc: { "cart.$.qty": qty },
        }
      );
    else {
      cart.cart.push({ ...product, qty });
    }

    await cart.save();

    res.status(200).json({ ok: true, cart });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;

    if (!secret) throw new Error("Missing jwt secret");

    const { userId } = req.cookies;

    if (!userId) throw new Error("Missing token from cookise");

    const decodedToken = jwt.decode(userId, secret);

    const user = await User.findById(decodedToken.userId).populate("carts");

    const findActiveCart = user?.carts.find((cart) => cart.isActive === true);

    if (!findActiveCart) return;

    const cartId = findActiveCart._id;

    const cart = await Cart.findById(cartId);
    if (!cart) return;

    const filterCart = cart.cart.filter((product) => product._id !== productId);

    cart.cart = [...filterCart];

    await cart.save();

    res.status(200).json({ ok: true, cart });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const cart = await Cart.findById(id);

    res.status(200).json({ ok: true, cart });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
