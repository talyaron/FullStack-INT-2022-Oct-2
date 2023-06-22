import express from "express";
const router = express.Router();

import { addComment, getComments } from "./commentControl";

router
  .post("/add-comment", addComment)
  .get("/get-comments-by-projectId", getComments)

export default router;
