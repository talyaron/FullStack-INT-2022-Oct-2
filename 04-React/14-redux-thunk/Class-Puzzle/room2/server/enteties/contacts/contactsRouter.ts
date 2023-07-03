import express from "express";
import { getContacts } from "./contactsControl";

const router = express.Router();

router.get("/allContacts", getContacts);

export default router;
