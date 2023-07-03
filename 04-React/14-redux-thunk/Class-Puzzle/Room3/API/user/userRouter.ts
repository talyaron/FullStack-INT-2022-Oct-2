import express from "express";
const router = express.Router();

import { addUser, getUsers } from "./userControl";

router
    .post("/add-user", addUser)
    // .post("/get-user", login)
    .get("/get-users", getUsers)
    // .get("/delete-cookie" , logout)

export default router;
