import express from "express";
import {
  getComments,
  getCommentsByID,
} from "../../controllers/commentsControllers.js";
const router = express.Router();

router.get("/", getComments);

router.get("/:id", getCommentsByID);

export default router;
