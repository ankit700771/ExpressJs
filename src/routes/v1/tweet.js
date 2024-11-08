import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Hello my name is ankit",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "After tweet",
    id: req.params.id,
  });
});

export default router;
