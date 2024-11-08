import express from "express";
import {
  getTweet,
  getTweetByID,
  createTweet,
} from "../../controllers/tweetsController.js";

import { zodSchema } from "../../validators/zodSchema.js";
import { validate } from "../../validators/zodValidator.js";

const router = express.Router();

router.get("/", getTweet);

router.get("/:id", getTweetByID);

router.post("/", validate(zodSchema), createTweet);

export default router;
