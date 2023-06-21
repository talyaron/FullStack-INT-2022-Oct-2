import { NextFunction, Response, Request } from "express";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;
import User from "./UserModel";
import Cart from "../Cart/CartModel";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({});

    res.status(200).json({ ok: true, users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName, email, password } = req.body;

    const cart = await Cart.create({});

    const user = await await User.create({
      userName,
      email,
      password,
      carts: [cart._id],
    });

    req.body = user.populate("carts");

    next();
    // res.status(200).json({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!secret) throw new Error("Missing jwt secret");

    const { userId } = req.cookies;

    if (!userId) throw new Error("Missing token from cookise");

    const decodedToken = jwt.decode(userId, secret);

    const user = await User.findById(decodedToken.userId).populate("carts");

    res.status(200).json({ ok: true, user });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const confirmUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.find({ email, password });

    if (!user) throw new Error("user not found");

    const userId = user[0]._id;

    if (!secret) throw new Error("Missing jwt secret");

    const token = jwt.encode({ userId, role: "public" }, secret);

    if (!token) throw new Error("Missing token...");

    res.cookie("userId", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    });

    res.status(200).json({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const clearUserCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("userId");

    res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const userPurchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!secret) throw new Error("Missing jwt secret");

    const { userId } = req.cookies;

    if (!userId) throw new Error("Missing token from cookise");

    const decodedToken = jwt.decode(userId, secret);

    const user = await User.findById(decodedToken.userId).populate("carts");

    if (!user) return;

    const cart = user.carts.find((cart) => cart.isActive === true);

    if (!cart) return;

    const cartId = cart._id;

    await Cart.findByIdAndUpdate(cartId, { isActive: false });

    const newCart = await Cart.create({});

    user.carts.push(newCart);

    user.save();

    res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
