import express from "express";
import { addUser, login } from "./UserControl";

const router = express.Router();

router
    .post("/add", addUser)
    .post("/login", login);

export default router;