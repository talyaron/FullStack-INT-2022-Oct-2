import { NextFunction, Response, Request } from "express";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const setUserCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!secret) throw new Error("Missing jwt secret");

    const user = req.body;

    const token = jwt.encode({ userId: user._id, role: "public" }, secret);

    if (!token) throw new Error("Missing token...");

    res.cookie("userId", token, {
      httpOnly: true,
    });

    res.status(200).json({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
