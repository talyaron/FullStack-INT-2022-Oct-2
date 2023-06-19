import express from "express";
import { addUser, getUser, login } from "./UserControl";

const router = express.Router();

router
    .post("/add", addUser)
    .post("/login", login)
    .get('/get', getUser)

export default router;