import express from "express";
import { addUser, deleteUser, getAllUsers, getUser, login } from "./UserControl";

const router = express.Router();

router
    .post("/add", addUser)
    .post("/login", login)
    .get('/get', getUser)
    .get('/getAll', getAllUsers)
    .delete('/delete/:_id', deleteUser)

export default router