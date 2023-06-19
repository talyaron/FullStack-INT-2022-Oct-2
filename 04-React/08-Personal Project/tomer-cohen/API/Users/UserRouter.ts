import express from "express";
const router = express.Router();
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
.delete("/delete-user",deleteUser)
.patch("/update-user-type",updateUserType)

export default router;