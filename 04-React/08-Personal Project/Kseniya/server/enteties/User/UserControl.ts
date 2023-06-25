import UserModel from "./UserModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const addUser = async (req: any, res: any) => {
  try {
    const user = req.body;
    const userDB = await UserModel.create({
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      password: user.password,
      userType: user.userType,
    });
    res.send(userDB);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const userDB = await UserModel.findOne({ email, password });

    if (!userDB) throw new Error("Username or password are incorrect");

    if (!secret) throw new Error("Missing jwt secret");

    const payload = { id: userDB._id, userType: userDB.userType };
    const token = jwt.encode(payload, secret);
    res.json({ token });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getUser = async (req: any, res: any) => {
  try {
    const encodedToken = req.headers.authorization?.split(" ")[1];
    const { id } = jwt.decode(encodedToken, secret!);
    const user = await UserModel.findById(id);
    if (!user) throw new Error("no user found");
    res.send(user);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await UserModel.find({});
    if (!users) throw new Error("no users found");
    res.send(users);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteUser = async (req: any, res: any) => {
  const _id  = req.params._id;
  try {
    await UserModel.findByIdAndRemove(_id);
    const users = await UserModel.find({});
    res.send(users);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
