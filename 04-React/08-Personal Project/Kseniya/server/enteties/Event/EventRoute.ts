import express from "express";
import { createEvent, getAllEvents } from "./EventControl";

const router = express.Router();

router.post("/create", createEvent).get("/getAll", getAllEvents);

export default router;
