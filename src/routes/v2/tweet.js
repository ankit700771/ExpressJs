import express from "express";
import {
  tweetController,
  tweetControllerByID,
} from "../../controllers/tweetsController.js";
const router = express.Router();

router.get("/", tweetController);

router.get("/:id", tweetControllerByID);

export default router;
