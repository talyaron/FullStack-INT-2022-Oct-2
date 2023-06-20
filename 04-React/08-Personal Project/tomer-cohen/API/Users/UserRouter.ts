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
} from "./UserControle";

router
.get("/get-users",getUsers)
.post("/add-user",addUser)
.get("/get-user",getUser)
.post("/login",login)
.get("/logout",logout)
.delete("/delete-user", isAdmin, deleteUser)
.patch("/update-user-type",updateUserType)


export default router;