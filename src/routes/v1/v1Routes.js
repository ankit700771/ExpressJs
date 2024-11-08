import express from "express";
import tweetRouter from "./tweet.js";
import commentsRouter from "./comments.js";
const router = express.Router();

router.use("/tweet", tweetRouter);

router.use("/comments", commentsRouter);

export default router;
