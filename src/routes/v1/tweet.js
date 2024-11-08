import express from "express";
import {
  getTweet,
  getTweetByID,
  createTweet,
} from "../../controllers/tweetsController.js";
import { tweetsValidator } from "../../validators/tweetsValidator.js";

const router = express.Router();

router.get("/", getTweet);

router.get("/:id", getTweetByID);

router.post("/", tweetsValidator, createTweet);

export default router;
