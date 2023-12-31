
import UserModel from "./UserModel";
import jwt from "jwt-simple"
import { Error } from "mongoose";
const secret = process.env.JWT_SECRET;

export const getUsers = async (req: any, res: any) => {
  try {
    const usersDB = await UserModel.find({});
    console.log(usersDB)
    res.send({ usersDB, ok:true });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};
export const logout = (req: any, res: any) => {
  try {
    res.clearCookie('user');
    res.send('Cookie deleted');

    res.status(200).send({ ok: true});

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });

  }
};

export const addUser = async (req: any, res: any) => {
  try {
    const { userName, password, email } = req.body;
    console.log(userName, password, email);

    const userDB = await UserModel.create({ userName, password, email });

    res.status(201).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};


export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const userDB = await UserModel.findOne({ email, password });
    if (!userDB) {
      return res.status(401).json({ message: "email or password are not correct" });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Missing JWT secret");

    const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    console.log(token);
    res.cookie("user", token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });



    res.status(201).send({ ok: true , userDB});
  } catch (error) {
    res.status(500).send({Error: Error.Messages})
    console.error(error);
    
  }
};


export const deleteUser = async (req: any, res: any) => {
  try {
    const { _id } = req.body;

    await UserModel.findByIdAndDelete(_id);
    const users = await UserModel.find({});

    res.status(201).send({ ok: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to delete user.' });
  }
};


export const updateUserType = async (req: any, res: any) => {
  try {
    const { userId, userType } = req.body;
    const userDB = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { userType }
    );
    res.status(201).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};
export const getUserById  = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    if (!secret) throw new Error("No secret");
    
    const decoded = jwt.decode(user, secret);
    
    const { userId } = decoded;

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const updateUserName = async (req: any, res: any) => {
  try {
    const { userName, email , userId } = req.body;

    if (!userId) {
      return res.status(400).send({ error: "userId is required" });
    }

    const userDB = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { userName, email } },
      { new: true }
    );

    if (!userDB) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send({ ok: true, user: userDB });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
};



export const getUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    if (!secret) throw new Error("No secret");

    const decoded = jwt.decode(user, secret);
    console.log(decoded);

    const { userId, role } = decoded;

    if (role === "admin") console.log("Full access");

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};