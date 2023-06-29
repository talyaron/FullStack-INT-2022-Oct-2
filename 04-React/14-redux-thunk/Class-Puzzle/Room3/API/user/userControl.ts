import UserModel from "./userModel";
import * as dotenv from "dotenv";
dotenv.config();


export async function addUser (req: any, res: any) {
    try {
      const { name, age, url } = req.body;

      const userDB = await UserModel.create({ name, age, url });

      res.send({ ok: true, user: userDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  

export const getUsers = async (req: any, res: any) => {
  try {

    const { name, age, url } = req.body;
    const userDB = await UserModel.find({ });

    if (!userDB) {
      res.status(401).send({
        error: "userDB not found",
      });
      return;
    }

    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


// export const getCurrentUser = async (req: any, res: any) => {
//   try {
//     const secret = process.env.JWT_SECRET;
//     const { currentUser } = req.cookies;
//     if (!secret) throw new Error("No secret");
//     const decoded = jwt.decode(currentUser, secret);
//     const { userId } = decoded;
//     const userDB = await UserModel.findById(userId);
//     res.status(201).send({ ok: true, userDB });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };


// export const logout = async (req: any, res: any) => {
//   try {
//     res.clearCookie("currentUser");
//     res.send("Cookie deleted!");
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };