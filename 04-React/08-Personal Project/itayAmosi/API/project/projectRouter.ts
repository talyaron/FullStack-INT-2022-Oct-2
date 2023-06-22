import express from "express";
const router = express.Router();

import { addProject, getProjectById, getProjects } from "./projectControl";
import { adminAccess } from "../middleware/adminMiddleware";


router
  .post("/add-project", adminAccess, addProject)
  .get("/get-projects", getProjects)
  .get("/get-project-by-id", getProjectById);

export default router;
