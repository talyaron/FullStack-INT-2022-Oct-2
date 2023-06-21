import express from "express";
const router = express.Router();
import { isAdmin } from "./UserMiddelware";
import {
getUsers,
addUser,
login,
deleteUser,
updateUserType,
logout,
getUser,
getUserById,
updateUserName,
} from "./UserControle";

router
.get("/get-users",getUsers)
.post("/add-user",addUser)
.get("/get-user",getUser)
.post("/login",login)
.patch("/update-info",updateUserName)
.get("/logout",logout)
.delete("/delete-user", isAdmin, deleteUser)
.patch("/update-user-type",updateUserType)
.get("/get-user-by-id",getUserById)


export default router;