import express from "express";
import { createEvent, deleteEvent, getAllEvents } from "./EventControl";

const router = express.Router();

router.post("/create", createEvent).get("/getAll", getAllEvents).delete('/delete/:_id', deleteEvent);

export default router;
