import express from "express";
import {
  commentsControllers,
  commentsControllersByID,
} from "../../controllers/commentsControllers.js";
const router = express.Router();

router.get("/", commentsControllers);

router.get("/:id", commentsControllersByID);

export default router;
