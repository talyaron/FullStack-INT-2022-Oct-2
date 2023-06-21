import express from "express";
const router = express.Router();

import { addUser, login, getCurrentUser, logout } from "./userControl";

router
    .post("/add-user", addUser)
    .post("/get-user", login)
    .get("/get-current-user", getCurrentUser)
    .get("/delete-cookie" , logout)

export default router;
