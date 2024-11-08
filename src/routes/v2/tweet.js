import express from "express";
import { getTweet, getTweetByID } from "../../controllers/tweetsController.js";
const router = express.Router();

router.get("/", getTweet);

router.get("/:id", getTweetByID);

export default router;
