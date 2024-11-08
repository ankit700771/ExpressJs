import express from "express";
import { PORT } from "./config/serverConfig.js";
// import tweetRouter from "./routes/tweet.js";
import apiRouter from "./routes/apiRouter.js";
const app = express();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server start at port number ${PORT}`);
});
